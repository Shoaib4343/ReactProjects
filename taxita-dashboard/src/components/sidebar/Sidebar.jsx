

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
