```
import { useNavigate } from 'react-router-dom';

export default function ControlCenter() {
  const navigate = useNavigate();

  const handleEmergency = async () => {
    try {
      // Simulate a function that might fail
      throw new Error('Critical error in spaceship engine!');
    } catch (error) {
      // TODO: Navigate the crew to the error page when an emergency occurs
    }
  };

  return (
    <div>
      <h1>Space Exploration Command Center</h1>
      <button onClick={handleEmergency}>Emergency Evacuation</button>
    </div>
  );
}
```

import { useNavigate } from 'react-router-dom';

export default function ControlCenter() {
  const navigate = useNavigate();

  const handleEmergency = async () => {
    try {
      // Simulate a function that might fail
      throw new Error('Critical error in spaceship engine!');
    } catch (error) {
      // TODO: Navigate the crew to the error page when an emergency occurs
      navigate('/error');
    }
  };

  return (
    <div>
      <h1>Space Exploration Command Center</h1>
      <button onClick={handleEmergency}>Emergency Evacuation</button>
    </div>
  );
}