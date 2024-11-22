import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadSingleProduct = (id) => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, refetch } = useQuery({
    queryKey: [id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/single-product/${id}`);
      return res.data;
    },
  });
  const singleProduct = data?.data;

  return { singleProduct, isLoading, refetch };
};

export default useLoadSingleProduct;
