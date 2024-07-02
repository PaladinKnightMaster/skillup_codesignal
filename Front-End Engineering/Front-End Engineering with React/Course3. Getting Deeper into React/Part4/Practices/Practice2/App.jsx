```
import { useState, useEffect } from 'react';

export default function Spaceship() {
  const [oxygenLevel, setOxygenLevel] = useState(100);

  return (
    <div>
      <ControlRoom oxygenLevel={oxygenLevel} />
      <p>Oxygen level: {oxygenLevel}</p>
      <button onClick={() => setOxygenLevel(Math.max(0, oxygenLevel - 10))}>Decrease Oxygen</button>
    </div>
  );
}

function ControlRoom({ oxygenLevel }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
      // TODO: Update 'message' based on the 'oxygenLevel' prop change
      // When the oxygen level is less or equal to 20, set the message to 'Critical: Oxygen level very low!', otherwise set it to an empty string
  }, [oxygenLevel]);

  return <p>{message}</p>;
}
```
import { useState, useEffect } from 'react';

export default function Spaceship() {
  const [oxygenLevel, setOxygenLevel] = useState(100);

  return (
    <div>
      <ControlRoom oxygenLevel={oxygenLevel} />
      <p>Oxygen level: {oxygenLevel}</p>
      <button onClick={() => setOxygenLevel(Math.max(0, oxygenLevel - 10))}>Decrease Oxygen</button>
    </div>
  );
}

function ControlRoom({ oxygenLevel }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
      // TODO: Update 'message' based on the 'oxygenLevel' prop change
      // When the oxygen level is less or equal to 20, set the message to 'Critical: Oxygen level very low!', otherwise set it to an empty string
      setMessage(oxygenLevel <= 20 ? 'Critical: Oxygen level very low!' : '');
  }, [oxygenLevel]);

  return <p>{message}</p>;
}