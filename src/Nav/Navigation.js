import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../prohealth-logo.png";
import "./Nav.css";

function Navigation() {
  return (
    // <!-- Sidenav -->
    <nav>
      <ul class="flex border-b shadow-lg border-gray-500">
        <div className="mr-5 shadow-sm">
          <a href="https://prohealthptot.com/">
            <img className="w-16 h-16" src={logo} alt="logo" />
          </a>
        </div>
        <li class="mt-6 mr-1">
          <NavLink
            className="active-link bg-white inline-block border-gray-500 rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            exact
            to="/"
            id="home"
          >
            Home
          </NavLink>
        </li>
        <li class="mt-6 mr-1">
          <NavLink
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            to="/PTOT"
            id="PTOT"
          >
            Physical and Occupational therapy-PDF
          </NavLink>
        </li>
        <li class="mt-6 mr-1">
          <NavLink
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            to="/APOS"
            id="APOS"
          >
            APOS-PDF
          </NavLink>
        </li>
        <li class="mt-6 mr-1">
          <NavLink
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            to="/Auth"
            id="Auth"
          >
            Auth-PDF
          </NavLink>
        </li>
        <li class="mt-6 mr-1">
          <NavLink
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            to="/Other"
            id="Other"
          >
            Single-PDF
          </NavLink>
        </li>
        <form class="flex ml-auto">
          <input
            class="mt-6 mr-3 border rounded-md border-gray-500 h-8  p-1 text-left border-2 hover:bg-blue-100 cursor-pointer"
            type="search"
            placeholder="Search PDF..."
          />
        </form>
      </ul>
    </nav>
  );
}

export default Navigation;
