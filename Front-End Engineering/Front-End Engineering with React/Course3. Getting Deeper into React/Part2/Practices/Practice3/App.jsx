/*
import { useState, useEffect } from 'react';

function PortfolioGallery() {
  const [photoCount, setPhotoCount] = useState(0);

  useEffect(() => {
    alert(`You have ${photoCount} photos in your portfolio.`);

    return () => alert('Your portfolio will be closed now.');
  }, []);

  return (
    <div>
      <p>Number of photos in portfolio: {photoCount}</p>
      <button onClick={() => setPhotoCount(photoCount + 1)}>
        Add a photo
      </button>
    </div>
  );
}

export default PortfolioGallery;
*/

import { useState, useEffect } from 'react';

function PortfolioGallery() {
  const [photoCount, setPhotoCount] = useState(0);

  useEffect(() => {
    alert(`You have ${photoCount} photos in your portfolio.`);

    return () => alert('Your portfolio will be closed now.');
  }, [photoCount]);

  return (
    <div>
      <p>Number of photos in portfolio: {photoCount}</p>
      <button onClick={() => setPhotoCount(photoCount + 1)}>
        Add a photo
      </button>
    </div>
  );
}

export default PortfolioGallery;