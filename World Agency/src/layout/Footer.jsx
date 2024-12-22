import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const isActive = (({isActive})=>isActive ? 'text-blue-500' : 'hover:underline')
  return (
    <div className="bg-gray-900 text-white pt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Travel</h3>
            <p>Discover unforgettable experiences around the world with us.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><NavLink to="/" className={isActive}>Home</NavLink></li>
              <li><NavLink to="/about" className={isActive}>About</NavLink></li>
              <li><NavLink to="/Countries" className={isActive}>Countries</NavLink></li>
              <li><NavLink to="/contact" className={isActive}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@exploretravel.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Column 4 - Social Media */}
          <div >
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="grid gap-2">
              <NavLink to="#" className="text-white hover:text-gray-800">
                <i className="fab fa-facebook"></i> Facebook
              </NavLink>
              <NavLink to="#" className="text-white hover:text-gray-800">
                <i className="fab fa-twitter"></i> Twitter
              </NavLink>
              <NavLink to="#" className="text-white hover:text-gray-800">
                <i className="fab fa-instagram"></i> Instagram
              </NavLink>
              <NavLink to="#" className="text-white hover:text-gray-800">
                <i className="fab fa-linkedin"></i> LinkedIn
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 mt-4">
        <p className="text-sm">&copy; 2024 Explore Travel. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
