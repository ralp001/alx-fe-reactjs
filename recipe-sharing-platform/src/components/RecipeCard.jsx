import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Recipe Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200">
            View Recipe
          </button>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            ⭐ 4.5
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;