import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { searchUser } from './services/githubApi'; // Corrected import to searchUser

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUser(null); // Clear previous user data

    try {
      const userData = await searchUser(username);
      if (userData) {
        setUser(userData);
      } else {
        setError(`User "${username}" not found.`);
      }
    } catch (err) {
      setError('An error occurred while fetching user data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading user data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default App;