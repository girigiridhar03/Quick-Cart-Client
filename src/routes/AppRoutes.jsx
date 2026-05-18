import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import { Route, Routes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import Products from "@/pages/home/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientRoutes />}>
        <Route path="/" element={<Products />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
