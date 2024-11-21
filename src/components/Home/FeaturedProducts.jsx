import Card from "../Shared/Card";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 2500,
      email: "sazzadhossen010@gmail.com",
      image:
        "https://ae01.alicdn.com/kf/Sd66ac8fd91e64c3e8396076a15f9e906T.jpg?width=1000&height=1000&hash=2000",
      description:
        "Experience high-quality sound with these comfortable wireless Bluetooth headphones, featuring noise cancellation and long battery life.",
    },
    {
      name: "Smart Fitness Band",
      category: "Wearable Tech",
      price: 1800,
      email: "sazzadhossen010@gmail.com",
      image:
        "https://syscomputersltd.com/image/cache/catalog/Gadget/Smart%20Band/9-500x500.jpg",
      description:
        "Track your fitness goals with this sleek smart band, offering heart rate monitoring, step counting, and sleep tracking.",
    },
    {
      name: "Portable Power Bank 20,000mAh",
      category: "Accessories",
      price: 1200,
      email: "sazzadhossen010@gmail.com",
      image:
        "https://media.e-valy.com/cms/products/images/3a6852ca-24bd-4089-abc8-79ff3a3cc195",
      description:
        "Stay charged on the go with this high-capacity portable power bank, equipped with fast charging support for multiple devices.",
    },
    {
      name: "4K Ultra HD Smart TV",
      category: "Home Entertainment",
      price: 45000,
      email: "sazzadhossen010@gmail.com",
      image: "https://ecom.rangs.com.bd/storage/9963/860X740-01.jpg",
      description:
        "Upgrade your home entertainment setup with this 55-inch 4K Ultra HD Smart TV featuring vibrant colors and seamless streaming.",
    },
    {
      name: "Gaming Mouse with RGB Lights",
      category: "Gaming",
      price: 1500,
      email: "sazzadhossen010@gmail.com",
      image:
        "https://www.jiomart.com/images/product/original/rvdukxjtan/entwino-d1-gaming-mouse-for-laptop-gaming-pc-usb-wired-rgb-lights-optical-mouse-for-computer-product-images-orvdukxjtan-p594705374-0-202210202205.jpg?im=Resize=(1000,1000)",
      description:
        "Enhance your gaming experience with this ergonomic gaming mouse, complete with customizable RGB lights and high-precision tracking.",
    },
    {
      name: "Laptop Cooling Pad",
      category: "Accessories",
      price: 800,
      email: "sazzadhossen010@gmail.com",
      image: "https://m.media-amazon.com/images/I/81mkhqAVLDL._AC_SL1500_.jpg",
      description:
        "Keep your laptop cool during extended use with this durable and quiet cooling pad, designed for laptops of all sizes.",
    },
  ];
  return (
    <>
      <h1 className="text-center text-2xl font-bold my-16">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {products.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
