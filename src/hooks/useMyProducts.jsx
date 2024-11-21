import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useLoadUser from "./useLoadUser";

const useMyProducts = () => {
  const { user, isLoading } = useLoadUser();
  const axiosSecure = useAxiosSecure();
  const {
    data,
    isLoading: productLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-products?email=${user.email}`);
      return res.data;
    },
  });
  const myProducts = data?.data;

  return { myProducts, productLoading, refetch };
};

export default useMyProducts;
