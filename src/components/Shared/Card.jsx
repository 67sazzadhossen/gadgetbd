/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useLoadUser from "../../hooks/useLoadUser";
import useAddToWishlist from "../../hooks/useAddToWishlist";

const Card = ({ product }) => {
  const { user } = useLoadUser();
  // console.log(user?.role);

  const addToWishlist = useAddToWishlist();

  return (
    <div className="card bg-gradient-to-br from-pink-50 to-blue-50 shadow-lg rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 duration-300 border border-gray-200">
      {/* Image Section */}
      <Link to={`/product-details/${product._id}`}>
        <div className="relative">
          <figure className="h-[300px] w-full overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </figure>
          <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 text-sm px-3 py-1 rounded-full shadow-md">
            {product.brand || "No Brand"}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="card-body p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <h2 className="text-lg font-bold text-purple-700">{product.name}</h2>

        {/* Category */}
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium text-teal-500">Category:</span>{" "}
          {product.category}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-teal-600 mt-2">
          ${product.price}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-4 flex-grow line-clamp-3">
          {product.description}
        </p>

        {/* Buttons */}
        {user?.role === "seller" || user?.role === "admin" ? (
          <div className="card-actions mt-4 gap-2"></div>
        ) : (
          <div className="card-actions mt-4 gap-2">
            <button
              onClick={() => addToWishlist(product._id)}
              className="w-full bg-gradient-to-r from-teal-200 to-blue-200 text-teal-800 text-sm font-medium py-2 rounded-md shadow-md hover:from-teal-300 hover:to-blue-300 transition"
            >
              Add to Wishlist
            </button>
            <Link
              to={`/product-details/${product._id}`}
              className="w-full text-center bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 text-sm font-medium py-2 rounded-md shadow-md hover:from-purple-300 hover:to-pink-300 transition"
            >
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
