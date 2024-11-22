import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          About GadgetBD
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to GadgetBD, your one-stop destination for the latest gadgets
          and tech products. We aim to bring cutting-edge technology to your
          doorstep, offering a curated selection of high-quality electronics at
          unbeatable prices.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Our mission at GadgetBD is to make technology accessible to everyone.
          We are committed to providing a seamless shopping experience, offering
          a wide range of gadgets from top brands. Whether you are a tech
          enthusiast or just looking for the best deals, GadgetBD is here to
          meet your needs.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What We Offer</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          At GadgetBD, we offer a variety of high-quality gadgets and tech
          products, including:
        </p>
        <ul className="mt-6 list-disc pl-8 space-y-2 text-lg text-gray-600 max-w-3xl mx-auto">
          <li>Smartphones and Accessories</li>
          <li>Tablets and Laptops</li>
          <li>Smart Watches and Fitness Trackers</li>
          <li>Gaming Consoles and Accessories</li>
          <li>Headphones and Earbuds</li>
          <li>Home Electronics and Smart Devices</li>
        </ul>
      </div>

      {/* Our Values */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
        <ul className="mt-6 list-disc pl-8 space-y-2 text-xl text-gray-600 max-w-3xl mx-auto">
          <li>
            <strong>Customer Satisfaction:</strong> Your satisfaction is our top
            priority, and we strive to offer exceptional customer service and
            support.
          </li>
          <li>
            <strong>Quality Assurance:</strong> We carefully select our products
            to ensure they meet the highest standards of quality and
            performance.
          </li>
          <li>
            <strong>Innovation:</strong> We stay ahead of the curve, providing
            the latest gadgets and tech innovations to our customers.
          </li>
          <li>
            <strong>Affordable Prices:</strong> We offer competitive pricing to
            make sure that top-quality technology is accessible to everyone.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">
          Ready to Explore Our Collection?
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Browse through our wide range of gadgets and take your tech experience
          to the next level.
        </p>
        <Link to={"/products"}>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
