/*
import { useState, useEffect } from 'react';

function StarGazer() {
  const [starsCount, setStarsCount] = useState(100);

  useEffect(() => {
    alert('The night sky has rendered with stars!');
  }); // No dependency array, effect runs on every render

  return (
    <div>
      <p>There are currently {starsCount} twinkling stars in the sky.</p>
      <button onClick={() => setStarsCount(starsCount + 10)}>
        Discover more stars
      </button>
    </div>
  );
}

export default StarGazer;
*/

import { useState, useEffect } from 'react';

function StarGazer() {
  const [starsCount, setStarsCount] = useState(100);

  useEffect(() => {
    alert('The night sky has rendered with stars!');
  }, []); // No dependency array, effect runs on every render

  return (
    <div>
      <p>There are currently {starsCount} twinkling stars in the sky.</p>
      <button onClick={() => setStarsCount(starsCount + 10)}>
        Discover more stars
      </button>
    </div>
  );
}

export default StarGazer;