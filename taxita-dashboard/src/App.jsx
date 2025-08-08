// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/DashboardHome";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<User />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      {/* Add other routes here */}
    </Routes>
  );
};

export default App;
