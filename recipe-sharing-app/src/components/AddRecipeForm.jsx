// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // Import the new store file

export function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ingredients) return;

    // Use the addRecipe action to update the state
    addRecipe({ id: Date.now(), name, ingredients: ingredients.split(',').map(item => item.trim()) });
    setName('');
    setIngredients('');
  };

  return (
    // Your form JSX here
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}