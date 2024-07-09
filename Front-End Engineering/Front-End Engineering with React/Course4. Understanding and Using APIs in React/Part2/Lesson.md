# Navigating Error Handling and Fetch States in React Functional Components

## Topic Overview and Actualization
Hello! Today, we're delving into **Error Handling and Fetch States in React Functional Components**. Our mission? To prepare ourselves for potential errors during API calls, much like a postman prepares for potential issues during mail delivery.

## Handling API Errors in React
API calls can fail due to network errors such as internet disconnections or server downtime, or HTTP status errors, which include the 400 series for client-side errors and the 500 series for server-side errors.

Let's add error handling to our Fetch API call and manage state changes using the `useState` hook. Providing a fallback UI for error scenarios can greatly enhance the user experience:

```javaScript
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // initialize an error state

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => { // If response is not ok, throw an error, otherwise parse the data to JSON
        if (!response.ok) { throw Error(response.statusText); }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error)); // If error occurred, set it to state
  }, []);

  return ( {/* Render an error message if it occurs, otherwise render fetched data or loading message */}
    <div className="App">
      {error ? <p>{error.message}</p> : data ? <p>Data fetched successfully!</p> : 'Loading...'}
    </div>
  );
}
```

## Retry Mechanisms
A retry mechanism helps to recover from temporary failures. The principle is simple: if a request fails, try it again. Here's our React component enhanced with a retry mechanism:

```javaScript
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    if (retries < 3) { // Limit the number of retries to 3
      fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
        .then(response => {
          if (!response.ok) { throw Error(response.statusText); }
          return response.json();
        })
        .then(data => setData(data))
        .catch(error => {
          setError(error);
          setRetries(retries + 1); // Increment the number of retries if an error occurs
        });
    }
  }, [retries]); // Rerun the effect if retries number changed

  // return JSX similar to the previous block
}
```

## esson Summary and Practice
Excellent! We've explored React's functional components, API errors, and how to respond to them. Next up, we have some exercises where you can apply your new knowledge. Keep practicing because, like postmen, there's always mail to deliver, and for us, there are always APIs to call! Until our next adventure - excellent work!
