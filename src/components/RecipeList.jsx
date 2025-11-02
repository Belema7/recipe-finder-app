// ✅ RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelect, onToggleFavorite, favorites }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      ))}
    </div>
  );
};

export default RecipeList;
