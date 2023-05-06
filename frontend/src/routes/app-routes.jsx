import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
  Home,
  AdminLogin,
  AdminDashboard,
  PendingAccount,
  ManageUsers,
  ComplaintAdd,
  CustomerRegister,
  GovAuthLogin,
  GovAuthRegister,
  GovAuthDashboard,
  ManageMaintenanceTeam,
  ManageComplaints,
  CustomerLogin,
  AdminProfile,
} from "../pages";

// Components
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/customer/register" element={<CustomerRegister />} />
          <Route path="/customer/login" element={<CustomerLogin />} />

          {/* Government Authority Routes */}
          <Route path="/gov/login" element={<GovAuthLogin />} />
          <Route path="/gov/register" element={<GovAuthRegister />} />
          <Route path="/gov/dashboard" element={<GovAuthDashboard />} />
          <Route
            path="/gov/maintenanceTeam"
            element={<ManageMaintenanceTeam />}
          />
          <Route path="/gov/complaints" element={<ManageComplaints />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/:id" element={<AdminProfile />} />

          {/* User Management Routes */}
          <Route path="/user/pending" element={<PendingAccount />} />
          <Route path="/user/userManage" element={<ManageUsers />} />

          {/*Complaint Routes*/}
          <Route path="/complaint/add" element={<ComplaintAdd />} />

          {/*Customer Routes*/}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
