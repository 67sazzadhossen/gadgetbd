import DashHome from "../pages/Dashboard/DashHome";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 container mx-auto">
      <div className="col-span-2">Navbar</div>
      <div className="col-span-10">
        <DashHome />
      </div>
    </div>
  );
};

export default DashboardLayout;
