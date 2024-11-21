import UsersTable from "../../components/Shared/UsersTable";
import DashHome from "./DashHome";

const ManageUsers = () => {
  return (
    <div>
      <DashHome />
      <UsersTable users={[]}></UsersTable>
    </div>
  );
};

export default ManageUsers;
