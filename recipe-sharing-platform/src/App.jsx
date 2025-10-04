function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          🍳 Recipe Sharing Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tailwind CSS is now properly configured!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Recipes</h3>
            <p className="text-gray-600">Discover amazing recipes from our community</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Your Recipe</h3>
            <p className="text-gray-600">Contribute your favorite dishes</p>
          </div>
        </div>
        
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App