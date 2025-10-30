// src/api/recipeApi.js

const API_BASE_URL = 'https://www.themealdb.com/api/v1/1';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.meals || []; // Return empty array if no meals
};

// Search recipes by name
export const searchRecipes = async (query) => {
  if (!query || query.trim() === '') {
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${encodeURIComponent(query.trim())}`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

// Get a random recipe
export const getRandomRecipe = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/random.php`);
    const data = await handleResponse(response);
    return data[0]; // random.php returns one meal
  } catch (error) {
    console.error('Error fetching random recipe:', error);
    throw error;
  }
};

// Fetch recipes starting with a letter (useful for suggestions)
export const getRecipesByLetter = async (letter) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?f=${letter}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error fetching recipes by letter ${letter}:`, error);
    throw error;
  }
};

// Optional: Get recipe by ID (for detailed view later)
export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    const data = await handleResponse(response);
    return data[0];
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    throw error;
  }
};