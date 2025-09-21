import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (params) => {
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const usersList = await fetchUsers(params);
      if (usersList && usersList.length > 0) {
        setUsers(usersList);
      } else {
        setError("No users found matching your criteria.");
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map(user => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm text-left">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mb-2" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
              {/* You might need another API call to get detailed info like public_repos, as search API is limited */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;