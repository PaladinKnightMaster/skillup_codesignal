/*
import { useState, useEffect } from 'react';
import axios from 'axios';

function AuthorProfile() {
  const [author, setAuthor] = useState({}); // Initialize state for the author
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    axios.get('https://api-regional.codesignalcontent.com/posting-application-2/users/274b1a59-026d-4c9d-bcba-cd47a1a4ba96')
         .then(response => {
           setAuthor(response.data); // Store author data in state
           setLoading(false); // Set loading to false after data is received
         })
         .catch(error => {
           console.error('Error fetching author data', error);
           setError(error); // Store error in state
           setLoading(false); // Set loading to false upon error
         });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unable to load author profile.</div>;
  }

  return (
    <div>
      <h1>{author.name} {author.lastName}</h1>
    </div>
  );
}

export default AuthorProfile;
*/
import { useState, useEffect } from 'react';
import axios from 'axios';

function AuthorProfile() {
  const [author, setAuthor] = useState({}); // Initialize state for the author
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    axios.get('https://api-regional.codesignalcontent.com/posting-application-2/users/274b1a59-026d-4c9d-bcba-cd47a1a4ba96')
         .then(response => {
           setAuthor(response.data); // Store author data in state
           setLoading(false); // Set loading to false after data is received
         })
         .catch(error => {
           console.error('Error fetching author data', error);
           setError(error); // Store error in state
           setLoading(false); // Set loading to false upon error
         });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unable to load author profile.</div>;
  }

  return (
    <div>
      <h1>{author.firstName} {author.lastName}</h1>
    </div>
  );
}

export default AuthorProfile;