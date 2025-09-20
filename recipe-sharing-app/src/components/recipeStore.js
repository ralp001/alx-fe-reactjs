import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // State: An array to hold our recipes
  recipes: [],

  // Action: Add a new recipe to the store
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Action: Replace the entire recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Action: Remove a recipe from the store based on its ID or name
  removeRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));