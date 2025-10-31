import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 p-6 flex flex-col items-center">
      {/* App Title */}
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
  );
};

export default App;
