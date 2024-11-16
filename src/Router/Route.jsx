import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Products from "../pages/Products/Products";
import Home from "../pages/Homepage/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);
