// src/pages/DashboardHome.jsx
import React from "react";

import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import StatCards from "./StatCards";

const DashboardHome = () => {
  return (
    <div className="bg-white rounded-lg py-4 shadow" >
      
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
