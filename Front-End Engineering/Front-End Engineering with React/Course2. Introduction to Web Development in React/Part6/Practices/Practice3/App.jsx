/*
import { useState } from 'react';

export default function SpaceshipControl() {
  const [speed, setSpeed] = useState(0);

  const increaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed < 100 ? prevSpeed : prevSpeed));
  };

  const decreaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed > 0 ? prevSpeed - 1 : prevSpeed));
  };

  return (
    <div>
      <p>Current speed: {speed} lightyears/hour</p>
      <button onClick={increaseSpeed}>Increase Speed By 1</button>
      <button onClick={decreaseSpeed}>Decrease Speed By 1</button>
    </div>
  );
}
*/
import { useState } from 'react';

export default function SpaceshipControl() {
  const [speed, setSpeed] = useState(0);

  const increaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed < 100 ? prevSpeed + 1 : prevSpeed));
  };

  const decreaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed > 0 ? prevSpeed - 1 : prevSpeed));
  };

  return (
    <div>
      <p>Current speed: {speed} lightyears/hour</p>
      <button onClick={increaseSpeed}>Increase Speed By 1</button>
      <button onClick={decreaseSpeed}>Decrease Speed By 1</button>
    </div>
  );
}