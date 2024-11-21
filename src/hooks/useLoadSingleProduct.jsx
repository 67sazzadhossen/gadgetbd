import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadSingleProduct = (id) => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: [id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/signle-product/${id}`);
      return res.data;
    },
  });
  const singleProduct = data?.data;

  return { singleProduct, isLoading, refetch };
};

export default useLoadSingleProduct;
