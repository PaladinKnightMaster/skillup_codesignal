```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Intergalactic Explorer</h1>
        <nav>
          <Link to="/planet/Mars">Explore Mars</Link> <br />
          <Link to="/planet/Venus">Explore Venus</Link>
        </nav>
        <Routes>
          {/* TODO: Define a dynamic route that leads to the Planet component based on the planet name */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Intergalactic Explorer</h1>
        <nav>
          <Link to="/planet/Mars">Explore Mars</Link> <br />
          <Link to="/planet/Venus">Explore Venus</Link>
        </nav>
        <Routes>
          {/* TODO: Define a dynamic route that leads to the Planet component based on the planet name */}
          <Route path="/planet/:name" element={<Planet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}