```
import { useState, useEffect } from 'react';

function SocialMediaPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(/* TODO: Handle the response and update the state */)
      .catch(/* TODO: Log any errors to the console */);
  }, []);

  const filterPosts = (word) => {
    return posts.filter(post =>
      post.text.toLowerCase().includes(word.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by words in post"
      />
      <ul>
        {filterPosts(searchTerm).map(post => (
          <li key={post.id}>{/* TODO: Display post text */}</li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaPosts;
```
import { useState, useEffect } from 'react';

function SocialMediaPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Oops! There was an error:', error));
  }, []);

  const filterPosts = (word) => {
    return posts.filter(post =>
      post.text.toLowerCase().includes(word.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by words in post"
      />
      <ul>
        {filterPosts(searchTerm).map(post => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaPosts;
