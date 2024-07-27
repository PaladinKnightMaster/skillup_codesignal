```
export default function HomePage() {
    // Simulating an error; this would be replaced with the actual home page content
    throw new Error('Houston, we have a problem!');
  }
```

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Simulating an error; this would be replaced with the actual home page content
    throw new Error('Houston, we have a problem!');
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}
