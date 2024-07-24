```
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import StarGallery from './StarGallery';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/stars" style={({ isActive }) => ({ color: isActive ? 'white' : 'black'})}>Star Gallery</NavLink>
      </nav>
      <Routes>
        <Route path="/stars" element={<StarGallery />} />
      </Routes>
    </Router>
  );
}
```
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import StarGallery from './StarGallery';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/stars" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black'})}>Star Gallery</NavLink>
      </nav>
      <Routes>
        <Route path="/stars" element={<StarGallery />} />
      </Routes>
    </Router>
  );
}