import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const isLoggedIn = false; // Simulate the astronaut not being logged in

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Spaceship Navigation Panel</h1>
        <Link to="/engine-room">Enter Engine Room</Link>
        <Routes>
          <Route
            path="/engine-room"
            element={isLoggedIn ? <EngineRoom /> : <Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function EngineRoom() {
  return <h2>Engine Room access granted!</h2>;
}

function Login() {
  return <h2>Access denied: Astronaut not logged in.</h2>;
}