import React, { useState, useCallback } from 'react';
import { fetchUserData } from '../services/githubService';

// Basic styling using Tailwind CSS for a cleaner look
const containerClass = "p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4";
const inputClass = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonClass = "w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-150";
const resultCardClass = "mt-6 p-4 border border-gray-200 rounded-lg text-center space-y-4";

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handler for the form submission
  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    if (!username.trim()) return; // Prevent search on empty input

    setUser(null);
    setError(null);
    setLoading(true);

    try {
      const userData = await fetchUserData(username.trim());
      setUser(userData);
    } catch (err) {
      // The error message comes from the service function
      setError(err.message);
    } finally {
      setLoading(false);
      // Optional: Clear input after search
      // setUsername(''); 
    }
  }, [username]);


  // Conditional Rendering Logic
  const renderResults = () => {
    if (loading) {
      return (
        <p className="text-center text-blue-600 font-semibold mt-4">
          Loading...
        </p>
      );
    }

    if (error) {
      return (
        <p className="text-center text-red-600 font-semibold mt-4">
          {error}
        </p>
      );
    }

    if (user) {
      return (
        <div className={resultCardClass}>
          {/* User Avatar */}
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="w-24 h-24 rounded-full mx-auto shadow-md"
          />
          
          {/* User Name/Login */}
          <h2 className="text-xl font-bold text-gray-800">
            {user.name || user.login}
          </h2>
          
          {/* Link to GitHub Profile */}
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 transition duration-150 block"
          >
            View GitHub Profile
          </a>
          
          {/* Optional: Bio/Followers for richer display */}
          {user.bio && <p className="text-gray-600 italic">{user.bio}</p>}
        </div>
      );
    }

    return (
      <p className="text-center text-gray-500 mt-4">
        Enter a GitHub username to search.
      </p>
    );
  };

  return (
    <div className={containerClass}>
      <h1 className="text-2xl font-bold text-center text-gray-800">
        GitHub User Search
      </h1>
      
      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username (e.g., torvalds)"
          className={inputClass}
          aria-label="GitHub username search input"
        />
        <button type="submit" className={buttonClass} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Display Search Results/Status */}
      {renderResults()}
    </div>
  );
}

export default Search;