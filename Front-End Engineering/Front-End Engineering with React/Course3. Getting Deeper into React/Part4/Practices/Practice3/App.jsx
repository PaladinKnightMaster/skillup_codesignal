/*import { useState, useEffect } from 'react';

function ControlModule(props) {
  useEffect(() => {
    alert(`Signal strength is now ${props.signal}`);
  }, [props.signal]);

  return <p>Control Module is receiving signal strength: {props.signalStrength}</p>;
}

function Spacecraft() {
  const [signalStrength, setSignalStrength] = useState(10);

  return (
    <div>
      <ControlModule signalStrength={signalStrength} />
      <button onClick={() => setSignalStrength(signalStrength + 1)}>Boost Signal</button>
    </div>
  );
}

export default Spacecraft;
*/
import { useState, useEffect } from 'react';

function ControlModule(props) {
  useEffect(() => {
    alert(`Signal strength is now ${props.signalStrength}`);
  }, [props.signalStrength]);

  return <p>Control Module is receiving signal strength: {props.signalStrength}</p>;
}

function Spacecraft() {
  const [signalStrength, setSignalStrength] = useState(10);

  return (
    <div>
      <ControlModule signalStrength={signalStrength} />
      <button onClick={() => setSignalStrength(signalStrength + 1)}>Boost Signal</button>
    </div>
  );
}

export default Spacecraft;