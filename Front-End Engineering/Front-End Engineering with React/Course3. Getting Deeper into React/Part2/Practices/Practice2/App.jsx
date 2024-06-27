```
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCount((currentCount) => currentCount + 1);
    }, 2000);

    // Add a cleanup function here

  }, []);

  return <div>Images in gallery: {imageCount}</div>;
}
```
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCount((currentCount) => currentCount + 1);
    }, 2000);

    // Add a cleanup function here
    return () => clearInterval(interval);
  }, []);

  return <div>Images in gallery: {imageCount}</div>;
}