import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: '',
    instructions: ''
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes - using e.target.value directly
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.summary.trim()) newErrors.summary = 'Recipe summary is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';
    if (!formData.prepTime.trim()) newErrors.prepTime = 'Prep time is required';
    if (!formData.cookTime.trim()) newErrors.cookTime = 'Cook time is required';
    if (!formData.servings.trim()) newErrors.servings = 'Servings are required';

    // Ingredient validation - at least 2 items
    if (formData.ingredients.trim()) {
      const ingredientCount = formData.ingredients.split('\n').filter(line => line.trim()).length;
      if (ingredientCount < 2) {
        newErrors.ingredients = 'Please enter at least 2 ingredients';
      }
    }

    // Instructions validation - at least 2 steps
    if (formData.instructions.trim()) {
      const stepCount = formData.instructions.split('\n').filter(line => line.trim()).length;
      if (stepCount < 2) {
        newErrors.instructions = 'Please enter at least 2 preparation steps';
      }
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        alert('Recipe added successfully!');
        setIsSubmitting(false);
        navigate('/'); // Redirect to home page
      }, 1000);
    } else {
      setErrors(formErrors);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-4">
            🍳 Add New Recipe
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Share your amazing recipe with our community
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Spaghetti Carbonara"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Recipe Summary */}
            <div>
              <label htmlFor="summary" className="block text-lg font-semibold text-gray-800 mb-2">
                Recipe Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                  errors.summary ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Brief description of your recipe..."
              />
              {errors.summary && (
                <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
              )}
            </div>

            {/* Recipe Image URL */}
            <div>
              <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-2">
                Recipe Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                placeholder="https://example.com/recipe-image.jpg"
              />
            </div>

            {/* Recipe Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Prep Time */}
              <div>
                <label htmlFor="prepTime" className="block text-sm font-semibold text-gray-800 mb-2">
                  Prep Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                    errors.prepTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 15 mins"
                />
                {errors.prepTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.prepTime}</p>
                )}
              </div>

              {/* Cook Time */}
              <div>
                <label htmlFor="cookTime" className="block text-sm font-semibold text-gray-800 mb-2">
                  Cook Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                    errors.cookTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 30 mins"
                />
                {errors.cookTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.cookTime}</p>
                )}
              </div>

              {/* Servings */}
              <div>
                <label htmlFor="servings" className="block text-sm font-semibold text-gray-800 mb-2">
                  Servings *
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                    errors.servings ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 4"
                />
                {errors.servings && (
                  <p className="text-red-500 text-sm mt-1">{errors.servings}</p>
                )}
              </div>

              {/* Difficulty */}
              <div>
                <label htmlFor="difficulty" className="block text-sm font-semibold text-gray-800 mb-2">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-800 mb-2">
                Ingredients *
              </label>
              <p className="text-sm text-gray-600 mb-3">
                Enter each ingredient on a new line. Include quantities and measurements.
              </p>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="2 cups flour&#10;1 tsp salt&#10;3 eggs&#10;..."
              />
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-lg font-semibold text-gray-800 mb-2">
                Preparation Steps *
              </label>
              <p className="text-sm text-gray-600 mb-3">
                Enter each step on a new line. Be detailed and clear.
              </p>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ${
                  errors.instructions ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Step 1: Preheat oven to 350°F&#10;Step 2: Mix dry ingredients&#10;Step 3: Add wet ingredients&#10;..."
              />
              {errors.instructions && (
                <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Recipe...
                  </span>
                ) : (
                  'Add Recipe'
                )}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-3 px-6 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold text-lg transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;