import React, { useState } from "react";
import {
  FaWallet,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaHome,
  FaFileInvoice,
  FaArrowRight,
} from "react-icons/fa";
import { generateWeeksForYear } from "../utils/generateWeeks";
import SidebarWeeks from "../components/SidebarWeeks";
import { IoCalendarOutline } from "react-icons/io5";

const weeksData = generateWeeksForYear(2025);

const incomeData = [
  {
    id: 1,
    title: "Cash Account",
    amount: 1240,
    icon: FaWallet,
    color: "bg-emerald-500",
  },
  {
    id: 2,
    title: "Card Account",
    amount: 980,
    icon: FaCreditCard,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Contract Account",
    amount: 1500,
    icon: FaFileInvoiceDollar,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Sub Contract Account",
    amount: 1200,
    icon: FaFileInvoice,
    color: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Rental Income",
    amount: 2000,
    icon: FaHome,
    color: "bg-red-500",
  },
];

export default function Income() {
  const [currentWeek, setCurrentWeek] = useState(weeksData[0]);
  const [selectedDay, setSelectedDay] = useState(currentWeek.days[0]); // track selected day

  // format day like "Sun, 06 Apr 2025"
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleWeekSelect = (week) => {
    setCurrentWeek(week);
    setSelectedDay(week.days[0]); // default first day
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      {/* Top Heading */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Your Income
        </h2>
        <p className="text-sm text-gray-500">Your income listings go here...</p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SidebarWeeks
          weeksData={weeksData}
          onWeekSelect={handleWeekSelect}
          onDaySelect={handleDaySelect} // pass day select
        />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Your Daily Income</h1>
            <button className=" bg-blue-50  text-blue-600 font-medium text-sm px-4 py-2 rounded-lg shadow-sm  hover:bg-blue-100 hover:shadow-md transition duration-200 flex items-center gap-2">
              <span>View all income against {formatDate(selectedDay.id)}</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-600 mb-6 flex items-center gap-2">
            <IoCalendarOutline className="w-5 h-5 text-blue-500" />
            {formatDate(selectedDay.id)}
          </p>

          {/* Cards grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {incomeData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center text-white ${item.color}`}
                >
                  <item.icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    £{item.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
