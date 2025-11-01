import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-yellow-600 mb-4 drop-shadow-lg">
        404
      </h1>

      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Oops! Page not found 😢
      </h3>

      <div className="flex items-center justify-center gap-3 text-gray-700">
        <span className="text-lg">Want to go back home?</span>
        <ArrowRight className="text-yellow-600" />
        <NavLink
          to="/"
          className="text-yellow-600 font-semibold hover:text-yellow-700 underline transition-colors"
        >
          Home
        </NavLink>
      </div>

      <p className="mt-8 text-gray-500 text-sm italic">
        Let’s get you back to something delicious 🍳
      </p>
    </div>
  );
};

export default NotFound;
