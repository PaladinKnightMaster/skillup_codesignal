import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  return (
    <BrowserRouter>

      <h1>Welcome to Intergalactic Travel!</h1>
      <nav>
        <Link to="/planet/Mars">Visit Mars</Link>
      </nav>
      <Routes>
        <Route path="/planet/:name" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}