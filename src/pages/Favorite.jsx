import React from "react";
import Navbar from "../components/Navbar";

const Favorite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4 drop-shadow-sm">
          ❤️ Favorite Recipes
        </h2>

        <p className="text-gray-700 text-lg max-w-md">
          No favorite recipes yet. Start exploring and add some tasty dishes to
          your favorites!
        </p>

        {/* Decorative placeholder */}
        <div className="mt-10 w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center shadow-inner">
          <span className="text-5xl">🍲</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
