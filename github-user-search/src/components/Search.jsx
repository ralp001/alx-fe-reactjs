import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // The handleSubmit function is now async to handle the API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setUsers([]); // Clear previous results

    try {
      // Use await to wait for the API call to complete
      const usersList = await fetchUsers({ username, location, minRepos });
      if (usersList && usersList.length > 0) {
        setUsers(usersList);
      } else {
        // Correct conditional rendering for no results
        setError("No users found matching your criteria.");
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="flex-1 p-2 border rounded-md mb-2 md:mb-0"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., Nigeria)"
            className="flex-1 p-2 border rounded-md mb-2 md:mb-0"
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min. Repositories"
            className="w-full md:w-auto p-2 border rounded-md"
          />
        </div>
        <button type="submit" disabled={loading} className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          {loading ? "Searching..." : "Advanced Search"}
        </button>
      </form>
      
      {/* Conditional rendering for loading, error, or no results */}
      {loading && <p className="mt-4 text-gray-600 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Use map() to render the list of users */}
      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map(user => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm text-center">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;