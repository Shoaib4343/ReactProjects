// src/pages/DashboardHome.jsx
import React from "react";

import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import StatCards from "./StatCards";
import { TopBar } from "./TopBar";

const DashboardHome = () => {
  return (
    <div className="bg-white rounded-lg py-4 shadow">
      <TopBar />

      {/* <div className="px-6 py-6 bg-white my-2  ">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          👋 Welcome to Taxita Dashboard
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Manage your profile, access various support modules, and control your
          data dynamically from the sidebar. Everything you need is just a click
          away.
        </p>
      </div> */}

      <div className="relative px-6 py-6 bg-blue-500 rounded-lg shadow-md my-4 text-white w-full  mx-4 sm:mx-auto">
        {/* Left vertical border */}
        <div className="absolute top-0 left-0 h-full w-2 bg-blue-700 rounded-tl-lg rounded-bl-lg"></div>

        <h2 className="text-2xl font-bold mb-2 relative z-10">
          👋 Welcome to Taxita Dashboard
        </h2>
        <p className="text-blue-100 text-sm leading-relaxed relative z-10">
          Manage your profile, access various support modules, and control your
          data dynamically from the sidebar. Everything you need is just a click
          away.
        </p>
      </div>

      <StatCards />
      {/* Side-by-side Graphs */}
      <div className="flex flex-col lg:flex-row gap-4 px-4">
        {/* ActivityGraph takes full width */}
        <div className="flex-1">
          <ActivityGraph />
        </div>
        <UsageRadar />
      </div>
    </div>
  );
};

export default DashboardHome;
