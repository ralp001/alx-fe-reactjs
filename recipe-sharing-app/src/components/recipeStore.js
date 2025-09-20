// src/store/recipeStore.js

import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // Add a favorites array
  recommendations: [], // Add a recommendations array

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => {
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    return { filteredRecipes: filtered };
  }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations (mock logic)
  generateRecommendations: () => set(state => {
    const favoriteRecipes = state.recipes.filter(recipe => state.favorites.includes(recipe.id));
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && // Don't recommend favorites
      favoriteRecipes.some(favRecipe => 
        favRecipe.description.includes('chicken') && recipe.description.includes('chicken')
      ) // Example: Recommend recipes with similar ingredients
    );
    return { recommendations: recommended.slice(0, 3) }; // Show a few recommendations
  }),
}));

export default useRecipeStore;