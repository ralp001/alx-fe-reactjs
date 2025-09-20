import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  // Map favorite IDs to full recipe objects
  const favoriteRecipes = favorites.map(id => 
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined results

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
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

export default FavoritesList;