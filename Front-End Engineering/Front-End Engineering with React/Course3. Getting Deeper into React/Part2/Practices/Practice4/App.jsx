/*
import { useState, useEffect } from 'react';

export default function PortfolioGallery() {
  const [photoLabel, setPhotoLabel] = useState("Loading...");

  useEffect(() => {
    const loadPhotoInfo = async () => {
      const label = await new Promise(resolve =>
        setTimeout(() => resolve('Astrophotography Collection'), 1000)
      );
      return label;
    };

    // TODO: Get the label value from loadPhotoInfo async function and update the photoLabel state variable.

    return () => setPhotoLabel("Loading...");
  }, []);

  return <h1>{photoLabel}</h1>;
}
*/

import { useState, useEffect } from 'react';

export default function PortfolioGallery() {
  const [photoLabel, setPhotoLabel] = useState("Loading...");

  useEffect(() => {
    const loadPhotoInfo = async () => {
      const label = await new Promise(resolve =>
        setTimeout(() => resolve('Astrophotography Collection'), 1000)
      );
      return label;
    };

    // TODO: Get the label value from loadPhotoInfo async function and update the photoLabel state variable.
    loadPhotoInfo().then(label => setPhotoLabel(label));
    return () => setPhotoLabel("Loading...");
  }, []);

  return <h1>{photoLabel}</h1>;
}