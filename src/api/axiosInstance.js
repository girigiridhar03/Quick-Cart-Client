import axios from "axios";
import {
  BASE_URL,
  REFRESH_BEFORE_MS,
  REFRESH_EXPIRES_KEY,
  ACCESS_EXPIRES_KEY,
  CSRF_TOKEN,
} from "../utils/constants";

let refreshTimer = null;

const getCookieValue = (name) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name) return value;
  }

  return null;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const isAccessTokenExpired = () => {
  const expireAt = Number(localStorage.getItem(ACCESS_EXPIRES_KEY));
  if (!expireAt) return true;

  return Date.now() >= expireAt;
};

const isRefreshTokenExpired = () => {
  const expireAt = Number(localStorage.getItem(REFRESH_EXPIRES_KEY));
  if (!expireAt) return true;

  return Date.now() >= expireAt;
};

const accessTokenTimeLeft = () => {
  const expireAt = Number(localStorage.getItem(ACCESS_EXPIRES_KEY));
  if (!expireAt) return 0;
  return expireAt - Date.now();
};

const callRefreshAPI = async () => {
  const response = await axios.post(
    `${BASE_URL}/user/refreshToken`,
    {},
    {
      withCredentials: true,
      headers: {
        "x-csrf-token": getCookieValue(CSRF_TOKEN),
      },
    },
  );
  const accessTokenExpiresAt = response?.data?.data?.accessTokenExpiresAt;
  const refreshTokenExpiresAt = response?.data?.data?.refreshTokenExpiresAt;
  localStorage.setItem(ACCESS_EXPIRES_KEY, accessTokenExpiresAt);
  localStorage.setItem(REFRESH_EXPIRES_KEY, refreshTokenExpiresAt);
  return {
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  };
};

const handleLogout = async () => {
  try {
    await axios.post(
      `${BASE_URL}/user/logout`,
      {},
      {
        withCredentials: true,
        headers: {
          "x-csrf-token": getCookieValue(CSRF_TOKEN),
        },
      },
    );
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem(ACCESS_EXPIRES_KEY);
    localStorage.removeItem(REFRESH_EXPIRES_KEY);
    window.location.href = "/";
  }
};

export const scheduleTokenRefresh = (accessTokenExpireAt) => {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }

  const timeleft = accessTokenExpireAt - Date.now();
  const refreshIn = timeleft - REFRESH_BEFORE_MS;

  if (refreshIn <= 0) {
    console.log("token already expired or too close - refreshing immendiately");
    handleImmediateRefresh().catch(async (error) => {
      console.error("Immediate refresh failed:", error);
      await handleLogout();
    });
    return;
  }
  console.log(`Background refresh scheduled in ${refreshIn / 1000 / 60} mins`);
  refreshTimer = setTimeout(async () => {
    console.log("Background timer fired — refreshing token...");
    await handleImmediateRefresh();
  }, refreshIn);
};

const handleImmediateRefresh = async () => {
  if (isRefreshTokenExpired()) {
    console.log("Refresh token expired - logging out");
    await handleLogout();
    return;
  }

  try {
    const { accessTokenExpiresAt } = await callRefreshAPI();
    scheduleTokenRefresh(accessTokenExpiresAt);

    console.log("Token refreshed successfully ✅");
  } catch (error) {
    console.log("Refresh failed — logging out");
    await handleLogout();
  }
};

// document.addEventListener("visibilitychange", async () => {
//   if (document.visibilityState !== "visible") return;
//   console.log("User returned to tab - checking token status...");

//   const timeLeft = accessTokenTimeLeft();

//   if (timeLeft > REFRESH_BEFORE_MS) {
//     console.log(`Token still valid — ${timeLeft / 1000 / 60} mins left`);
//     return;
//   }

//   if (isRefreshTokenExpired()) {
//     console.log("Both tokens expired — logging out");
//     await handleLogout();
//     return;
//   }

//   console.log("Access token expired — refreshing with refresh token...");
//   await handleImmediateRefresh();
// });

export const initializeAuth = async () => {
  const accessExpiresAt = Number(localStorage.getItem(ACCESS_EXPIRES_KEY));
  const refreshExpiresAt = Number(localStorage.getItem(REFRESH_EXPIRES_KEY));

  if (!accessExpiresAt || !refreshExpiresAt) {
    console.log("No session found");
    return false;
  }

  if (isRefreshTokenExpired()) {
    console.log("Session expired — clearing data");
    await handleLogout();
    return false;
  }

  if (!isAccessTokenExpired()) {
    console.log("Session valid — rescheduling timer");
    scheduleTokenRefresh(accessExpiresAt);
    return true;
  }

  console.log("Access token expired — refreshing on init...");
  try {
    const { accessTokenExpiresAt } = await callRefreshAPI();
    scheduleTokenRefresh(accessTokenExpiresAt);
    return true;
  } catch {
    await handleLogout();
    return false;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const methodsNeedingCSRF = ["post", "patch", "put", "delete"];

    if (methodsNeedingCSRF.includes(config.method.toLowerCase())) {
      const csrfToken = getCookieValue("csrf_token");
      if (csrfToken) {
        config.headers["x-csrf-token"] = csrfToken;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isAuthPage = ["/login", "/register"].includes(
      window.location.pathname,
    );
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthPage
    ) {
      originalRequest._retry = true;

      if (isRefreshTokenExpired()) {
        await handleLogout();
        return Promise.reject(error);
      }

      try {
        const { accessTokenExpiresAt } = await callRefreshAPI();
        scheduleTokenRefresh(accessTokenExpiresAt);
        const newCsrf = getCookieValue(CSRF_TOKEN);
        if (newCsrf) {
          originalRequest.headers["x-csrf-token"] = newCsrf;
        }
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        await handleLogout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
