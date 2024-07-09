/*
import { useState } from 'react';

function SpaceshipFuel() {
  // TODO: Declare a state variable for tracking the fuel level with initial value 100

  // TODO: Return a div containing a paragraph to show the current fuel level and a button labeled 'Use Fuel'
  // When 'Use Fuel' is clicked, the fuel level should decrease by 10
  return null;
}

export default SpaceshipFuel;
*/
import { useState } from 'react';

function SpaceshipFuel() {
  // TODO: Declare a state variable for tracking the fuel level with initial value 100
  const [fuelLevel, setFuelLevel] = useState(100);
  // TODO: Return a div containing a paragraph to show the current fuel level and a button labeled 'Use Fuel'
  // When 'Use Fuel' is clicked, the fuel level should decrease by 10
  const useFuel = () => setFuelLevel(fuelLevel - 10);

  if (fuelLevel > 0) {
    return (
      <div>
        <p>Fuel Level: {fuelLevel} kg</p>
        <button onClick={useFuel}>Use Fuel</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Out of fuel</p>
      </div>
    );
  }
}

export default SpaceshipFuel;