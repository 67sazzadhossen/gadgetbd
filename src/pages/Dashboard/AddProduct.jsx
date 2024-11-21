import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import useLoadUser from "../../hooks/useLoadUser";

const AddProduct = () => {
  const { user } = useLoadUser();
  const axiosSecure = useAxiosSecure();
  const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const imageHosting = await axios.post(image_hosting_url, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (imageHosting.data.success) {
      const productData = {
        email: user.email,
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        image: imageHosting.data.data.display_url,
        featured: data.featured || false, // Default to false if not checked
      };

      const res = await axiosSecure.post("/add-product", productData);
      if (res.data.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };


  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 mt-8">Add Product</h2>
      <div className="w-8/12 mx-auto bg-white p-6 rounded-md shadow-md my-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              placeholder="Enter product name"
              className="w-full border rounded-md p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full border rounded-md p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home_appliances">Home Appliances</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 0.1, message: "Price must be greater than 0" },
              })}
              placeholder="Enter product price"
              className="w-full border rounded-md p-2"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              placeholder="Enter product description"
              className="w-full border rounded-md p-2"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Image
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Image file is required",
              })}
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("featured")}
              id="featured"
              className="mr-2"
            />
            <label htmlFor="featured" className="text-sm font-medium">
              Mark as Featured Product
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
