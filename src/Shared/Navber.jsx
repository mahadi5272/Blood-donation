import React from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const handleSignOut = () => {
    logOut();
  };

  // Links
  const beforeLoginLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/donation-requests" className="hover:text-red-500">
          Donation Requests
        </Link>
      </li>
      <li>
        <Link to="/search" className="hover:text-red-500">
          Search
        </Link>
      </li>
      <li>
        <Link to="/funding" className="hover:text-red-500">
          Funding
        </Link>
      </li>
    </>
  );

  const afterLoginLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/donation-requests" className="hover:text-red-500">
          Donation Requests
        </Link>
      </li>
      <li>
        <Link to="/search" className="hover:text-red-500">
          Search
        </Link>
      </li>
    </>
  );

  const authLinks = user ? (
    <>
      <li>
        <Link to="/dashboard" className="hover:text-red-500">
          Dashboard
        </Link>
      </li>
      <li>
        <button onClick={handleSignOut} className="hover:text-red-500">
          Logout
        </button>
      </li>
    </>
  ) : (
    <li>
      <Link to="/login" className="hover:text-red-500">
        Login
      </Link>
    </li>
  );

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {user ? beforeLoginLinks : afterLoginLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-10 mr-2"
            src="https://i.ibb.co/MxfkzgzJ/blood-donate-illustration-design.png"
            alt="Logo"
          />
          <span className="font-bold text-red-600 text-xl">Rokto</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
          {user ? beforeLoginLinks : afterLoginLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
          {authLinks}
        </ul>
      </div>

      {/* Mobile Auth Links */}
      <div className="lg:hidden ml-auto">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
          {authLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
