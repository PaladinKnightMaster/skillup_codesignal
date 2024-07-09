/*
import { useState } from 'react';

function SpaceshipControl() {
  const [engineState, setEngineState] = useState('off');

  return (
    <div>
      <h1>Spaceship Engine is: {engineStatus}</h1>
      <button onClick={() => setEngineState('on')}>
        Start Engine
      </button>
    </div>
  );
}

export default SpaceshipControl;
*/
import { useState } from 'react';

function SpaceshipControl() {
  const [engineState, setEngineState] = useState('off');

  return (
    <div>
      <h1>Spaceship Engine is: {engineState}</h1>
      <button onClick={() => setEngineState('on')}>
        Start Engine
      </button>
    </div>
  );
}

export default SpaceshipControl;