import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-red-50 py-16 px-4 sm:px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-700 mb-12">
          Contact Us
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-2">
              📞 Phone:{" "}
              <a
                href="tel:+8801834728968"
                className="text-red-500 hover:underline"
              >
                +8801834728968
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              📧 Email:{" "}
              <a
                href="mailto:mahadihasan5272@gamil.com"
                className="text-red-500 hover:underline"
              >
                mahadihasan5272@gamil.com
              </a>
            </p>
            <p className="text-gray-700">
              📍 Address: 123 Rokto Street, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
