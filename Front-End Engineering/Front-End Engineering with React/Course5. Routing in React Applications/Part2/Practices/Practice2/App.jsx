```
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

const ControlPanel = () => <h2>Control Panel Page</h2>;
const EngineStatus = () => <h2>Engine Status Page</h2>;

const hasClearance = true;

export default function App() {
  return (
    <Router>
      <div>
        <h1>Spaceship Dashboard</h1>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="control-panel">Control Panel</Link> | <Link to="engine-status">Engine Status</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="control-panel" element={<ControlPanel />} />
          <Route path="engine-status" element={<EngineStatus />} />
          {/* Update the line above to redirect to '/' if the user doesn't have clearance */}
        </Routes>
      </div>
    </Router>
  );
}
```
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

const ControlPanel = () => <h2>Control Panel Page</h2>;
const EngineStatus = () => <h2>Engine Status Page</h2>;

const hasClearance = true;

export default function App() {
  return (
    <Router>
      <div>
        <h1>Spaceship Dashboard</h1>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="control-panel">Control Panel</Link> | <Link to="engine-status">Engine Status</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="control-panel" element={<ControlPanel />} />
          <Route 
            path="engine-status" 
            element={hasClearance ? <EngineStatus /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}
