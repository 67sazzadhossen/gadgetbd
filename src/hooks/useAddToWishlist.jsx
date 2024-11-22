import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useLoadUser from "./useLoadUser";
import useLoadWishlist from "./useLoadWishlist";

const useAddToWishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useLoadUser();
  const { refetch } = useLoadWishlist();
  const addToWishlist = async (id) => {
    try {
      const resp = await axiosSecure.put(
        `/wishlist/add?id=${id}&email=${user?.email}`
      ); // Fixed double `&`
      console.log(resp.data);

      if (resp.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product has been added to your wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Product already exists in your wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return addToWishlist;
};

export default useAddToWishlist;
