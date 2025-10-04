function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          🍳 Recipe Sharing Platform
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Your Recipe Community!
          </h2>
          <p className="text-gray-600 mb-6">
            This is your starting point for building an amazing recipe sharing platform. 
            Tailwind CSS is successfully integrated and ready to use!
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200">
              Browse Recipes
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200">
              Share Your Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App