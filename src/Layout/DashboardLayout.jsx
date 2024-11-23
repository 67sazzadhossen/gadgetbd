import { Outlet } from "react-router";
import DashNav from "../components/DashNav";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1 lg:col-span-3 relative">
        <div className="w-full lg:w-[20%] fixed">
          <DashNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 lg:col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
