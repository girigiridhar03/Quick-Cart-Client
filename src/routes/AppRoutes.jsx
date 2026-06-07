import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import { Route, Routes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import Products from "@/pages/home/Products";
import Cart from "@/pages/cart/Cart";
import AdminRoutes from "./AdminRoutes";
import AdminProducts from "@/pages/admin/AdminProducts";
import SingleProduct from "@/pages/home/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/:slugId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<AdminRoutes />}>
        <Route path="/admin/products" element={<AdminProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
