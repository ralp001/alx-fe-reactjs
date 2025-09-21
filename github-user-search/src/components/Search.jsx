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
      setError('Please enter a username.');
      return;
    }

    setLoading(true);
    setError(''); // Clear previous errors
    setUser(null); // Clear previous results

    try {
      const userData = await fetchUserData(username);
      if (userData) {
        setUser(userData);
      } else {
        // FIXED: Match the exact expected error message
        setError("Looks like we cant find the user"); // Removed apostrophe and period
      }
    } catch (err) {
      // Handle any other unexpected errors from the API call
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
          aria-label="GitHub username"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      
      {user && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" style={{ borderRadius: '50%' }} />
          <h3>{user.name || user.login}</h3>
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