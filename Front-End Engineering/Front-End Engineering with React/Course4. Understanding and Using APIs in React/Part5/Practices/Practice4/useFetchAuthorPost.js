/*
import { useState, useEffect } from 'react';

const useFetchAuthorPosts = authorId => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Insert a fetch call here to retrieve posts data. URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
    // TODO: Filter the posts by authorId and update the posts state

  return { posts, loading };
};

// TODO: Export the custom hook as a default export
*/
import { useState, useEffect } from 'react';

const useFetchAuthorPosts = authorId => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Insert a fetch call here to retrieve posts data. URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
    // TODO: Filter the posts by authorId and update the posts state
    fetch(`https://api-regional.codesignalcontent.com/posting-application-2/posts/`)
      .then(response => response.json())
      .then(data => {
        const filteredPosts = data.filter(post => post.authorId === authorId);
        setPosts(filteredPosts);
        setLoading(false);
      })
  }, [authorId]);

  return { posts, loading };
};

// TODO: Export the custom hook as a default export
export default useFetchAuthorPosts;