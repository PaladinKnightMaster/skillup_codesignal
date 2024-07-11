/*
import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: Send a GET request using axios to the Cosmos-blog API and handle the response and error
    // API URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
  }, []);

  return posts.map(post => (
    <div key={post.id}>
      <h3>{post.text}</h3>
      <p>Likes: {post.likesCount}</p>
    </div>
  ));
}

export default SpacePosts;
*/
import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch space posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
