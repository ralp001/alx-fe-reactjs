// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserProfile() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default UserProfile;