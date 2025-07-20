import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>{' '}
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}

export default Counter;