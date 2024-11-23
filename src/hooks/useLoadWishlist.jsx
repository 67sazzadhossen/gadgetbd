import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useLoadUser from "./useLoadUser";

const useLoadWishlist = () => {
  const { user, isLoading: userLoading, error: userError } = useLoadUser(); // Added error handling for user loading
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [], // Default value to avoid undefined errors
    isLoading: wishlistLoading,
    refetch,
    error: wishlistError,
  } = useQuery({
    queryKey: ["wishlist", user?.email], // More descriptive query key
    enabled: !!user?.email && !userLoading, // Wait for user to load before fetching wishlist
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(
          `/wishlist?email=${user?.email}`
        );
        return response.data.data || []; // Ensure the data is an array
      } catch (err) {
        throw new Error(
          err.response?.data?.message || "Failed to load wishlist"
        );
      }
    },
  });

  return {
    products,
    wishlistLoading,
    refetch,
    error: userError || wishlistError, // Consolidate user and wishlist errors
  };
};

export default useLoadWishlist;
