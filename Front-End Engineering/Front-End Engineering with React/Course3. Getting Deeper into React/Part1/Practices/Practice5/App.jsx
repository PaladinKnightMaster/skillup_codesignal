/*
import { useState, useEffect } from 'react';

function StarrySkyApp() {
  // TODO: Create a state to keep track of the star count starting at 100 about the number of stars in the sky

  // TODO: Use useEffect to alert a message every time the star count changes

  // TODO: Render the star count on the screen and a button to add 10 more stars when clicked
}

export default StarrySkyApp;
*/
import { useState, useEffect } from 'react';

function StarrySkyApp() {
  // TODO: Create a state to keep track of the star count starting at 100 about the number of stars in the sky
  const [stars, setStars] = useState(100);
  // TODO: Use useEffect to alert a message every time the star count changes
  useEffect(() => {
    alert(`You have counted ${stars} stars!`);
  }, [stars]);
  // TODO: Render the star count on the screen and a button to add 10 more stars when clicked
  return (
    <div>
      <p>You have counted {stars} stars!</p>
      <button onClick={() => setStars(prevStars => prevStars + 10)}>Add 10 more stars</button>
    </div>
  );
}

export default StarrySkyApp;