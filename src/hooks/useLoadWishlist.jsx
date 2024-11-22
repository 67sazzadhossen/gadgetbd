import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useLoadUser from "./useLoadUser";

const useLoadWishlist = () => {
  const { user, isLoading: userLoading } = useLoadUser(); // Renamed for clarity
  const axiosSecure = useAxiosSecure();
  const {
    data: products,
    isLoading: wishlistLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["wishlist", user?.email], // Improved query key for clarity and caching
    queryFn: async () => {
      const response = await axiosSecure.get(`/wishlist?email=${user?.email}`);
      return response.data.data; // Ensure you're returning the correct nested data
    },
    enabled: !!user?.email && !userLoading, // Only run when the email is available and user data has loaded
  });
  return {
    products,
    wishlistLoading,
    refetch,
    error,
  };
};

export default useLoadWishlist;
