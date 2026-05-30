import AddProductDrawer from "@/components/admin/AddProductDrawer";
import { CustomHeader } from "@/components/admin/CompUtils";
import React from "react";

const AdminProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center" >
        <CustomHeader
          title={"Inventory Management"}
          description={"Control your catalog visibility and stock levels."}
        />
       <AddProductDrawer />
      </div>
    </div>
  );
};

export default AdminProducts;
