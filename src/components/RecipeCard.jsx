import React from "react";

const RecipeCard = ({ recipe }) => {
  const { strMeal, strMealThumb, strCategory, strArea } = recipe;

  return (
    <div
      className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl"
    >
      {/* Recipe Image */}
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-52 object-cover"
      />

      {/* Recipe Info */}
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {strMeal}
        </h2>
        <p className="text-sm text-gray-500">
          {strCategory} • {strArea}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
