// src/store/recipeStore.js

import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set(state => ({
      recipes: [...state.recipes, newRecipe]
    })),

  // Action to delete a recipe by ID
  deleteRecipe: (recipeId) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),

  // Action to set a list of recipes (useful for initialization)
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;