```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SpacecraftDetails from './SpacecraftDetails';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/spacecraft/apollo11">Apollo 11 Details</Link>
      </nav>
      <Routes>
        <Route path="/spacecraft/:name" element={<SpacecraftDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
```

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SpacecraftDetails from './SpacecraftDetails';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/spacecraft/apollo11/mission1">Apollo 11 Details</Link>
      </nav>
      <Routes>
        <Route path="/spacecraft/:name/:mission" element={<SpacecraftDetails />} />
      </Routes>
    </BrowserRouter>
  );
}