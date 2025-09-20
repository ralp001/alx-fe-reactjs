import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore();

  // Trigger filtering whenever recipes or searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  // Determine which list to display
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map(recipe => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;