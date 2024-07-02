/*
import { useState, useEffect } from 'react';

// TODO: Create a MissionControl component that accepts a missionName prop
//  Alert the mission name change effects

// TODO: Create the Spacecraft function component and initialize mission name state

// TODO: Return a button element to toggle the mission name by changing from 'Apollo' to 'Challenger' and back with conditional state update
// Additionally, return the MissionControl child component

// TODO: Export the Spacecraft component as default
*/
import { useState, useEffect } from 'react';

// TODO: Create a MissionControl component that accepts a missionName prop
//  Alert the mission name change effects

function MissionControl({ missionName }) {
  useEffect(() => {
    alert(`Mission name updated: ${missionName}`);
  }, [missionName]);

  return <h2>Current mission name: {missionName}</h2>;
}

// TODO: Create the Spacecraft function component and initialize mission name state

function Spacecraft() {
  const [missionName, setMissionName] = useState('Apollo');

  // TODO: Return a button element to toggle the mission name by changing from 'Apollo' to 'Challenger' and back with conditional state update
  // Additionally, return the MissionControl child component
  return (
    <div>
      <MissionControl missionName={missionName} />
      <button onClick={() => setMissionName(missionName === 'Apollo' ? 'Challenger' : 'Apollo')}>Toggle Mission</button>
    </div>
  );
}
// TODO: Export the Spacecraft component as default

export default Spacecraft;