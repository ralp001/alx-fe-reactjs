// src/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ color: '#007bff', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#666' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;