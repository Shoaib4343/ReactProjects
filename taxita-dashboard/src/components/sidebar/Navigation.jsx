// import React from 'react'
// import { FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Navigation = () => {
//     const navItems = [
//     { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
//     { to: "/dashboard/users", label: "Users", icon: <FaUsers /> },
//     { to: "/dashboard/settings", label: "Settings", icon: <FaCog /> },
//   ];
//   return (
//      <nav className="flex-1 space-y-1">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
//                   isActive
//                     ? "bg-gray-800 text-white"
//                     : "text-gray-300 hover:bg-gray-800 hover:text-white"
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span>{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>
//   )
// }

// export default Navigation


import React, { useState } from "react";
import { FaTachometerAlt, FaCog, FaLock, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    {
      label: "Authentication",
      icon: <FaLock />,
      children: [
        { to: "/dashboard/login", label: "Login" },
        { to: "/dashboard/signup", label: "Sign Up" },
      ],
    },
    { to: "/dashboard/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <nav className="flex-1 space-y-1">
      {navItems.map((item) => {
        if (item.children) {
          // Check if any child is active
          const isChildActive = item.children.some(
            (child) => location.pathname === child.to
          );

          return (
            <div key={item.label}>
              {/* Parent Button */}
              <button
                onClick={() => setAuthOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition-colors duration-200 ${
                  isChildActive || authOpen
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <span className="text-sm">
                  {authOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              </button>

              {/* Dropdown Menu */}
              {authOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block px-3 py-1 rounded-md transition-colors duration-200 ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        }

        // Normal Links
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
