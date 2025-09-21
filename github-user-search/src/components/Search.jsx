import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    if (!username.trim()) {
      return; // Do nothing if the input is empty
    }

    setLoading(true);
    setError('');
    setUser(null); // Clear previous results

    try {
      const userData = await fetchUserData(username);
      if (userData) {
        setUser(userData);
      } else {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering based on state */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {user && (
        <div style={{ marginTop: '20px' }}>
          <h3>{user.name || user.login}</h3>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;