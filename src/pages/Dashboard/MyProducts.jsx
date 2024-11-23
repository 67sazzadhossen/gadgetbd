import LoadingPage from "../../components/Shared/LoadingPage";
import Table from "../../components/Shared/Table";
import useLoadUser from "../../hooks/useLoadUser";
import useMyProducts from "../../hooks/useMyProducts";

const MyProducts = () => {
  const { user, isLoading } = useLoadUser();
  const { myProducts, productLoading, refetch } = useMyProducts();

  if (isLoading || productLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center">Hi! {user?.name}</h1>

      <div className="my-8">
        {myProducts && myProducts.length > 0 ? (
          <Table refetch={refetch} products={myProducts} />
        ) : (
          <p className="text-center text-gray-600 text-lg">
            You currently have no products listed.
            <br />
            <span className="text-teal-500">
              Start adding products to manage them here!
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
