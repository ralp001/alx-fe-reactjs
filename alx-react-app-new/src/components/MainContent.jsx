// src/MainContent.jsx
import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px' }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
      <UserProfile name="Jane Doe" age={30} bio="A passionate learner and React enthusiast." />
    </main>
  );
};

export default MainContent;