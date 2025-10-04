import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

// ... (keep the existing RecipeCard component code the same)

// Main HomePage component - update the Add Recipe button
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

        {/* Add Recipe Button - Updated with Link */}
        <div className="text-center mt-8 md:mt-12">
          <Link 
            to="/add-recipe"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition duration-300 inline-block"
          >
            + Add Your Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;