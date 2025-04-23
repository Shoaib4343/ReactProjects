import React, { useContext, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom'
import { SideBarContext } from '../context/SideBarContext';
import { IoBagOutline } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)
  const [isNav, setIsNav] = useState(false);
  const handleIsNav = () => setIsNav(!isNav);
  const {itemAmount} = useContext(CartContext)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Brand */}
        <div className="flex items-center">
          <Link to='/' className="text-3xl font-extrabold text-gray-900 tracking-wide">Elon.</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold underline underline-offset-8"
                : "text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-8 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold underline underline-offset-8"
                : "text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-8 transition"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold underline underline-offset-8"
                : "text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-8 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold underline underline-offset-8"
                : "text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-8 transition"
            }
          >
            Contact
          </NavLink>
        </nav>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* add to cart icons */}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer  p-3 rounded-full text-base font-bold transition relative">
            <IoBagOutline  size={26} />
            <span className=' absolute bottom-2 right-2 text-white bg-red-600 rounded-full w-2 h-2 text-xs font-normal flex justify-center items-center p-[8px]'>{itemAmount}</span>
          </button>
          <Link to={'/login'} className="cursor-pointer text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 px-5 py-2 rounded-full text-sm font-semibold transition">
            Login
          </Link>
          <Link to='/register' className="cursor-pointer bg-gray-900 text-white hover:bg-gray-800 px-5 py-2 rounded-full text-sm font-semibold transition">
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleIsNav} className="text-gray-700 hover:text-gray-900 cursor-pointer transition">
            {isNav ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-full h-screen bg-white bg-opacity-95 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${isNav ? 'translate-x-0' : 'translate-x-full'
          }`}
      >

        <nav className="flex flex-col items-center mt-10 gap-6">
          {/* add to cart icons */}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer  p-3 rounded-full text-base font-bold transition relative">
            <IoBagOutline size={30} />
            <span className=' absolute bottom-2 right-2 text-white bg-red-600 rounded-full w-4 h-4 text-sm font-normal flex justify-center items-center p-1'>{itemAmount}</span>
          </button>
          <NavLink
            onClick={handleIsNav}
            to="/"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Home
          </NavLink>

          <NavLink
            onClick={handleIsNav}
            to="/category"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={handleIsNav}
            to="/about"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleIsNav}
            to="/contact"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Contact
          </NavLink>

          <div className="flex gap-4 mt-8">
            <button onClick={handleIsNav} className="cursor-pointer text-gray-700 border border-gray-300 px-5 py-2 rounded-full hover:border-gray-400 hover:text-gray-900 text-sm font-semibold transition">
              Login
            </button>
            <button onClick={handleIsNav} className="cursor-pointer bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 text-sm font-semibold transition">
              Sign Up
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
}

export default Header;
