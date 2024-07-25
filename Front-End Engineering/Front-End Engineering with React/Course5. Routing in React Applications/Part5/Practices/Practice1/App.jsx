import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LaunchButton() {
  let navigate = useNavigate();

  const launchMission = () => {
    navigate('/mission-control', { state: { mission: 'Mars Rover' } });
  };

  return <button onClick={launchMission}>Launch Mission</button>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchButton />} />
        {/* Define the mission-control route */}
        <Route path="/mission-control" element={<div>Mission Control</div>} />
      </Routes>
    </Router>
  );
}