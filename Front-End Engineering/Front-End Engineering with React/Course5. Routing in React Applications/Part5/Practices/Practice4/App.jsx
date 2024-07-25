```
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MissionBriefing from './MissionBriefing';

function SpaceShipControl() {
  const navigate = useNavigate();

  // TODO: Your mission is to command the spaceship to navigate to the Mission Briefing page
  return <button onClick={/* TODO: Activate the navigation function on button click */}>Go to Mission Briefing</button>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpaceShipControl />} />
        <Route path="/briefing" element={<MissionBriefing />} />
      </Routes>
    </Router>
  );
}
```

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MissionBriefing from './MissionBriefing';

function SpaceShipControl() {
  const navigate = useNavigate();

  // TODO: Your mission is to command the spaceship to navigate to the Mission Briefing page
  return <button onClick={/* TODO: Activate the navigation function on button click */ () => navigate('/briefing')}>Go to Mission Briefing</button>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpaceShipControl />} />
        <Route path="/briefing" element={<MissionBriefing />} />
      </Routes>
    </Router>
  );
}