/*
import { useState, useEffect } from 'react';

export default function Spaceship() {
  const [oxygenLevel, setOxygenLevel] = useState(30);
  const handleDecreaseOxygen = () => {
    setOxygenLevel(prevLevel => prevLevel - 10);
  };

  return (
    <>
      <button onClick={handleDecreaseOxygen}>Decrease Oxygen</button>
      <Cockpit oxygenLevel={oxygenLevel} />
    </>
  );
}

function Cockpit({ oxygenLevel }) {
  useEffect(() => {
    console.log(`Cockpit oxygen level: ${oxygenLevel}%`);
  }, [oxygenLevel]);

  return (
    <LifeSupport oxygenLevel={oxygenLevel} />
  );
}

function LifeSupport({ oxygenLevel }) {
  // TODO: Use useEffect to alert a warning message when oxygen levels are less or equal to 20.
  return (
    <div>Oxygen level at: {oxygenLevel}%</div>
  );
}
*/
import { useState, useEffect } from 'react';

export default function Spaceship() {
  const [oxygenLevel, setOxygenLevel] = useState(30);
  const handleDecreaseOxygen = () => {
    setOxygenLevel(prevLevel => prevLevel - 10);
  };

  return (
    <>
      <button onClick={handleDecreaseOxygen}>Decrease Oxygen</button>
      <Cockpit oxygenLevel={oxygenLevel} />
    </>
  );
}

function Cockpit({ oxygenLevel }) {
  useEffect(() => {
    console.log(`Cockpit oxygen level: ${oxygenLevel}%`);
  }, [oxygenLevel]);

  return (
    <LifeSupport oxygenLevel={oxygenLevel} />
  );
}

function LifeSupport({ oxygenLevel }) {
  // TODO: Use useEffect to alert a warning message when oxygen levels are less or equal to 20.
  useEffect(() => {
    if (oxygenLevel <= 20) {
      alert('Critical: Oxygen level very low!');
    }
  }, [oxygenLevel]);
  return (
    <div>Oxygen level at: {oxygenLevel}%</div>
  );
}