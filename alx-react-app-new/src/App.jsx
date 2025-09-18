import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css'; // Assuming you have an App.css file
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>User Profile Example</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Counter />
    </div>
  );
}

export default App;