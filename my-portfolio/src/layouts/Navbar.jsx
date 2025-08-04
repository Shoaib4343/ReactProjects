import React, { useState } from 'react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Service', to: '/service' },
  { name: 'Resume', to: '/resume' },
  { name: 'Project', to: '/project' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav className="w-full flex justify-center mt-6">
        <div className="bg-[#181818] rounded-full flex items-center px-6 py-2 w-[900px] max-w-full shadow-lg relative">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 w-full justify-between">
            {/* Left links */}
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 ` +
                      (isActive
                        ? 'bg-orange-400 text-white'
                        : 'text-white hover:text-orange-400')
                    }
                    end={link.to === '/'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2 mx-4">
              <img src="/logo navbar.png" alt="Logo" className="h-12 w-auto" />
              
            </div>

            {/* Right links */}
            <div className="flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 ` +
                      (isActive
                        ? 'bg-orange-400 text-white'
                        : 'text-white hover:text-orange-400')
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </ul>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden w-full justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/logo navbar.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XIcon className="h-7 w-7 text-orange-400" />
              ) : (
                <MenuIcon className="h-7 w-7 text-orange-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="absolute top-14 left-0 w-full bg-[#181818] rounded-b-xl shadow-lg z-20 flex flex-col items-center py-4 md:hidden">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `block w-full text-center py-2 font-medium text-base transition-colors duration-200 ` +
                    (isActive
                      ? 'bg-orange-400 text-white rounded-full'
                      : 'text-white hover:text-orange-400')
                  }
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Theme Toggle Button */}
      <div className="fixed top-30 right-0 z-50">
        <button
          onClick={toggleTheme}
          className="bg-[#181818] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            < MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )}
          <span className="text-xs font-medium">{isDarkMode ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </>
  );
};

export default Navbar; 