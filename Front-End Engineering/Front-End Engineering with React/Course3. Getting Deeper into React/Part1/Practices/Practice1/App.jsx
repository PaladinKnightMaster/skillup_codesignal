import { useState, useEffect } from 'react';

function SpaceCounter() {
  const [stars, setStars] = useState(100);

  useEffect(() => {
    document.getElementById('count').textContent = `Counting ${stars} stars!`;
  }, [stars]);

  return (<div>
    <p id="count"></p>
    <button onClick={() => setStars(stars + 1)}>Add a star</button>
  </div>);
}

export default SpaceCounter;