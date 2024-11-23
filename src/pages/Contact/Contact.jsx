const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form
            className="bg-white p-8 rounded-lg shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-lg text-gray-600">support@gadgetbd.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-lg text-gray-600">+880 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-lg text-gray-600">
                123 GadgetBD Street, Tech City, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Map */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Our Location
        </h2>
        <div className="w-full h-96">
          {/* You can replace the iframe src with a valid Google Maps embed link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.227645679643!2d90.40769431516087!3d23.810314884523287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7df7e639b77%3A0x93ab70d687dbf0a!2sTech%20City%20Dhaka!5e0!3m2!1sen!2sbd!4v1603389430494!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
