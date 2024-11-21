import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useLoadSingleProduct from "../../hooks/useLoadSingleProduct";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { singleProduct } = useLoadSingleProduct(id);
  const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProduct = async (data) => {
    let imageUrl = singleProduct.image; // Default to existing image

    // Check if a new image file is uploaded
    if (data.image[0]) {
      const imageFile = { image: data.image[0] };

      try {
        // Upload to ImgBB
        const imageHosting = await axios.post(image_hosting_url, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (imageHosting.data.success) {
          imageUrl = imageHosting.data.data.display_url; // Get uploaded image URL
        }
      } catch (err) {
        console.error("Image upload failed:", err);
        return;
      }
    }

    // Prepare the updated product data
    const updatedProduct = {
      ...data,
      image: imageUrl,
    };

    const response = await axiosSecure.patch(
      `/update-product/${id}`,
      updatedProduct
    );
    if (response.data.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleUpdateProduct)}
        className="space-y-4 w-9/12 mx-auto my-8"
      >
        <h3 className="font-bold text-lg mb-4">Update Product</h3>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Check product name, if ok click update",
            })}
            defaultValue={singleProduct?.name}
            className="w-full border rounded-md p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            {...register("category", {
              required: "Check category, if ok click update",
            })}
            defaultValue={singleProduct?.category}
            className="w-full border rounded-md p-2"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <input
            type="text"
            {...register("brand", {
              required: "Check brand, if ok click update",
            })}
            defaultValue={singleProduct?.brand}
            className="w-full border rounded-md p-2"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm">{errors.brand.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            {...register("price", {
              required: "Check price, if ok click update",
              min: { value: 0.1, message: "Price must be greater than 0" },
            })}
            defaultValue={singleProduct?.price}
            className="w-full border rounded-md p-2"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Check description, if ok click update",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            defaultValue={singleProduct?.description}
            className="w-full border rounded-md p-2"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Featured Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("featured")}
            id="featured-checkbox"
            defaultChecked={singleProduct?.featured}
            className="checkbox checkbox-primary"
          />
          <label htmlFor="featured-checkbox" className="text-sm">
            Mark as Featured
          </label>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            className="file-input file-input-bordered w-full"
          />
          <div className="mt-2">
            {singleProduct?.image && (
              <img
                src={singleProduct.image}
                alt="Current Product"
                className="h-20 w-20 rounded-md"
              />
            )}
          </div>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="btn btn-outline btn-sm"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
