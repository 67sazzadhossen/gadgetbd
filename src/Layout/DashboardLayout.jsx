import { Outlet } from "react-router";
import DashNav from "../components/DashNav";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4">
      {/* Sidebar / Top Navigation */}
      <div className="md:col-span-4 lg:col-span-3">
        <div className="w-full fixed top-0 md:static z-50 bg-base-300 md:bg-transparent">
          <DashNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 lg:col-span-9 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
