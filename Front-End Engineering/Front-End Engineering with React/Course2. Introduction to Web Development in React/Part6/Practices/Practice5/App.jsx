/*
import { useState } from 'react';

// TODO: Inside the SpaceshipFuel, initialize state to track the 'fuel' starting at 5.
// TODO: Render the fuel level if above 0, else render a warning if depleted.
// TODO: Implement a button to decrement 'fuel' by 1, preventing it from going below 0.
function SpaceshipFuel() {

  return null;
}

export default SpaceshipFuel;
*/
import { useState } from 'react';

// TODO: Inside the SpaceshipFuel, initialize state to track the 'fuel' starting at 5.
// TODO: Render the fuel level if above 0, else render a warning if depleted.
// TODO: Implement a button to decrement 'fuel' by 1, preventing it from going below 0.
function SpaceshipFuel() {
  const [fuelLevel, setFuelLevel] = useState(5);

  const decrementFuel = () => {
    if (fuelLevel > 0) {
      setFuelLevel(fuelLevel - 1);
    }
  };

  return (
    <div>
      <p>Fuel Level: {fuelLevel}</p>
      <button onClick={decrementFuel}>Decrement Fuel</button>
    </div>
  );
}

export default SpaceshipFuel;