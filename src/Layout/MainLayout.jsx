import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
