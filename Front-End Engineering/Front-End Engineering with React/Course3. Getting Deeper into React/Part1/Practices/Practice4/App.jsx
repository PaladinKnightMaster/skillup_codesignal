/*
import { useState, useEffect } from 'react';

function StarCounter() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    document.getElementById('count').textContent = `You have counted ${stars} stars!`;
  }, []);

  return (
    <div>
      <p id='count'></p>
      <button onClick={() => setStars(prevStars => prevStars + 1)}>Count a star</button>
    </div>
  );
}

export default StarCounter;
*/
import { useState, useEffect } from 'react';

function StarCounter() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    document.getElementById('count').textContent = `You have counted ${stars} stars!`;
  }, [stars]);

  return (
    <div>
      <p id='count'></p>
      <button onClick={() => setStars(prevStars => prevStars + 1)}>Count a star</button>
    </div>
  );
}

export default StarCounter;