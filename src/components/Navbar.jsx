import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ButtonLoading from "./Shared/ButtonLoading";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  const { currentUser, Logout, loading } = useContext(AuthContext);
  console.log(currentUser);
  const links = [
    { name: "home", path: "/" },
    { name: "products", path: "/products" },
    { name: "about", path: "/about" },
    { name: "contact us", path: "/contact-us" },
  ];
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          GadgetBD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex px-1 uppercase gap-16 text-sm">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b border-black rounded-none p-1" : "p-1"
                }
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {loading ? (
        <>
          <div className="navbar-end gap-1">
            <ButtonLoading />
          </div>
        </>
      ) : (
        <div className="navbar-end gap-1">
          {currentUser ? (
            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" ">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring-2 ring-blue-800">
                      <img
                        className="rounded-full"
                        src={currentUser?.photoURL}
                      />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu  bg-base-100 rounded-box z-[1] p-2 shadow space-y-2 text-center"
                >
                  <li className="text-lg font-medium ">
                    {currentUser?.displayName}
                  </li>
                  <li className="text-lg font-medium">{currentUser?.email}</li>
                  <li>
                    <Link
                      to={"/dashboard/home"}
                      className="btn btn-sm w-full btn-success text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => Logout()}
                      className="btn btn-sm w-full btn-error text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn bg-blue-950 text-white">Login</button>
              </Link>
              <Link to={"/sign-up"}>
                <button className="btn bg-black text-white">Sign Up</button>
              </Link>
            </>
          )}
          <div className="ml-2">
            <button className="btn bg-transparent border-none">
              <IoCartSharp size={36} />
              <div className="badge">+99</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
