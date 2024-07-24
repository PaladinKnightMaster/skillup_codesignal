```
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Observatory from './Observatory';

export default function App() {
  return (
    <BrowserRouter>
      {/* TODO: Add navigation links for the path to the Observatory */}

      {/* TODO: Set up Routes to define the path to Observatory and render it using Route */}
    </BrowserRouter>
  );
}
```

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Observatory from './Observatory';

export default function App() {
  return (
    <BrowserRouter>
      {/* TODO: Add navigation links for the path to the Observatory */}
      <NavLink to="/observatory">Observatory</NavLink>

      {/* TODO: Set up Routes to define the path to Observatory and render it using Route */}
      <Routes>
        <Route path="/observatory" element={<Observatory />} />
      </Routes>
    </BrowserRouter>
  );
}