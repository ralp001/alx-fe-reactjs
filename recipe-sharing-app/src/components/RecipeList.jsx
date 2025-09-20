// src/components/RecipeList.jsx
// ... (existing imports)
import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // ... (existing state and useEffect)
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id} style={{ display: 'flex', alignItems: 'center', margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ flexGrow: 1, textDecoration: 'none', color: 'black' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <button onClick={() => {
              if (favorites.includes(recipe.id)) {
                removeFavorite(recipe.id);
              } else {
                addFavorite(recipe.id);
              }
            }}>
              {favorites.includes(recipe.id) ? '❤️' : '♡'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;