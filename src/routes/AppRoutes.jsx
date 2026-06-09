import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import Products from "@/pages/home/Products";
import Cart from "@/pages/cart/Cart";
import AdminRoutes from "./AdminRoutes";
import AdminProducts from "@/pages/admin/AdminProducts";
import SingleProduct from "@/pages/home/SingleProduct";
import { hasStoredSession } from "@/api/axiosInstance";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated && !hasStoredSession()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated || hasStoredSession()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const role = user?.role?.toLowerCase?.();

  if (!isAuthenticated && !hasStoredSession()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!isAuthenticated || (hasStoredSession() && !user)) {
    return null;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/:slugId" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
      <Route
        element={
          <AdminProtectedRoute>
            <AdminRoutes />
          </AdminProtectedRoute>
        }
      >
        <Route path="/admin/products" element={<AdminProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
