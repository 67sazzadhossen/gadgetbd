import axios from "axios";

// const axiosPublic = axios.create({
//   baseURL: "http://localhost:3000",
// });
const axiosPublic = axios.create({
  baseURL: "https://gadgetbd-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
