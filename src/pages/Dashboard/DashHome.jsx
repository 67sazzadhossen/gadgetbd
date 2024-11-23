import useLoadUser from "../../hooks/useLoadUser";
import { Link } from "react-router-dom";
import useLoadWishlist from "../../hooks/useLoadWishlist";
import useMyProducts from "../../hooks/useMyProducts";

const UserProfile = () => {
  const { user } = useLoadUser();
  const role = user?.role;
  const { products } = useLoadWishlist();
  const { myProducts } = useMyProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-6xl w-full p-8  rounded-lg">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 pb-8 border-b border-gray-300">
          {/* Profile Picture */}
          <img
            src={user?.image || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-teal-500 object-cover"
          />

          {/* User Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{user?.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{user?.email}</p>
            <span className="text-sm mt-4 inline-block bg-teal-100 text-teal-600 px-4 py-1 rounded-full">
              Role: {role}
            </span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-8 space-y-12">
          {/* Buyer Section */}
          {role === "buyer" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Wishlist & Activity
              </h3>
              <p className="text-gray-600 text-lg">
                You have <span className="font-bold">{products?.length}</span>{" "}
                products in your wishlist.
              </p>
              <Link
                to="/dashboard/wishlist"
                className="text-teal-500 hover:underline text-lg mt-2 inline-block"
              >
                View Wishlist
              </Link>
            </div>
          )}

          {/* Seller Section */}
          {role === "seller" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Seller Dashboard
              </h3>
              <p className="text-gray-600 text-lg">
                You have <span className="font-bold">{myProducts?.length}</span>{" "}
                products listed.
              </p>
              <div className="mt-4 space-x-4">
                <Link
                  to="/dashboard/add-product"
                  className="bg-teal-500 text-white btn btn-sm"
                >
                  Add New Product
                </Link>
                <Link
                  to="/dashboard/my-products"
                  className="bg-gray-500 text-white btn btn-sm"
                >
                  View My Products
                </Link>
              </div>
            </div>
          )}

          {/* Admin Section */}
          {role === "admin" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Admin Dashboard
              </h3>
              <p className="text-gray-600 text-lg">
                Manage platform users and settings.
              </p>
              <div className="mt-4 space-x-4">
                <Link
                  to="/dashboard/manage-users"
                  className="bg-blue-500 text-white btn btn-sm"
                >
                  Manage Users
                </Link>
                <Link
                  to="/dashboard/settings"
                  className="bg-red-500 text-white btn btn-sm"
                >
                  Platform Settings
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
