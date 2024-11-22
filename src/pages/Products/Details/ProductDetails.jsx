import { useParams } from "react-router";
import useLoadSingleProduct from "../../../hooks/useLoadSingleProduct";
import useAddToWishlist from "../../../hooks/useAddToWishlist";
import useAddToCart from "../../../hooks/useAddToCart";
import LoadingPage from "../../../components/Shared/LoadingPage";

const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct: product, isLoading } = useLoadSingleProduct(id);
  // console.log(id);
  const addToWishlist = useAddToWishlist();
  const addToCart = useAddToCart();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product?.name}
          </h1>
          <p className="text-xl text-teal-600 font-semibold mb-4">
            ${product?.price}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product?.description}
          </p>

          {/* Additional Information */}
          <div className="flex items-center space-x-6 mb-6">
            <span className="text-sm font-medium text-gray-600">
              <strong>Brand:</strong> {product?.brand}
            </span>
            <span className="text-sm font-medium text-gray-600">
              <strong>Category:</strong> {product?.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full sm:w-auto bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product._id)}
              className="w-full sm:w-auto bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
