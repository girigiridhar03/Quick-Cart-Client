import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const ClientRoutes = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,#fff8f3_0%,#f7f5f0_36%,#f3f0ea_100%)]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1440px] px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-7">
        <Outlet />
      </section>
    </main>
  );
};

export default ClientRoutes;
