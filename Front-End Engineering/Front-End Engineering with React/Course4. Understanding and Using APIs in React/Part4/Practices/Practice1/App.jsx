import { useState, useEffect } from 'react';

function DisplayAuthorPosts() {
  const [authorPosts, setAuthorPosts] = useState([]);
  const [error, setError] = useState(null);
  const authorId = '382dffad-4988-45c8-912f-c26477ac0d6d';

  useEffect(() => {
    fetch(`https://api-regional.codesignalcontent.com/posting-application-2/posts/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setAuthorPosts(data.filter(p => p.authorId === authorId)))
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.toString());
      });
  }, []);

  if (error) {
    return <div>Error fetching posts: {error}</div>;
  }

  return (
    <ul>
      {authorPosts.length > 0 ?
        authorPosts.map(post => (
          <li key={post.id}>{post.text}</li>
        )) :
        <div>No posts found!</div>
      }
    </ul>
  );
}

export default DisplayAuthorPosts;