import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { TopBar } from "./TopBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg pb-4 shadow my-1">
          <TopBar />

          <div className="px-6 py-6 bg-white  ">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              👋 Welcome to Taxita Dashboard
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manage your profile, access various support modules, and control
              your data dynamically from the sidebar. Everything you need is
              just a click away.
            </p>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
