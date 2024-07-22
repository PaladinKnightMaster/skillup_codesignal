import { Link } from "react-router-dom";

export default function SpaceCrew() {
  return (
    <div>
      <h2>Welcome, crew member!</h2>
      <nav>
        <Link to="/">Back to Dashboard</Link>
      </nav>
    </div>
  );
}