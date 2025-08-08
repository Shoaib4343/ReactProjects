// src/pages/StatCards.jsx
import React from "react";
import StatCard from "./StatCard";
import { dashboardData } from "./dashboardData";

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
      {dashboardData.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          value={item.value}
          pillText={item.description} // assuming description is used as pill
          trend={item.trend}
          icon={item.icon}
          iconColor={
            item.trend === "up"
              ? "text-green-600"
              : item.trend === "down"
              ? "text-red-600"
              : "text-gray-600"
          }
          bgColor={
            item.trend === "up"
              ? "bg-green-50"
              : item.trend === "down"
              ? "bg-red-50"
              : "bg-gray-100"
          }
        />
      ))}
    </div>
  );
};

export default StatCards;
