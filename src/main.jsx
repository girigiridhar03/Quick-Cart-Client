import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import { initializeAuth } from "./api/axiosInstance";
import { userDetails } from "./api/auth.api";

const init = async () => {
  try {
    const hasValidSession = await initializeAuth();

    if (hasValidSession) {
      await store.dispatch(userDetails()).unwrap();
    }
  } catch (error) {
    return error;
  } finally {
    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            style={{ zIndex: 1100 }}
          />
        </Provider>
      </BrowserRouter>,
    );
  }
};

init();
