import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Rokto</h2>
          <p className="text-gray-200 text-sm">
            Rokto is a free platform connecting blood searchers with voluntary
            blood donors across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-white">
                Join as Donor
              </a>
            </li>
            <li>
              <a href="/search" className="hover:text-white">
                Search Donors
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>📞 +880 1234 567 89</li>
            <li>📧 info@rokto.com</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-200 text-2xl">
            <a href="#" className="hover:text-white">
              🐦
            </a>
            <a href="#" className="hover:text-white">
              📘
            </a>
            <a href="#" className="hover:text-white">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-red-500 pt-6 text-center text-gray-200 text-sm">
        &copy; 2025 Rokto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
