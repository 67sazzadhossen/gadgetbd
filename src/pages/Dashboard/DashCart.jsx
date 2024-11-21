import Table from "../../components/Shared/Table";
import useLoadUser from "../../hooks/useLoadUser";

const DashCart = () => {
  const { user, isLoading } = useLoadUser();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center">Hi ! {user?.name}</h1>

      <div className="my-8">
        <Table />
      </div>
    </div>
  );
};

export default DashCart;
