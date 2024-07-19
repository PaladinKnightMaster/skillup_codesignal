/*
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Stars from './Stars';
import Planets from './Planets';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/stars" element={<Stars />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Stars from './Stars';
import Planets from './Planets';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/stars" element={<Stars />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;