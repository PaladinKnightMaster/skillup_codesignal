/*
import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  // TODO: Define the state variable for storing blog posts and any potential errors

  useEffect(() => {
    // TODO: Fetch space posts using async/await pattern within this useEffect hook
    // URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
    // Save them to state and handle any errors that may occur
  }, []);

  // TODO: Optionally handle displaying any errors that might have occurred during fetching
  // TODO: Return JSX to display space blog posts, specifically post.text and post.likesCount
}

export default SpacePosts;
*/
import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  // TODO: Define the state variable for storing blog posts and any potential errors
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch space posts using async/await pattern within this useEffect hook
    // URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
    // Save them to state and handle any errors that may occur

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch space posts.');
      }
    };

    fetchPosts();
  }, []);

  // TODO: Optionally handle displaying any errors that might have occurred during fetching
  // TODO: Return JSX to display space blog posts, specifically post.text and post.likesCount

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.text}</h3>
          <p>Likes: {post.likesCount}</p>
        </div>
      ))}
    </div>
  );
}

export default SpacePosts;