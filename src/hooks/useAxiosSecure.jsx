import axios from "axios";

const axiosPublic = axios.create({
  baseURL: ["https://gadgetbd-server.vercel.app"],
});

const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;
