/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useLoadUser from "../../hooks/useLoadUser";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useLoadUser();
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading || loading) {
    return <div>Loading....</div>;
  }
  if (!isLoading && user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
