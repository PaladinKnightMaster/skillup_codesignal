import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Space Dashboard</h1>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/space-crew">Crew Section</Link><br />
        <Link to="/bad-link">Invalid Link</Link>
      </nav>
    </div>
  );
}