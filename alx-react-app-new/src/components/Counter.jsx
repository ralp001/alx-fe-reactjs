import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button onClick={handleIncrement} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Decrement
      </button>
      <button onClick={handleReset} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;