import axios from "axios";

const axiosPublic = axios.create({
  baseURL: ["http://localhost:3000", "https://gadgetbd-server.vercel.app"],
});

const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;
