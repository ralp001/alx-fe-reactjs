// src/App.jsx

import UserProfile from './components/UserProfile';

function App() {
  // You can remove or keep the existing content if you have any
  return (
    <div className="min-h-screen bg-white"> 
      {/* The UserProfile component will be centered thanks to its own styles */}
      <UserProfile />
    </div>
  );
}

export default App;