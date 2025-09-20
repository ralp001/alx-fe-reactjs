import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  setRecipes: (recipes) => set({ recipes }),

  // New action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // New action to filter recipes based on the search term
  filterRecipes: () => set(state => {
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    return { filteredRecipes: filtered };
  }),
}));

export default useRecipeStore;