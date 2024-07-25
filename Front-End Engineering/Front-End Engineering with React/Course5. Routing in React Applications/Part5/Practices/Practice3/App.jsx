```
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const SpaceStation = () => {
  let navigate = useNavigate();

  return (
    <>
      <h1>Welcome to the Space Station</h1>
      {/* Can you spot the problem with this line to go back one step in the navigation? */}
      <button onClick={() => navigate()}>Go back to Earth</button>
    </>
  );
};

const Earth = () => <h1>Welcome to Earth</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/space-station">Visit Space Station</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Earth />} />
        <Route path="space-station" element={<SpaceStation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const SpaceStation = () => {
  let navigate = useNavigate();

  return (
    <>
      <h1>Welcome to the Space Station</h1>
      {/* Can you spot the problem with this line to go back one step in the navigation? */}
      <button onClick={() => navigate(-1)}>Go back to Earth</button>
    </>
  );
};

const Earth = () => <h1>Welcome to Earth</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/space-station">Visit Space Station</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Earth />} />
        <Route path="space-station" element={<SpaceStation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;