import React from 'react';

/**
 * UserProfile component to display a GitHub user's information.
 * @param {object} props - Component props.
 * @param {object} props.user - The GitHub user object to display.
 */
function UserProfile({ user }) {
  if (!user) {
    return null; // Don't render if no user data
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      textAlign: 'center'
    }}>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
      />
      <h2>{user.name || user.login}</h2> {/* Display name if available, otherwise login */}
      <p>@{user.login}</p>
      {user.bio && <p>{user.bio}</p>}
      {user.followers !== undefined && <p>Followers: {user.followers}</p>}
      {user.following !== undefined && <p>Following: {user.following}</p>}
      {user.public_repos !== undefined && <p>Public Repos: {user.public_repos}</p>}
      <p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile on GitHub
        </a>
      </p>
    </div>
  );
}

export default UserProfile;