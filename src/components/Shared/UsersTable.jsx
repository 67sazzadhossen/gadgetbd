/* eslint-disable react/prop-types */
const UsersTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((product, idx) => (
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
              <th className=" space-x-1">
                <button className="btn btn-xs btn-warning">Update</button>
                <button className="btn btn-xs btn-error text-white">
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
