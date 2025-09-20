// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            } />
            {/* New route for a single recipe's details */}
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;