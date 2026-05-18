import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

const ClientRoutes = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F7F5]">
      <Navbar />

      <section className="mx-auto w-full max-w-360 px-4 pt-5 sm:px-6 sm:pt-6 md:pt-25 lg:px-8 lg:pt-20">
        <Outlet />
      </section>
    </main>
  );
};

export default ClientRoutes;
