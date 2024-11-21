/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useLoadUser from "../../hooks/useLoadUser";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useLoadUser();
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading || isLoading) {
    return <div>Loading....</div>;
  }
  if (!isLoading && user?.role === "admin") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
