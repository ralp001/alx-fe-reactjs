// src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';
import UserProfile from './UserProfile';

function UserInfo() {
  return (
    <div>
      <UserDetails />
      <UserProfile />
    </div>
  );
}

export default UserInfo;