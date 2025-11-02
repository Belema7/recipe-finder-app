import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const removeFavorite = (recipe) => {
    const updated = favorites.filter((r) => r.idMeal !== recipe.idMeal);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-yellow-50 via-yellow-100 to-yellow-50 p-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-8 drop-shadow-lg">
          ❤️ Your Favorite Recipes
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-600 text-lg">No favorites yet. Add some!</p>
        ) : (
          <RecipeList
            recipes={favorites}
            onToggleFavorite={removeFavorite}
            favorites={favorites}
          />
        )}
      </div>
    </div>
  );
};

export default Favorite;
