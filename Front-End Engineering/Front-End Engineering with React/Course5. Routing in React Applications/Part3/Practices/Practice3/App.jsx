```
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Stars from './Stars'

const App = () => (
  <Router>
    <nav>
      <NavLink to="/stars">Stars</NavLink>
      {/* TODO: Add a NavLink for navigating to the Home page with the / path */}
      {/* TODO: Set up the NavLink style to indicate the active state for both / and /stars. The active link should have the color 'cyan', otherwise 'grey' */}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stars" element={<Stars />} />
    </Routes>
  </Router>
);

export default App;
```

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Stars from './Stars'

const App = () => (
  <Router>
    <nav>
      <NavLink to="/stars" style={({ isActive }) => ({ color: isActive ? 'cyan' : 'grey' })}>Stars</NavLink>
      {/* TODO: Add a NavLink for navigating to the Home page with the / path */}
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'cyan' : 'grey' })}>Home</NavLink>
      {/* TODO: Set up the NavLink style to indicate the active state for both / and /stars. The active link should have the color 'cyan', otherwise 'grey' */}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stars" element={<Stars />} />
    </Routes>
  </Router>
);

export default App;