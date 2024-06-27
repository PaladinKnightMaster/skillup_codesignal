import { useState, useEffect } from 'react';

function PhotoCounter() {
  const [photoViews, setPhotoViews] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Photo has been viewed ${photoViews} times.`);
    return () => console.log('The component is being removed');
  }, [photoViews]);

  return <div>
    <p>{message}</p>
    <button onClick={() => setPhotoViews(photoViews + 1)}>View Photo</button>
   </div>
}

export default PhotoCounter;