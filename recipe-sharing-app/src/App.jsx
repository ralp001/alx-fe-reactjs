// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Import new components
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="App" style={{ textAlign: 'center' }}>
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecommendationsList /> {/* Display recommendations on the homepage */}
                <RecipeList />
              </>
            } />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} /> {/* New route for favorites */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;