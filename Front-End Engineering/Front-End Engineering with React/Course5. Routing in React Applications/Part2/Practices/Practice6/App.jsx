```
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import SpaceCrew from './SpaceCrew';
import NotFound from './NotFound';

function hasCrewAccess() {
  return true;
}

export default function App() {
  // TODO: Set up the React Router and define the necessary routes, including a default route that redirects to '/' and the protected Space Crew route
  // - The / route should show the Dashboard component
  // - The /space-crew route should show the SpaceCrew component if hasCrewAccess is true, otherwise navigate to /
  // Unknown paths should show the NotFound component
}
```
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import SpaceCrew from './SpaceCrew';
import NotFound from './NotFound';

function hasCrewAccess() {
  return true;
}

export default function App() {
  // TODO: Set up the React Router and define the necessary routes, including a default route that redirects to '/' and the protected Space Crew route
  // - The / route should show the Dashboard component
  // - The /space-crew route should show the SpaceCrew component if hasCrewAccess is true, otherwise navigate to /
  // Unknown paths should show the NotFound component
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/space-crew" element={hasCrewAccess() ? <SpaceCrew /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}