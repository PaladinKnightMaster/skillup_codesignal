```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  // TODO: Create a navigation link to the "Mars" exploration page

  // TODO: Set up the route configuration for planet exploration use a dynamic path to accept any planetName

  // Do not forget to warp everything into a BrowserRouter

}
```

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  // TODO: Create a navigation link to the "Mars" exploration page

  // TODO: Set up the route configuration for planet exploration use a dynamic path to accept any planetName

  // Do not forget to warp everything into a BrowserRouter
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Space Explorer</h1>
        <nav>
          <Link to="/planet/Mars">Explore Mars</Link> <br />
          <Link to="/planet/Venus">Explore Venus</Link>
        </nav>
        <Routes>
          <Route path="/planet/:name" element={<Planet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}