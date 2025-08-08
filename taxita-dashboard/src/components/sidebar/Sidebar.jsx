// // src/components/DashboardLayout/Sidebar.jsx
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import AccountToggle from './AccountToggle';
// import { Search } from './Search';
// import { RouteSelect } from './RouteSelect ';

// const Sidebar = () => {
//   return (
//     <aside className="w-64 h-screen bg-gray-800 text-white p-4">
//       <nav className="space-y-4">
//       <AccountToggle />
//       <Search />
//       <RouteSelect />
//         <NavLink to="/dashboard" className="block hover:text-gray-300">Dashboard</NavLink>
//         <NavLink to="/dashboard/users" className="block hover:text-gray-300">Users</NavLink>
//         <NavLink to="/dashboard/settings" className="block hover:text-gray-300">Settings</NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/DashboardLayout/Sidebar.jsx












import React from "react";
import AccountToggle from "./AccountToggle";
import { Search } from "./Search";

// Icons
import { RouteSelect } from "./RouteSelect ";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      {/* Search, Account, Route Selector */}
      <div className="p-4 space-y-4 border-b border-gray-700">
        <AccountToggle />
        <Search />
        {/* <RouteSelect /> */}
        {/* Navigation */}
        <Navigation />

      </div>
        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-sm text-gray-500">
          © 2025 Taxita
        </div>
    </aside>
  );
};

export default Sidebar;
