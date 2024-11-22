/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useLoadUser from "../../hooks/useLoadUser";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import LoadingPage from "../../components/Shared/LoadingPage";

const BuyerRoute = ({ children }) => {
  const { user, isLoading } = useLoadUser();
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading || loading) {
    return <LoadingPage />;
  }
  if (!isLoading && user?.role === "buyer") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
