import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from '@mui/material';

export default function Counter() {
  const [count, setCount] = useState(0);
  const backgroundSpring = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count / 10})`,
  });

  return (
    <animated.div style={{ ...backgroundSpring, padding: '20px', minHeight: '200px' }}>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </animated.div>
  );
}
