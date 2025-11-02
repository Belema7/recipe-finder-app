import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-yellow-500">
          Fetch<span className="text-gray-800">nFeast</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Favorite
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-yellow-500 transition-colors duration-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center bg-white shadow-md mt-4 py-4 space-y-4 text-gray-700 font-medium md:hidden rounded-xl">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition-colors duration-200 ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`
              }
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
