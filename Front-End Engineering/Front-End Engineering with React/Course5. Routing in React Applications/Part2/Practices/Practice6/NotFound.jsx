import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Space is vast, but this page was not found!</h2>
      <nav>
        <Link to="/">Return to Dashboard</Link>
      </nav>
    </div>
  );
}