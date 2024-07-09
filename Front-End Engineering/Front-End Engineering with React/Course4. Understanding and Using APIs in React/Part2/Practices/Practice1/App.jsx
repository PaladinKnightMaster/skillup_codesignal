import { useState, useEffect } from 'react';

export default function PostOffice() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch posts: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.toString()));
  }, []);

  return (
    <div>
      {error ? <p>Error: {error}</p> : posts ? <p>Posts fetched successfully!</p> : <p>Loading...</p>}
    </div>
  );
}