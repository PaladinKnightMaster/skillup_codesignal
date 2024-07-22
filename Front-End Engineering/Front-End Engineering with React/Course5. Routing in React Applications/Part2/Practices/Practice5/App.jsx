```
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";

const ControlPanel = () => <h1>Control Panel Page</h1>;
const EngineRoom = () => <h1>Engine Room Page</h1>;

function Spaceship() {
  return (
    <div>
      <h2>Spaceship Control Room</h2>
      // TODO: Make sure to add the necessary placeholder for nested routes to present properly
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/spaceship">Control Panel</Link><br />
        <Link to="/spaceship/engine">Engine Room</Link>
      </nav>
      <Routes>
        <Route path="/spaceship" element={<Spaceship />}>
          // TODO: Define the main route for Control Panel as an index.
          // TODO: Define the route for Engine Room with the path "engine".
        </Route>
      </Routes>
    </Router>
  );
}
```
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";

const ControlPanel = () => <h1>Control Panel Page</h1>;
const EngineRoom = () => <h1>Engine Room Page</h1>;

function Spaceship() {
  return (
    <div>
      <h2>Spaceship Control Room</h2>
      // TODO: Make sure to add the necessary placeholder for nested routes to present properly
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/spaceship">Control Panel</Link><br />
        <Link to="/spaceship/engine">Engine Room</Link>
      </nav>
      <Routes>
        <Route path="/spaceship" element={<Spaceship />}>
          // TODO: Define the main route for Control Panel as an index.
          <Route index element={<ControlPanel />} />
          // TODO: Define the route for Engine Room with the path "engine".
          <Route path="engine" element={<EngineRoom />} />
        </Route>
      </Routes>
    </Router>
  );
}