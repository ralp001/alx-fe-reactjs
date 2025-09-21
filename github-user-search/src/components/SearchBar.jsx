import React, { useState } from 'react';

/**
 * SearchBar component for inputting and submitting a GitHub username.
 * @param {object} props - Component props.
 * @param {function(string): void} props.onSearch - Callback function to execute on search, receives the username.
 */
function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (username.trim()) { // Only search if username is not empty
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: '8px', marginRight: '10px', minWidth: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;