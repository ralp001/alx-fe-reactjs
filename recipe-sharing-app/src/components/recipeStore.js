// src/components/recipeStore.js
import { create } from 'zustand';

// The Zustand store. It holds the state and actions.
export const useRecipeStore = create((set) => ({
  // State: An array to hold our recipes
  recipes: [],

  // Action: Add a new recipe to the store
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Action: Remove a recipe from the store based on its ID or name
  removeRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));