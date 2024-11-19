const Banner = () => {
  const banner = {
    name: "GadgetBD",
    title: "Discover the Future of Gadgets at GadgetBD",
    subtitle:
      "Shop the latest tech, gadgets, and accessories with exclusive discounts and fast delivery.",
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?cs=srgb&dl=pexels-thepaintedsquare-583842.jpg&fm=jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            {/* <h1 className="mb-5 text-5xl font-bold">{banner.name}</h1> */}
            <h1 className="mb-5 text-4xl font-medium">{banner.title}</h1>
            <p className="mb-5">{banner.subtitle}</p>
            <button className="btn btn-outline text-white">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
