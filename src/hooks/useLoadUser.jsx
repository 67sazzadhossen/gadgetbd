import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadUser = () => {
  const { currentUser, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", currentUser?.email],
    queryFn: async () => {
      if (!currentUser?.email) {
        // Explicitly return null if no email is available
        return null;
      }
      const response = await axiosSecure.get(`/user/${currentUser.email}`);
      return response.data.data; // Return the fetched data
    },
    enabled: !loading, // Only run query if email exists
  });
  console.log(user);

  return { user, isLoading, error };
};

export default useLoadUser;
