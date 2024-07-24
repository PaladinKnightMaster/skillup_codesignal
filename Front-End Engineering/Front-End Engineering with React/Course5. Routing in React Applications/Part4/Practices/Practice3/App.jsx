import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlanetDetails from './PlanetDetails';

// App Component
function App() {
  return (
    <BrowserRouter>
      <h1>Space Travel</h1>
      <nav>
        <Link to="/planet/Mars">Discover Mars</Link>
      </nav>
      <Routes>
        <Route path="/planet/:planetName" element={<PlanetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;