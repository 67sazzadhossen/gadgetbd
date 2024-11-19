import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://gadgetbd-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
