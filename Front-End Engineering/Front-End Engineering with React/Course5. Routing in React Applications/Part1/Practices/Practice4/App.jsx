```
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SpacePage = () => <h1>Welcome to the Space Page!</h1>;
const NotFoundPage = () => <h1>This page not found in our system :(</h1>;

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/space">Explore Space</Link><br />
        <Link to="/unknown-galaxy">Unknown Galaxy</Link>
      </nav>
      <Routes>
        <Route path="/space" element={<SpacePage />} />
        {/* TODO: Define a route that catches all undefined paths and renders the NotFoundPage component */}
        </Routes>
        </Router>
      );
    }
```
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SpacePage = () => <h1>Welcome to the Space Page!</h1>;
const NotFoundPage = () => <h1>This page not found in our system :(</h1>;

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/space">Explore Space</Link><br />
        <Link to="/unknown-galaxy">Unknown Galaxy</Link>
      </nav>
      <Routes>
        <Route path="/space" element={<SpacePage />} />
        {/* TODO: Define a route that catches all undefined paths and renders the NotFoundPage component */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}