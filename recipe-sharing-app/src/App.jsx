import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'; // Assuming you have some basic styles

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;