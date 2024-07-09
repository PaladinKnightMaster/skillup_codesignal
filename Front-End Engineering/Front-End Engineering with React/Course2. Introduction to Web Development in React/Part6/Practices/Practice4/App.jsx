```
import { useState } from 'react';

export default function SpaceshipFuel() {
  const [fuelLevel, setFuelLevel] = useState(100);
  const [isEngineOn, setIsEngineOn] = useState(false);

  const toggleEngine = () => {
    setIsEngineOn(prevIsEngineOn => !prevIsEngineOn);
  }

  // TODO: Write a function to adjust the spaceship's fuel level.
  // If the engine is on and there's fuel, decrease it by one. Otherwise, do not change it.

  return (
    <div>
      <p>Engine Status: {isEngineOn ? "On" : "Off"}</p>
      <p>Fuel Level: {fuelLevel}</p>
      <button onClick={toggleEngine}>Toggle Engine</button>

      {/* TODO: Connect the missing function that manages the fuel level. */}
      <button >Consume Fuel</button>
    </div>
  );
};
```
import { useState } from 'react';

export default function SpaceshipFuel() {
  const [fuelLevel, setFuelLevel] = useState(100);
  const [isEngineOn, setIsEngineOn] = useState(false);

  const toggleEngine = () => {
    setIsEngineOn(prevIsEngineOn => !prevIsEngineOn);
  }

  // TODO: Write a function to adjust the spaceship's fuel level.
  // If the engine is on and there's fuel, decrease it by one. Otherwise, do not change it.
  const consumeFuel = () => {
    if (isEngineOn && fuelLevel > 0) {
      setFuelLevel(fuelLevel - 1);
    }
  };

  return (
    <div>
      <p>Engine Status: {isEngineOn ? "On" : "Off"}</p>
      <p>Fuel Level: {fuelLevel}</p>
      <button onClick={toggleEngine}>Toggle Engine</button>

      {/* TODO: Connect the missing function that manages the fuel level. */}
      <button onClick={consumeFuel} >Consume Fuel</button>
    </div>
  );
};