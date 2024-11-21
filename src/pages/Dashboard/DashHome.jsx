import useLoadUser from "../../hooks/useLoadUser";
import { Link } from "react-router-dom";
import useMyProducts from "../../hooks/useMyProducts";

const DashHome = () => {
  const { user } = useLoadUser();
  const { myProducts } = useMyProducts();
  const role = user?.role;
  return (
    <div>
      {role === "buyer" ? (
        <div>
          <h1 className="text-3xl text-center font-bold py-8">{user?.name}</h1>
          <h3>
            You wish to take <span>3</span> products
          </h3>
        </div>
      ) : role === "seller" ? (
        <div className="">
          <h1 className="text-3xl text-center font-bold py-8">{user?.name}</h1>
          <div className="text-center ">
            <h3 className="text-2xl font-semibold">
              You have <span>{myProducts?.length}</span> products
            </h3>
            <div className="space-x-2">
              <Link to={"/dashboard/add-product"} className="btn mt-4">
                Add more Product
              </Link>
              <Link to={"/dashboard/my-products"} className="btn mt-4">
                See Product List
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <h1 className="text-3xl text-center font-bold py-8">{user?.name}</h1>
          <div className="text-center ">
            <h3 className="text-2xl font-semibold">Total user : 0</h3>
            <div className="space-x-2">
              <Link to={"/dashboard/manage-users"} className="btn mt-4">
                Manage users
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashHome;
