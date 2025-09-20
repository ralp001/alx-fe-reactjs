import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    // Generate recommendations when the component mounts
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
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

export default RecommendationsList;