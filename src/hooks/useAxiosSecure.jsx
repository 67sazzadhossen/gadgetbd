import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router";

// const axiosSecure = axios.create({
//   baseURL: "https://gadgetbd-server.vercel.app",
//   withCredentials: true,
// });
const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log(error);
        // console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
          Logout().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [Logout, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
