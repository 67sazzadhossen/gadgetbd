import { NavLink } from "react-router-dom";
import useLoadUser from "../hooks/useLoadUser";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashNav = () => {
  const userRole = useLoadUser()?.user?.role;
  const { Logout } = useContext(AuthContext);
  // console.log(userRole);

  const links = {
    buyer: [
      { name: "Profile", path: "/dashboard/home" },
      { name: "Wishlist", path: "/dashboard/wishlist" },
      { name: "Cartlist", path: "/dashboard/cartlist" },
      { name: "Home", path: "/" },
    ],
    seller: [
      { name: "Dashboard Home", path: "/dashboard/home" },
      { name: "My Products", path: "/dashboard/my-products" },
      { name: "Add Product", path: "/dashboard/add-product" },
      { name: "Home", path: "/" },
    ],
    admin: [
      { name: "Dashboard Home", path: "/dashboard/home" },
      { name: "Manage Users", path: "/dashboard/manage-users" },
      { name: "Home", path: "/" },
    ],
  };

  const navLinks = links[userRole] || [];

  return (
    <div className="bg-base-300 min-h-screen py-8 relative ">
      <h1 className="text-center text-2xl font-bold">GadgetBD</h1>
      <ul className="flex flex-col gap-2 text-center my-16 px-6">
        {navLinks.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `text-lg font-medium rounded-2xl py-2 ${
                isActive ? "bg-blue-500 text-white" : "bg-base-200"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <button
          onClick={Logout}
          className="btn rounded-2xl absolute bottom-8 w-[87%] bg-red-500 text-white"
        >
          Log out
        </button>
      </ul>
    </div>
  );
};

export default DashNav;
