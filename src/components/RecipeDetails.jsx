import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
  } = recipe;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold"
        >
          ✖
        </button>

        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{strMeal}</h2>
        <p className="text-gray-500 mb-4">
          {strCategory} • {strArea}
        </p>
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <p className="text-gray-700 whitespace-pre-line">{strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
