import useLoadUser from "../../hooks/useLoadUser";

const DashHome = () => {
  const { user, isLoading } = useLoadUser();

  return <div>{user?.name}</div>;
};

export default DashHome;
