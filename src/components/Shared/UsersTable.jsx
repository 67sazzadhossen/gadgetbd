/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useLoadUser from "../../hooks/useLoadUser";

const UsersTable = ({ users, refetch }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user: loggedUser } = useLoadUser();
  // console.log(loggedUser.role);

  const openModal = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role); // Preselect the current role
  };

  const closeModal = () => {
    setSelectedUser(null);
    setSelectedRole("");
  };

  const handleUpdateRole = async (id) => {
    if (loggedUser.role === "admin") {
      if (selectedUser && selectedRole) {
        closeModal();
        console.log(selectedRole, id);
        const resp = await axiosSecure.put(
          `/user/update-role?id=${id}&role=${selectedRole}?&email=${loggedUser?.email}`
        );
        if (resp.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    }
  };

  const handleDeleteUser = (id) => {
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
        console.log(id);
        const resp = await axiosSecure.delete(`/user/delete?id=${id}`);
        // console.log(resp);
        if (resp.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {users?.map((user, idx) => (
            <tr key={user.id || idx} className="border-t">
              <th>{idx + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.image || "/default-avatar.png"}
                        alt={`${user.name}'s Avatar`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-80">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="capitalize">{user.role}</td>
              <td>{user.email}</td>

              <th className="space-x-2">
                {/* Change Role Button */}
                <button
                  className="btn btn-xs btn-warning"
                  onClick={() => openModal(user)}
                >
                  Change Role
                </button>
                {/* Delete Button */}
                <button
                  className="btn btn-xs btn-error text-white"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Role Update Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-4">
              Update Role for {selectedUser.name}
            </h2>
            <div className="space-y-3">
              <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button className="btn btn-sm btn-outline" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleUpdateRole(selectedUser._id)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
