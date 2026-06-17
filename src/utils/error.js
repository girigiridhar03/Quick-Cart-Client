import { toast } from "react-toastify";

const flattenErrorValues = (value) => {
  if (typeof value === "string" && value.trim().length > 0) {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap(flattenErrorValues);
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(flattenErrorValues);
  }

  return [];
};

export const getApiErrorMessage = (error) => {
  if (typeof error === "string" && error.trim().length > 0) {
    return error;
  }

  const responseData = error?.response?.data;

  if (
    typeof responseData?.message === "string" &&
    responseData.message.trim().length > 0
  ) {
    return responseData.message;
  }

  if (Array.isArray(responseData?.message) && responseData.message.length > 0) {
    return responseData.message.join(", ");
  }

  if (responseData?.message && typeof responseData.message === "object") {
    const messages = flattenErrorValues(responseData.message);

    if (messages.length > 0) {
      return messages.join(", ");
    }
  }

  if (Array.isArray(responseData?.errors) && responseData.errors.length > 0) {
    return responseData.errors.join(", ");
  }

  if (typeof error?.message === "string" && error.message.trim().length > 0) {
    return error.message;
  }

  return "Something went wrong";
};

export const handleThunkError = (error, rejectWithValue, options = {}) => {
  const message = getApiErrorMessage(error);

  if (options.showToast) {
    toast.error(message);
  }

  return rejectWithValue(message);
};

export const handleUnauthorizedRedirect = (
  error,
  rejectWithValue,
  options = {},
) => {
  if (error?.response?.status !== 401) {
    return null;
  }

  const message = options.message || "Please log in to continue.";

  toast.error(message);

  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);

  return rejectWithValue(message);
};

export const handleThunkSuccess = (responseData, options = {}) => {
  const message =
    options.successMessage ||
    (typeof responseData?.message === "string" &&
    responseData.message.trim().length > 0
      ? responseData.message
      : null);

  if (options.showToast && message) {
    toast.success(message);
  }

  return responseData;
};
