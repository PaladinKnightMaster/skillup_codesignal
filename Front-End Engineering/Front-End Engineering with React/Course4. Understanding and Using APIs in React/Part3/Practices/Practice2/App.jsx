```
import { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Create an axios instance here

export default function SpacePosts() {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api-regional.codesignalcontent.com/posting-application-2/users/2b0722g9-39d6-4acc-87bb-ee7c7339f880') // TODO: Update this code to have axios instance with predefined URL, and then update this call to get resource with the given ID.
      .then(response => {
        setAuthor(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching author:', err);
        setError('Failed to load author data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : (
        <h3>Space Explorer: {author.firstName} {author.lastName}</h3>
      )}
    </div>
  );
}
```
import { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Create an axios instance here
const axiosInstance = axios.create({
  baseURL: 'https://api-regional.codesignalcontent.com/posting-application-2/users/',
});

export default function SpacePosts() {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/2b0722g9-39d6-4acc-87bb-ee7c7339f880') // TODO: Update this code to have axios instance with predefined URL, and then update this call to get resource with the given ID.
      .then(response => {
        setAuthor(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching author:', err);
        setError('Failed to load author data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : (
        <h3>Space Explorer: {author.firstName} {author.lastName}</h3>
      )}
    </div>
  );
}