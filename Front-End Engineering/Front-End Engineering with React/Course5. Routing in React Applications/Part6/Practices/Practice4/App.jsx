```
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ControlCenter from './ControlCenter';
import ErrorPage from './ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/control-center">Control Center</NavLink>
      </nav>
      <Routes>
        <Route path="/control-center"
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              {/* TODO: Wrap the component that might throw an error with your ErrorBoundary and provide ErrorPage as a fallback component. */}
            </ErrorBoundary>
          }
        />
        {/* TODO: Add a route for the ErrorPage component */}
      </Routes>
    </BrowserRouter>
  );
}
```

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ControlCenter from './ControlCenter';
import ErrorPage from './ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/control-center">Control Center</NavLink>
      </nav>
      <Routes>
        <Route path="/control-center"
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              {/* TODO: Wrap the component that might throw an error with your ErrorBoundary and provide ErrorPage as a fallback component. */}
              <ControlCenter />
            </ErrorBoundary>
          }
        />
        {/* TODO: Add a route for the ErrorPage component */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}