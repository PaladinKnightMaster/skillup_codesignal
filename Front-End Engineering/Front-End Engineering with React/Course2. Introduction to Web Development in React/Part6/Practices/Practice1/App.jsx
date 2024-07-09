import { useState } from 'react';

export default function SpaceshipControl() {
  const [status, setStatus] = useState('docked');

  const launchSequence = () => {
    setStatus(prevStatus => prevStatus === 'docked' ? 'launching' : prevStatus);
  };

  return (
    <div>
      <p>The spaceship is currently: {status}</p>
      <button onClick={launchSequence}>Launch</button>
    </div>
  );
}