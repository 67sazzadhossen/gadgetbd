const CustomerFavorites = () => {
  const favorites = [
    {
      id: 1,
      name: "Portable Bluetooth Speaker",
      price: "$45",
      rating: 4.8,
      image:
        "https://cdn.mos.cms.futurecdn.net/6973xUBZFtvYeDmTUtuviF-1200-80.jpg",
    },
    {
      id: 2,
      name: "Noise Cancelling Earbuds",
      price: "$59",
      rating: 4.9,
      image: "https://cdn.mos.cms.futurecdn.net/PbBRJvxoAm4BM7vfhh8ZfG.jpg",
    },
    {
      id: 3,
      name: "Smart Fitness Tracker",
      price: "$99",
      rating: 4.7,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/11/fitness-tracker-2048px-5348.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Favorites
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4 w-full object-cover h-40"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="text-yellow-500 mb-2 flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      index < Math.floor(product.rating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M12 .587l3.668 7.429 8.2 1.151-5.92 5.8 1.48 8.145-7.428-3.909-7.428 3.909 1.48-8.145-5.92-5.8 8.2-1.151z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <div className="text-lg text-gray-700 font-semibold">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
