import { useQuery } from "@tanstack/react-query";
import Table from "../../components/Shared/Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useLoadUser from "../../hooks/useLoadUser";

const DashCart = () => {
  const { user, isLoading: userLoading } = useLoadUser(); // Renamed for clarity
  const axiosSecure = useAxiosSecure();
  const cartlist = true;

  const {
    data: products,
    isLoading: cartlistLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["cartlist", user?.email], // Improved query key for clarity and caching
    queryFn: async () => {
      const response = await axiosSecure.get(`/cartlist?email=${user?.email}`);
      return response.data.data; // Ensure you're returning the correct nested data
    },
    enabled: !!user?.email && !userLoading, // Only run when the email is available and user data has loaded
  });

  // Handle loading states
  if (userLoading || cartlistLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load wishlist: {error.message}
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Hi, {user?.name || "Guest"}!
      </h1>

      {products?.length > 0 ? (
        <div className="my-8">
          <Table refetch={refetch} cartlist={cartlist} products={products} />
        </div>
      ) : (
        <div className="text-center text-gray-500">
          Your wishlist is empty. Start adding your favorite products!
        </div>
      )}
    </div>
  );
};

export default DashCart;
