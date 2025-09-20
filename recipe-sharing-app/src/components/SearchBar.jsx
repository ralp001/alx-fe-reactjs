import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Call the filter action after the search term is updated
    filterRecipes(); 
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      onChange={handleSearchChange}
      style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
    />
  );
};

export default SearchBar;