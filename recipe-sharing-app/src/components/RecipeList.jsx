// src/components/RecipeList.jsx

import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        // Wrap each recipe in a Link
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;