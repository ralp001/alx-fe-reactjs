import React from 'react';
import Search from './components/Search';
import './App.css'; // Assuming you have some basic styling

function App() {
  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;