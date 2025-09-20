import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    
    // Update the recipe in the store
    updateRecipe({ id: recipe.id, title, description });
    
    // Navigate back to the home page or recipe list
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;