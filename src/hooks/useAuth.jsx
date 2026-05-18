import { authLogin, authLogout, authRegister } from "@/api/auth.api";
import { scheduleTokenRefresh } from "@/api/axiosInstance";
import { ACCESS_EXPIRES_KEY, REFRESH_EXPIRES_KEY } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const result = await dispatch(authRegister(formData)).unwrap();
      const accessTokenExpiresAt = result?.data?.accessTokenExpiresAt;
      const refreshTokenExpiresAt = result?.data?.refreshTokenExpiresAt;
      scheduleTokenRefresh(accessTokenExpiresAt);
      localStorage.setItem(ACCESS_EXPIRES_KEY, accessTokenExpiresAt);
      localStorage.setItem(REFRESH_EXPIRES_KEY, refreshTokenExpiresAt);
      navigate("/");
    } catch {}
  };

  const login = async (formData) => {
    try {
      const result = await dispatch(authLogin(formData)).unwrap();
      const { accessTokenExpiresAt, refreshTokenExpiresAt } = result?.data;
      scheduleTokenRefresh(accessTokenExpiresAt);
      localStorage.setItem(ACCESS_EXPIRES_KEY, accessTokenExpiresAt);
      localStorage.setItem(REFRESH_EXPIRES_KEY, refreshTokenExpiresAt);
      navigate("/");
    } catch {}
  };

  const logout = async () => {
    try {
      await dispatch(authLogout()).unwrap();
    } catch {
    } finally {
      localStorage.removeItem(ACCESS_EXPIRES_KEY);
      localStorage.removeItem(REFRESH_EXPIRES_KEY);
      navigate("/login");
    }
  };

  return {
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
  };
};

export default useAuth;
