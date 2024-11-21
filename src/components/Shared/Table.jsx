import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
const Table = ({ products, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/delete-product/${id}`);
        if (res.data.message === "success") {
          Swal.fire({
            title: "Deleted!",
            text: "Your product is deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-80 font-semibold text-red-800">
                        Price : ${product.price}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <th className="space-x-1 flex">
                  <Link
                    className="btn btn-xs btn-warning"
                    to={`/dashboard/update-product/${product._id}`}
                  >
                    <GrUpdate />
                  </Link>

                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
