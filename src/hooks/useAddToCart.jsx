import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useLoadUser from "./useLoadUser";

const useAddToCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useLoadUser();
  const addToCart = async (id, removeFromWishlist) => {
    console.log(id, removeFromWishlist);

    try {
      const resp = await axiosSecure.put(
        `/cartlist/add?id=${id}&&email=${user?.email}`
      );
      console.log(resp.data);
      if (resp.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product has been added to your cartlist",
          showConfirmButton: false,
          timer: 1500,
        });
        if (removeFromWishlist !== undefined) {
          removeFromWishlist(id);
        }
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Product has exists",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return addToCart;
};

export default useAddToCart;
