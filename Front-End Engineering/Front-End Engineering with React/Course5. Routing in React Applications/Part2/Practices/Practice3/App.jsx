/*
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

const CaptainsLog = () => {
  return <h1>Welcome to the Captain's Log</h1>;
}

const AccessDenied = () => {
  return <h1>Access Denied: Unauthorized personnel</h1>;
}

const isLoggedIn = () => false;

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/captains-log">Captain's Log</Link>
        </nav>
        <Routes>
          <Route
            path="/captains-log"
            element={<CaptainsLog />}
          />
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </div>
    </Router>
  );
}
*/
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

const CaptainsLog = () => {
  return <h1>Welcome to the Captain's Log</h1>;
}

const AccessDenied = () => {
  return <h1>Access Denied: Unauthorized personnel</h1>;
}

const isLoggedIn = () => false;

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/captains-log">Captain's Log</Link>
        </nav>
        <Routes>
          <Route
            path="/captains-log"
            element={isLoggedIn() ? <CaptainsLog /> : <Navigate to="/access-denied" />}
          />
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </div>
    </Router>
  );
}
