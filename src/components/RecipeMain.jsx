import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Navbar from "./Navbar";

const RecipeMain = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
          setError("No recipes found 😢");
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-linear-to-b from-yellow-50 via-yellow-100 to-yellow-50 p-6 flex flex-col items-center">
      {/* RecipeMain Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-8 drop-shadow-lg">
        🍳 Recipe Finder
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} inputRef={inputRef} />

      {/* Loading & Error Messages */}
      {loading && (
        <p className="text-gray-600 text-lg mt-4 animate-pulse">Loading recipes...</p>
      )}
      {error && <p className="text-red-500 text-lg mt-4">{error}</p>}

      {/* Recipe List */}
      {!loading && !error && (
        <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
      )}

      {/* Recipe Details Popup */}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleClosePopup} />
      )}
    </div>
    </div>
  );
};

export default RecipeMain;
