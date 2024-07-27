```
import { Link } from 'react-router-dom';

export default function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div>
      <p>Mission Control, we have a problem.</p>
      <Link to="/" onClick={resetErrorBoundary}>Return to Base</Link>
    </div>
  );
}
```

import { Link } from 'react-router-dom';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Mission Control, we have a problem:</p>
      <pre>{error.message}</pre>
      <Link to="/" onClick={resetErrorBoundary}>Return to Base</Link>
    </div>
  );
}
