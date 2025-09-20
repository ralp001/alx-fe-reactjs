import useRecipeStore from '../store/recipeStore';
import { useParams } from 'react-router-dom'; // Used to get ID from the URL
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  // Get the recipeId from the URL
  const { recipeId } = useParams();

  // Find the recipe in the store that matches the ID
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;