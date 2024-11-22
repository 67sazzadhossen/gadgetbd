import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Products from "../pages/Products/Products";
import Home from "../pages/Homepage/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import DashWishlist from "../pages/Dashboard/DashWishlist";
import DashCart from "../pages/Dashboard/DashCart";
import DashHome from "../pages/Dashboard/DashHome";
import MyProducts from "../pages/Dashboard/MyProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import SellerRoute from "./RouterProtector/SellerRoute";
import AdminRoute from "./RouterProtector/AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import BuyerRoute from "./RouterProtector/BuyerRoute";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import ProductDetails from "../pages/Products/Details/ProductDetails";
import ProtectedRoute from "./RouterProtector/ProtectedRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },

    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        // buyer route
        {
          path: "/dashboard/home",
          element: (
            <ProtectedRoute>
              <DashHome />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/wishlist",
          element: (
            <BuyerRoute>
              <DashWishlist />
            </BuyerRoute>
          ),
        },
        {
          path: "/dashboard/cartlist",
          element: (
            <BuyerRoute>
              <DashCart />
            </BuyerRoute>
          ),
        },

        // seller route
        {
          path: "/dashboard/my-products",
          element: (
            <SellerRoute>
              <MyProducts />
            </SellerRoute>
          ),
        },
        {
          path: "/dashboard/add-product",
          element: (
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          ),
        },
        {
          path: "/dashboard/update-product/:id",
          element: (
            <SellerRoute>
              <UpdateProduct />
            </SellerRoute>
          ),
        },

        // Admin route
        {
          path: "/dashboard/manage-users",
          element: (
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
