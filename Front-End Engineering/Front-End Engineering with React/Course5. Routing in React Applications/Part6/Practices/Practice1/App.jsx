import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}