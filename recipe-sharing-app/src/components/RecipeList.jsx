// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore'; // Import the new store file

export function RecipeList() {
  const { recipes, removeRecipe } = useRecipeStore();

  return (
    // Your list JSX here
    <div>
      <h3>Recipe List</h3>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.name}</strong>: {recipe.ingredients.join(', ')}
              <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}