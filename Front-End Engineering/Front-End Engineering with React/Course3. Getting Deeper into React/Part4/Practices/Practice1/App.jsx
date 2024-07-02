import { useState, useEffect } from 'react';

function MissionControl({ missionStatus }) {
  useEffect(() => {
    alert(`Mission status updated: ${missionStatus}`);
  }, [missionStatus]);

  return <h2>Current mission status: {missionStatus}</h2>;
}

function Spacecraft() {
  const [missionStatus, setMissionStatus] = useState('Planning');

  return (
    <div>
      <MissionControl missionStatus={missionStatus} />
      <button onClick={() => setMissionStatus('Launched')}>Launch Mission</button>
    </div>
  );
}

export default Spacecraft;