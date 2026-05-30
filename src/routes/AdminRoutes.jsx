import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { navSections } from "@/utils/navObj";


const AdminRoutes = () => {
  return (
    <main className="min-h-screen bg-[#f6f6f8]">
      <SidebarProvider style={{ "--sidebar-width": "17.5rem" }}>
        <AppSidebar navSections={navSections} />
        <SidebarInset className="min-h-screen bg-[#f6f6f8]">
          <div className="flex min-h-screen flex-1 flex-col gap-4 p-5 md:p-6">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
};

export default AdminRoutes;
