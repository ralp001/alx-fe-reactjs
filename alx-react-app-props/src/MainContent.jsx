import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px' }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
      <UserProfile userData={{ name: "Jane Doe", email: "jane.doe@example.com" }} />
    </main>
  );
};

export default MainContent;