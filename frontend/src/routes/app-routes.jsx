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
  CustomerDashboard,
  AdminViewAllComplaints,
  AdminComplaintPending,
  AdminComplaintAssign,
  AdminComplaintInprogress,
  AdminComplaintResolved,
  AdminGovUsers,
  AssignComplaints,
  AdminFeedManagement,
  EditComplaint
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
          <Route path="/customer/register" element={<CustomerRegister />} />
          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/gov/register" element={<GovAuthRegister />} />

          {/* Government Authority Routes */}
          <Route path="/gov/login" element={<CheckLoginStatus />}>
            <Route path="/gov/login" element={<GovAuthLogin />} />
          </Route>

          <Route
            path="/gov"
            element={<PrivateRoute permissionLevel="GOV_AUTHORITY" />}
          >
            <Route path="/gov" element={<GovAuthDashboard />} />
            <Route
              path="/gov/maintenanceTeam"
              element={<ManageMaintenanceTeam />}
            />
            <Route path="/gov/complaints" element={<ManageComplaints />} />
            <Route
              path="/gov/assignComplaints"
              element={<AssignComplaints />}
            />
          </Route>

          {/* Check Login Status Admin */}
          <Route exact path="/admin/login" element={<CheckLoginStatus />}>
            <Route exact path="/admin/login" element={<AdminLogin />} />
          </Route>

          {/* Admin Private Routes */}
          <Route
            exact
            path="/admin"
            element={<PrivateRoute permissionLevel="ADMIN" />}
          >
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/:id" element={<AdminProfile />} />
            <Route
              path="/admin/viewAllComplaints"
              element={<AdminViewAllComplaints />}
            />
            <Route path="/admin/pending" element={<PendingAccount />} />
            <Route path="/admin/userManage" element={<ManageUsers />} />

            <Route
              path="/admin/pendingComplaints"
              element={<AdminComplaintPending />}
            />
            <Route
              path="/admin/assignComplaints"
              element={<AdminComplaintAssign />}
            />
            <Route
              path="/admin/inprogressComplaints"
              element={<AdminComplaintInprogress />}
            />
            <Route
              path="/admin/resolvedComplaints"
              element={<AdminComplaintResolved />}
            />
            <Route path="/admin/govUsers" element={<AdminGovUsers />} />

            <Route path="/admin/feedManagement" element={<AdminFeedManagement />} />
          </Route>

          {/*Complaint Routes*/}
          <Route path="/complaint/add" element={<ComplaintAdd />} />
          <Route path="/complaint/edit/:id" element={<EditComplaint />} />


          {/*Customer Routes*/}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
