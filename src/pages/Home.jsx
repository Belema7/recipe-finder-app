import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar/>
    <section className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-yellow-50 to-white px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
        🍳 Welcome to <span className="text-yellow-500">Fetch-n-Feast</span>
      </h1>

      <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-8">
        Discover delicious recipes from around the world.  
        Search by ingredients, categories, or cuisines — and get inspired to cook something new today!
      </p>

      <NavLink
        to="/recipes"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
      >
        🍽️ Get Started
      </NavLink>

      <footer className="absolute bottom-6 text-gray-400 text-sm">
        Built by <span className="font-bold">Belema</span> using React & Tailwind CSS
      </footer>
    </section>
    </div>
  );
};

export default Home;
