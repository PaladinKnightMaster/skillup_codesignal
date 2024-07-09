/*
import { useState } from 'react';

// TODO: Declare two state variables: 'fuelLevel' with initial value 100 and 'hullIntegrity' with initial value 'Stable'

// TODO: Create the updateSpaceshipStatus function that:
// - Calculate and set the new fuelLevel: If previous level is greater than 20, then decrease it by 10, otherwise do not change it
// - Updates hullIntegrity conditionally based on the new fuel level: If new fuel level is less or equal to 20 and previous level is 'Stable', then change it to 'Critical' otherwise do not change.

// TODO: Render the fuelLevel and hullIntegrity in paragraph tags
// TODO: Add a button that triggers the updateSpaceshipStatus when clicked

export default function SpaceshipDashboard() {
  return null;
}
*/
import { useState } from 'react';

// TODO: Declare two state variables: 'fuelLevel' with initial value 100 and 'hullIntegrity' with initial value 'Stable'

// TODO: Create the updateSpaceshipStatus function that:
// - Calculate and set the new fuelLevel: If previous level is greater than 20, then decrease it by 10, otherwise do not change it
// - Updates hullIntegrity conditionally based on the new fuel level: If new fuel level is less or equal to 20 and previous level is 'Stable', then change it to 'Critical' otherwise do not change.

// TODO: Render the fuelLevel and hullIntegrity in paragraph tags
// TODO: Add a button that triggers the updateSpaceshipStatus when clicked

export default function SpaceshipDashboard() {
  const [fuelLevel, setFuelLevel] = useState(100);
  const [hullIntegrity, setHullIntegrity] = useState('Stable');

  const updateSpaceshipStatus = () => {
    if (fuelLevel > 20) {
      setFuelLevel(fuelLevel - 10);
    } else if (fuelLevel <= 20 && hullIntegrity === "Stable") {
      setHullIntegrity("Critical");
    }
  };

  return (
    <div>
      <p>Fuel Level: {fuelLevel}</p>
      <p>Hull Integrity: {hullIntegrity}</p>
      <button onClick={updateSpaceshipStatus}>Decrement Fuel</button>
    </div>
  );
}