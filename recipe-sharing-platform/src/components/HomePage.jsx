import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

// RecipeCard component with Link navigation
const RecipeCard = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Recipe Image with Error Handling */}
      <div className="h-48 overflow-hidden bg-gray-200">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-200 to-amber-300">
            <span className="text-4xl">🍳</span>
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
      
      {/* Recipe Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {recipe.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {recipe.summary}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link 
            to={`/recipe/${recipe.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200 inline-block"
          >
            View Recipe
          </Link>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            ⭐ 4.5
          </span>
        </div>
      </div>
    </div>
  );
};

// Main HomePage component
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-4">
            🍳 Recipe Sharing Platform
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing recipes from our community. Share your culinary creations and inspire others!
          </p>
        </header>

        {/* Recipe Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found. Be the first to share one!</p>
          </div>
        )}

        {/* Add Recipe Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition duration-300">
            + Add Your Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;