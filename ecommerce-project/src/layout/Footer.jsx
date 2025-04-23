// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
          
//           {/* Left Side */}
//           <div className="mb-4 md:mb-0 text-center md:text-left">
//             <h1 className="text-xl font-bold text-white">Elon.</h1>
//             <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
//           </div>

//           {/* Middle - Links */}
//           <div className="flex space-x-6 mb-4 md:mb-0">
//            <Link to="/about" className="hover:text-white transition">About</Link>
//            <Link to="/product" className="hover:text-white transition">Product</Link>
//            <Link to="/category" className="hover:text-white transition">Categories</Link>
//            <Link to="/contact" className="hover:text-white transition">Contact</Link>
//           </div>

//           {/* Right Side - Social Icons */}
//           <div className="flex space-x-4">
//             <Link to="#" className="hover:text-white transition">
//               <FaFacebookF size={20} />
//             </Link>
//             <Link to="#" className="hover:text-white transition">
//               <FaTwitter size={20} />
//             </Link>
//             <Link to="#" className="hover:text-white transition">
//               <FaInstagram size={20} />
//             </Link>
//             <Link to="#" className="hover:text-white transition">
//               <FaLinkedinIn size={20} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Branding */}
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-2xl font-bold text-white">Elon<span className="text-red-600">.</span></h1>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            <Link to="/about" className="hover:text-white transition duration-300">About</Link>
            <Link to="/product" className="hover:text-white transition duration-300">Product</Link>
            <Link to="/category" className="hover:text-white transition duration-300">Categories</Link>
            <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <Link key={i} to="#" className="text-gray-400 hover:text-white transition">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
