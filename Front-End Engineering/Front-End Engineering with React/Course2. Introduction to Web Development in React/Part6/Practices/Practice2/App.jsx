/*
import { useState } from 'react';

function SpaceshipStatus() {
  const [status, setStatus] = useState("Ready");

  const updateStatus = () => {
    setStatus(prevStatus => prevStatus === "Ready" ? "Launched" : "Ready");
  };

  return (
    <div>
      <p>The spaceship is {status} for exploration.</p>
      <button onClick={updateStatus}>Toggle Status</button>
    </div>
  );
}

export default SpaceshipStatus;
*/
import { useState } from 'react';

function SpaceshipStatus() {
  const [status, setStatus] = useState("Ready");

  const updateStatus = () => {
    setStatus(prevStatus => prevStatus === "Ready" ? "Launched" : prevStatus === "Launched" ? "Landed" : "Ready");
  };

  return (
    <div>
      <p>The spaceship is {status} for exploration.</p>
      <button onClick={updateStatus}>Toggle Status</button>
    </div>
  );
}

export default SpaceshipStatus;