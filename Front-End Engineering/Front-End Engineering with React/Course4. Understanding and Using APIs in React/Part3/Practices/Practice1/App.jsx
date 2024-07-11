import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/');
        setBlogPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h3>{post.text}</h3> {/* assuming the API response contains a 'title' field */}
          <p>Author ID: {post.authorId}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;