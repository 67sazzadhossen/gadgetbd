import Table from "../../components/Shared/Table";
import useLoadUser from "../../hooks/useLoadUser";
import useMyProducts from "../../hooks/useMyProducts";

const MyProducts = () => {
  const { user, isLoading } = useLoadUser();

  const { myProducts, productLoading, refetch } = useMyProducts();

  if (isLoading || productLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center">Hi ! {user?.name}</h1>

      <div className="my-8">
        <Table refetch={refetch} products={myProducts} />
      </div>
    </div>
  );
};

export default MyProducts;
