import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe, onSelect, onToggleFavorite, favorites }) => {
  const { strMeal, strMealThumb, strCategory, strArea, idMeal } = recipe;
  const isFavorite = favorites.some((fav) => fav.idMeal === idMeal);

  return (
    <div
      className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      {/* Recipe Image */}
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-48 object-cover"
        onClick={() => onSelect && onSelect(recipe)}
      />

      {/* Favorite Button (below image) */}
      <div className="flex justify-end p-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe);
          }}
          className="text-xl"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-400" />
          )}
        </button>
      </div>

      {/* Recipe Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {strMeal}
        </h2>

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            {strCategory || "Category"}
          </span>
          <span>{strArea || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
