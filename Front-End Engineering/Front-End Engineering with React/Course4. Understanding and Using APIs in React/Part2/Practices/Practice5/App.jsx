/*
import { useState, useEffect } from 'react';

// TODO: Define the PostsTrackingApp component and use the useState hook to set up state for tracking 'loading', 'error', and 'data' with the initial state: { loading: true, error: null, data: null }

// TODO: Within useEffect, fetch posts and handle different states.
// Update the state based on the fetch status:
// - If the fetch is successful, set the state to { loading: false, data: <fetched data>, error: null }
// - If the fetch fails, set the state to { loading: false, data: null, error: <error message> }
// API URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/

// TODO: Conditionally render the UI to display a loading message, an error message, or the success state with the number of posts fetched based on the current fetch state.
// Hint: Use the state you've defined to determine what to display.

// Remember to export your PostsTrackingApp component as a default export
*/
import { useState, useEffect } from 'react';

// TODO: Define the PostsTrackingApp component and use the useState hook to set up state for tracking 'loading', 'error', and 'data' with the initial state: { loading: true, error: null, data: null }
const PostsTrackingApp = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
// TODO: Within useEffect, fetch posts and handle different states.
  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch posts: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
          console.log(data);
        if (data.error) {
          setState({
            loading: false,
            error: data.error,
            data: null
          });
        } else {
          setState({
            loading: false,
            error: null,
            data: data
          });
        }
      })
      .catch(err => {
        setState({
          loading: false,
          error: err.toString(),
          data: null
        });
      });
  }, []);

  return (
    <div>
      {state.error ? <p>Error: {state.error}</p> : state.data ? <p>{state.data.length} Posts fetched successfully!</p> : <p>Loading...</p>}
    </div>
  );
};
// Update the state based on the fetch status:
// - If the fetch is successful, set the state to { loading: false, data: <fetched data>, error: null }
// - If the fetch fails, set the state to { loading: false, data: null, error: <error message> }
// API URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/

// TODO: Conditionally render the UI to display a loading message, an error message, or the success state with the number of posts fetched based on the current fetch state.
// Hint: Use the state you've defined to determine what to display.

// Remember to export your PostsTrackingApp component as a default export
export default PostsTrackingApp;