import React, { useState, useEffect, useRef, useReducer } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Navbar from "./Navbar";

const initialState = {
  recipes: [],
  loading: false,
  error: "",
};

function recipeReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, recipes: action.payload, error: "" };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload, recipes: [] };

    default:
      return state;
  }
}

const RecipeMain = () => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const [search, setSearch] = useState("chicken");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();

        if (data.meals) {
          dispatch({ type: "FETCH_SUCCESS", payload: data.meals });
        } else {
          dispatch({ type: "FETCH_ERROR", payload: "No recipes found 😢" });
        }
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload: "Failed to fetch recipes. Please try again.",
        });
      }
    };

    fetchRecipes();
  }, [search]);

  const handleSearch = (query) => setSearch(query);
  const handleSelectRecipe = (recipe) => setSelectedRecipe(recipe);
  const handleClosePopup = () => setSelectedRecipe(null);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-yellow-50 via-yellow-100 to-yellow-50 p-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-8 drop-shadow-lg">
          🍳 Recipe Finder
        </h1>

        <SearchBar onSearch={handleSearch} inputRef={inputRef} />

        {state.loading && (
          <p className="text-gray-600 text-lg mt-4 animate-pulse">
            Loading recipes...
          </p>
        )}
        {state.error && (
          <p className="text-red-500 text-lg mt-4">{state.error}</p>
        )}

        {!state.loading && !state.error && (
          <RecipeList recipes={state.recipes} onSelect={handleSelectRecipe} />
        )}

        {selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default RecipeMain;
