import Table from "../../components/Shared/Table";
import useLoadUser from "../../hooks/useLoadUser";

import useLoadWishlist from "../../hooks/useLoadWishlist";

const DashWishlist = () => {
  const { user, isLoading: userLoading } = useLoadUser(); // Renamed for clarity

  const wishlist = true;

  const { products, wishlistLoading, refetch, error } = useLoadWishlist();

  // Handle loading states
  if (userLoading || wishlistLoading) {
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
          <Table refetch={refetch} wishlist={wishlist} products={products} />
        </div>
      ) : (
        <div className="text-center text-gray-500">
          Your wishlist is empty. Start adding your favorite products!
        </div>
      )}
    </div>
  );
};

export default DashWishlist;
