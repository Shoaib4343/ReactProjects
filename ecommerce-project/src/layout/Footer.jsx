import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Branding */}
          <div className="text-center md:text-left space-y-2">
            <Link to="/" className="flex">
              <img className="w-10 h-10" src="/images/logo.svg" alt="" />

              <h1 className="text-2xl font-bold text-white">
                Elon<span className="text-red-600">.</span>
              </h1>
            </Link>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-white transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-white transition duration-300"
            >
              About
            </Link>
            
            <Link
              to="/category"
              className="hover:text-white transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={18} />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
