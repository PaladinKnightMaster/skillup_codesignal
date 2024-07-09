```
import { useState } from 'react';

function SpacecraftControl() {
  const [altitude, setAltitude] = useState(100);

  return (
    <div>
      <h1>Spacecraft Altitude: {altitude} km</h1>
      {/* TODO: Add an instruction to increase altitude by 10 km when this button is clicked */}
      <button>
        Increase Altitude
      </button>
    </div>
  );
}

export default SpacecraftControl;
```
import { useState } from 'react';

function SpacecraftControl() {
  const [altitude, setAltitude] = useState(100);

  return (
    <div>
      <h1>Spacecraft Altitude: {altitude} km</h1>
      {/* TODO: Add an instruction to increase altitude by 10 km when this button is clicked */}
      <button onClick={() => setAltitude(altitude + 10)}>
        Increase Altitude
      </button>
    </div>
  );
}

export default SpacecraftControl;