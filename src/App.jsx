import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  // State to store recipes and the search term
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ref to focus on search input when app loads (we'll use it in SearchBar)
  const inputRef = useRef(null);

  // Fetch recipes whenever search term changes
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
  }, [search]); // runs whenever the search term changes

  // Function to trigger new search (will be passed to SearchBar)
  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🍳 Recipe Finder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover delicious recipes from around the world. Search by ingredient, cuisine, or dish name.
          </p>
        </div>

        {/* SearchBar Component */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} inputRef={inputRef} />
        </div>

        {/* Loading and error messages */}
        <div className="text-center">
          {loading && (
            <div className="flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              <p className="text-lg text-gray-700">Loading recipes...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-700 text-lg font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Recipe List */}
        {!loading && !error && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Found {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'}
              </h2>
              {search && (
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border">
                  Search: "{search}"
                </span>
              )}
            </div>
            <RecipeList recipes={recipes} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;