```
import { useState, useEffect } from 'react';

function StarCounter() {
  const [starsCounted, setStarsCounted] = useState(0);

  useEffect(() => {
    alert('Welcome to Astronomy and Stargazing!');
  }, []);

  return (
    <div>
      <p>Stars Counted: {starsCounted}</p>
      <button onClick={() => setStarsCounted(starsCounted + 1)}>Count a Star</button>
    </div>
  );
}

export default StarCounter;
```
import { useState, useEffect } from 'react';

function StarCounter() {
  const [starsCounted, setStarsCounted] = useState(0);

  useEffect(() => {
    alert('Welcome to Astronomy and Stargazing!');
  }, [starsCounted]);

  return (
    <div>
      <p>Stars Counted: {starsCounted}</p>
      <button onClick={() => setStarsCounted(starsCounted + 1)}>Count a Star</button>
    </div>
  );
}

export default StarCounter;