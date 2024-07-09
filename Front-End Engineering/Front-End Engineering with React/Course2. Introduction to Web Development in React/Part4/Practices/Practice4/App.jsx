```
import React from 'react';

const ControlPanel = (props) => {
  return (
    <div>
      <p>Status: {props.shipStatus}</p>
      <button onClick={props.launch}>Launch Ship</button>
    </div>
  );
}

const Spaceship = () => {
  let status = "Ready for launch";

  // TODO: Implement a method to alert a message "Launching spaceship!" when the ship is launched.

  return (
    <div>
      <h1>Galactic Voyager 1 </h1>
      <ControlPanel shipStatus={status} launch={/* TODO: Pass the launch method here */} />
    </div>
  );
}

export default Spaceship;
```
import React from 'react';

const ControlPanel = (props) => {
  return (
    <div>
      <p>Status: {props.shipStatus}</p>
      <button onClick={props.launch}>Launch Ship</button>
    </div>
  );
}

const Spaceship = () => {
  let status = "Ready for launch";

  // TODO: Implement a method to alert a message "Launching spaceship!" when the ship is launched.
  const handleLaunch = () => {
    alert("Launching spaceship!");
  };
  return (
    <div>
      <h1>Galactic Voyager 1 </h1>
      <ControlPanel shipStatus={status} launch={/* TODO: Pass the launch method here */handleLaunch} />
    </div>
  );
}

export default Spaceship;