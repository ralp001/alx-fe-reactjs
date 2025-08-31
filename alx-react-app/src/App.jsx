import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css'; // Assuming you have an App.css file

function App() {
  return (
    <div className="App">
      <h1>User Profile Example</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;