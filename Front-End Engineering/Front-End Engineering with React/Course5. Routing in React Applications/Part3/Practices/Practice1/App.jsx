import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/photos/stars" style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}>Stars</NavLink>
      </nav>
      <Routes>
        <Route path="/photos/stars" element={<Stars />} />
      </Routes>
    </Router>
  );
}

function Stars() {
  return <h1>Star Photos</h1>;
}

export default App;