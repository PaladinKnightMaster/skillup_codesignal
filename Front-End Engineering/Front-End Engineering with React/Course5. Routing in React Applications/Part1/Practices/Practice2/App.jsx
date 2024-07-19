```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Stars from './Stars';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> <br/>
        <Link to="/stars">Stars</Link>
        {/* Add link for /galery route */}
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/stars" element={<Stars />} />
        {/* Add a new Route here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Stars from './Stars';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> <br/>
        <Link to="/stars">Stars</Link>
        {/* Add link for /galery route */}
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/stars" element={<Stars />} />
        {/* Add a new Route here */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;