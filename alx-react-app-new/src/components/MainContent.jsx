// src/components/MainContent.jsx

import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <UserProfile name="Jane Doe" age={30} bio="A passionate learner and React enthusiast." />
      <UserProfile name="John Smith" age={25} bio="Software developer with a love for technology." />
    </main>
  );
};

export default MainContent;