import { useLocation } from 'react-router-dom';

export default function MissionBriefing() {
  const location = useLocation();
  const mission = location.state?.mission || 'unknown';
  return <h1>Welcome to the briefing for your next mission to {mission}!</h1>;
}