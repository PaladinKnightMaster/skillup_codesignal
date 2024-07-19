import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function SpaceStation() {
  return <h2>Welcome to the Space Station!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/station">Visit Space Station</Link>
      <Routes>
        <Route path="/station" element={<SpaceStation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;