/*
import { useState, useEffect } from 'react';

function PostOffice() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      // TODO: Add a line here to handle the response and throw an error if the response is not ok
      // TODO: Add a line to parse the response body as JSON
      // TODO: If any error occur, set the error state to true, otherwise set it to false
      .catch(error => setError('No letters today. Please try again later.'));
  }, []);

  return (
    <div className="PostOffice">
      {error ? <p>Error: {error}</p> : error === null ? 'Checking the mailbox...' : 'Success!'}
    </div>
  );
}

export default PostOffice;
*/
import { useState, useEffect } from 'react';

function PostOffice() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        // TODO: Add a line here to handle the response and throw an error if the response is not ok
        if (!response.ok) {
          throw Error('Failed to fetch posts: ' + response.statusText);
        }
        // TODO: Add a line to parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // TODO: If any error occur, set the error state to true, otherwise set it to false
        if (data.error) {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch(error => setError('No letters today. Please try again later.'));
  }, []);

  return (
    <div className="PostOffice">
      {error ? <p>Error: {error}</p> : error === null ? 'Checking the mailbox...' : 'Success!'}
    </div>
  );
}

export default PostOffice;