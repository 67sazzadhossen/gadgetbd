const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      image:
        "https://www.cnet.com/a/img/resize/3327a432adbf436fc90d41c053d99cae9e503dbe/hub/2023/07/05/ffb5dc55-6884-4bb7-b9e1-6c14fe3d841c/samsungs.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
    {
      id: 2,
      name: "Laptops",
      image:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png",
    },
    {
      id: 3,
      name: "Smartwatches",
      image:
        "https://ynetnews.amobeezcms.com/wp-content/uploads/2024/08/601c89cc-4fc8-4080-ad7e-59cdc36d5102-img.webp",
    },
    {
      id: 4,
      name: "Headphones",
      image:
        "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
    },
    {
      id: 5,
      name: "Gaming Consoles",
      image:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2024/08/Best-Gaming-Consoles-Hero-Image.jpg",
    },
    {
      id: 6,
      name: "Cameras",
      image:
        "https://st3.depositphotos.com/12110164/16033/i/450/depositphotos_160338548-stock-photo-vintage-film-camera-digital-camera.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
