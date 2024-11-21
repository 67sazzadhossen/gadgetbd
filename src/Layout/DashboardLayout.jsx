import { Outlet } from "react-router";
import DashNav from "../components/DashNav";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 container mx-auto ">
      <div className="col-span-3 relative ">
        <div className="w-[20%] fixed">
          <DashNav />
        </div>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
