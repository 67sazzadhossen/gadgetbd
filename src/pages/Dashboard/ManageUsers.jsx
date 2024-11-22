import { useQuery } from "@tanstack/react-query";
import UsersTable from "../../components/Shared/UsersTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useLoadUser from "../../hooks/useLoadUser";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useLoadUser();
  const { data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/all-users?email=${user?.email}`);
      return resp.data.data;
    },
  });
  return (
    <div>
      <UsersTable refetch={refetch} users={data}></UsersTable>
    </div>
  );
};

export default ManageUsers;
