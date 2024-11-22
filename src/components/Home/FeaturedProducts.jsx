import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Card from "../Shared/Card";
import { Link } from "react-router-dom";
import LoadingPage from "../Shared/LoadingPage";

const FeaturedProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { loading } = useContext(AuthContext);

  const { data: featuredProducts, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/all-products?featured=true`);
      return response.data.data.products; // Return the featured products data
    },
    enabled: !loading, // Prevent query execution if loading is true
  });

  if (isLoading) {
    return <LoadingPage></LoadingPage>; // Show a loading state while fetching data
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-16">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {featuredProducts?.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
      <div className="text-center">
        <Link className="btn my-6" to={"/products"}>
          View All Products
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
