import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import Card from "../../components/Shared/Card";
import LoadingPage from "../../components/Shared/LoadingPage";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  // States for filtering, sorting, and pagination
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("price"); // Default sorting by price
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order: ascending
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Fetch products data with query parameters
  const { data, isLoading, error } = useQuery({
    queryKey: [
      "products",
      {
        currentPage,
        selectedCategory,
        selectedBrand,
        search,
        sortField,
        sortOrder,
      },
    ],
    queryFn: async () => {
      const response = await axiosPublic.get("/all-products", {
        params: {
          page: currentPage,
          limit: productsPerPage,
          category: selectedCategory,
          brand: selectedBrand,
          search,
          sortField,
          sortOrder,
        },
      });
      return response.data.data;
    },
  });

  // Handlers
  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split("-");
    setSortField(field);
    setSortOrder(order);
  };

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSearch("");
    setSortField("price");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchSubmit = (data) => {
    setSearch(data.search);
  };

  // Loading and error states
  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error loading products: {error.message}</div>;

  const { products, stats } = data;

  return (
    <div className="container mx-auto px-4">
      {/* Top Navigation */}
      <div className="flex flex-wrap justify-between items-center bg-white shadow-md py-4 px-6 mb-6 rounded-lg">
        {/* Search Form */}
        <form
          onSubmit={handleSubmit(handleSearchSubmit)}
          className="w-full md:w-1/3 mb-4 md:mb-0 border border-gray-400 flex rounded-xl items-center"
        >
          <input
            {...register("search")}
            name="search"
            type="text"
            placeholder="Type here"
            className="w-full px-2 border-none outline-none bg-transparent"
          />
          <button className="btn rounded-r-xl rounded-l-none" type="submit">
            <IoMdSearch size={20} />
          </button>
        </form>

        {/* Sort Dropdown */}
        <select
          value={`${sortField}-${sortOrder}`}
          onChange={handleSortChange}
          className="select select-bordered w-full md:w-1/5"
        >
          <option disabled value="-">
            Sort By
          </option>
          <option value="price-desc">Price: Low to High</option>
          <option value="price-asc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar Filters */}
        <div className="col-span-12 md:col-span-3 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-4">Filter By</h3>

          {/* Category Dropdown */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Category</h4>
            <select
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="">Select Category</option>
              {stats?.categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Dropdown */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Brand</h4>
            <select
              value={selectedBrand || ""}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="">Select Brand</option>
              {stats?.brands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters Button */}
          <button
            onClick={handleResetFilters}
            className="block w-full text-center px-4 py-2 mt-4 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Reset Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9">
          <h3 className="font-bold text-xl mb-4">Product List</h3>
          {products?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, idx) => (
                <Card key={idx} product={product}></Card>
              ))}
            </div>
          ) : (
            <p>No products found.</p>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6">
            <nav className="flex space-x-2">
              {Array.from({ length: stats?.totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === idx + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  } hover:bg-blue-500 hover:text-white`}
                >
                  {idx + 1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
