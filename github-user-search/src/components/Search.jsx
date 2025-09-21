import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass all search parameters to the parent component
    onSearch({ username, location, minRepos });
  };

  return (
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
      <button type="submit" className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Advanced Search
      </button>
    </form>
  );
};

export default Search;