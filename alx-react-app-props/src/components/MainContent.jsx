// src/MainContent.jsx
import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px' }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
      <UserProfile />
    </main>
  );
};

export default MainContent;