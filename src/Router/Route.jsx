import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Products from "../pages/Products/Products";
import Home from "../pages/Homepage/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
  ],
  {
    future: {
      v7_startTransition: false, // Disable startTransition warnings
      v7_relativeSplatPath: false, // Disable splat route resolution warnings
      v7_fetcherPersist: false, // Disable fetcher persistence warnings
      v7_normalizeFormMethod: false, // Disable form method warnings
      v7_partialHydration: false, // Disable partial hydration warnings
      v7_skipActionErrorRevalidation: false, // Disable action error revalidation warnings
    },
  }
);
