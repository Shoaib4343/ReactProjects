// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/DashboardHome";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ForgotPassword from "./pages/ForgotPassword";
import PartnerRegistration from "./pages/PartnerRegistration";
import Income from "./pages/Income";

const App = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Redirect from root to login if not authenticated */}
       {/* 🔹 Public Routes (grouped under PublicRoute) */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/partner-registration" element={<PartnerRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Protected Routes */}
      {/* 🔹 Protected Routes (grouped under ProtectedRoute) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<User />} />
          <Route path="settings" element={<Setting />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
