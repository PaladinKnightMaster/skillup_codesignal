```
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  return <h1>Welcome</h1>;
}

const HomePage = () => {
  let navigate = useNavigate();

  const engageWarpDrive = () => {
    // TODO: Update the navigation logic to pass the following value as state: { greeted: true }
    navigate('/welcome', { state: null });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={engageWarpDrive}>Engage Warp Drive</button>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  return <h1>Welcome</h1>;
}

const HomePage = () => {
  let navigate = useNavigate();

  const engageWarpDrive = () => {
    // TODO: Update the navigation logic to pass the following value as state: { greeted: true }
    navigate('/welcome', { state: { greeted: true } });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={engageWarpDrive}>Engage Warp Drive</button>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;