import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
