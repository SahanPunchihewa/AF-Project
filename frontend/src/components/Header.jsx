import React from "react";
import { Link, useNavigate } from "react-router-dom";
import makeToast from "./toast";

const Header = () => {
  const permissionLevel = localStorage.getItem("permissionLevel");

  const logout = () => {
    localStorage.removeItem("uId");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("nic");
    localStorage.removeItem("authToken");
    localStorage.removeItem("permissionLevel");

    if (permissionLevel === "ADMIN") {
      window.location.href = "/admin/login";
      makeToast({ type: "success", message: "Logout Successful" });
    } else if (permissionLevel === "CUSTOMER") {
      window.location.href = "/customer/login";
      makeToast({ type: "success", message: "Logout Successful" });
    } else if (permissionLevel === "GOV_AUTHORITY") {
      window.location.href = "/gov/login";
      makeToast({ type: "success", message: "Logout Successful" });
    } else {
      window.location.href = "/";
      makeToast({ type: "success", message: "Logout Successful" });
    }
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex-none text-xl font-semibold dark:text-white"
          >
            Citizen Connect
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {!permissionLevel && (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                to="/gov/login"
              >
                Gov Login
              </Link>
            )}

            {!permissionLevel && (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                to="/gov/register"
              >
                Gov Sign Up
              </Link>
            )}

            {permissionLevel === "ADMIN" && (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                to="/admin"
              >
                Dashboard
              </Link>
            )}

            {permissionLevel === "CUSTOMER" && (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                to="/customer/dashboard"
              >
                Dashboard
              </Link>
            )}

            {permissionLevel === "GOV_AUTHORITY" && (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                to="/gov"
              >
                Dashboard
              </Link>
            )}

            {permissionLevel && (
              <button
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                onClick={logout}
                to="/"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
