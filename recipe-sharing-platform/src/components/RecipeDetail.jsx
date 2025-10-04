import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Recipe Not Found</h2>
          <button 
            onClick={handleBackToHome}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={handleBackToHome}
          className="mb-6 bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow-md transition duration-200 flex items-center"
        >
          ← Back to Recipes
        </button>

        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 md:h-80 overflow-hidden bg-gray-200">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-200 to-amber-300">
                <span className="text-6xl">🍳</span>
              </div>
            ) : (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            )}
          </div>
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              {recipe.summary}
            </p>
            
            {/* Recipe Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl">🕒</div>
                <div className="font-semibold text-gray-700">Prep Time</div>
                <div className="text-gray-600">{recipe.prepTime}</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl">🔥</div>
                <div className="font-semibold text-gray-700">Cook Time</div>
                <div className="text-gray-600">{recipe.cookTime}</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl">👥</div>
                <div className="font-semibold text-gray-700">Servings</div>
                <div className="text-gray-600">{recipe.servings}</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl">⚡</div>
                <div className="font-semibold text-gray-700">Difficulty</div>
                <div className="text-gray-600">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-3xl mr-3">🥕</span>
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-3xl mr-3">👨‍🍳</span>
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-lg leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition duration-300 mr-4">
            Save Recipe
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition duration-300">
            Print Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;