```
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
  return <h2>Oops... we encountered an issue with the launch.</h2>;
}

const login = () => {
  throw new Error();
}

function MissionControl() {
  const navigate = useNavigate();

  async function handleLoginError() {
    try {
      // Simulate login function
      await login();
    } catch (error) {
      // TODO: Navigate to the error page on failure
    }
  }

  return <button onClick={handleLoginError}>Begin Mission</button>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/mission-control">To Mission Control</Link>} />
        <Route path="/mission-control" element={<MissionControl />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
  return <h2>Oops... we encountered an issue with the launch.</h2>;
}

const login = () => {
  throw new Error();
}

function MissionControl() {
  const navigate = useNavigate();

  async function handleLoginError() {
    try {
      // Simulate login function
      await login();
    } catch (error) {
      // TODO: Navigate to the error page on failure
      navigate('/error');
    }
  }

  return <button onClick={handleLoginError}>Begin Mission</button>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/mission-control">To Mission Control</Link>} />
        <Route path="/mission-control" element={<MissionControl />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}