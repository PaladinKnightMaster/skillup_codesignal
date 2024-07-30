```
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CommandCenter from './CommandCenter';
import ErrorFallback from './ErrorFallback';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';

// TODO: Define an App component that uses BrowserRouter to handle routes with ErrorFallback as fallback
// TODO: Set up routes for '/command-center', '/success', '/error', and a default that navigates to '/command-center'
// TODO: Wrap the Routes in an ErrorBoundary and specify the FallbackComponent to display when an error is caught
// TODO: Ensure that all the other routes marked as * are redirected to /command-center
export default function App() {
  // Your code here
}
```

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CommandCenter from './CommandCenter';
import ErrorFallback from './ErrorFallback';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';

// TODO: Define an App component that uses BrowserRouter to handle routes with ErrorFallback as fallback
// TODO: Set up routes for '/command-center', '/success', '/error', and a default that navigates to '/command-center'
// TODO: Wrap the Routes in an ErrorBoundary and specify the FallbackComponent to display when an error is caught
// TODO: Ensure that all the other routes marked as * are redirected to /command-center
export default function App() {
  // Your code here
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/command-center" element={<CommandCenter />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/command-center" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}