# Exploring Asynchronous API Calls and Custom Hooks in React

## Overview
Hello, explorer! We'll be delving further into React, encountering asynchronous API calls and custom hooks. These tools will enable us to confidently manage states and reuse code.

## Asynchronous API Calls Refresher
Asynchronous operations in JavaScript resemble those of a busy astronaut. You'd request supplies (by sending a request) and then proceed with other tasks without waiting for the supplies (response).

The `Fetch API` is used to send a GET request, as exemplified below:

```javaScript
//GET request to fetch spaceship data
fetch('https://api-regional.codesignalcontent.com/spaceships')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Delving Deep into Custom Hooks
In React, just as you reuse components through importing, custom hooks allow you to extract and reuse state logic across different components. Custom hooks, just like normal built-in hooks such as `useState` or `useEffect`, can hold data throughout component re-renders, triggering rendering updates when the state changes.

Let's create a custom hook named `useFetchSpaceships` which we'll use to fetch spaceships data:

```javaScript
// The ./useFetchSpaceships.js file that defines a custom hook for fetching spaceship data
const useFetchSpaceships = url => {
  // Initialize state variables for storing data and loading status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // Use useEffect to execute the data fetching logic upon initial render
    // Fetch data from the provided URL
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Once data is fetched, save it in the data state and set loading to false
        setData(data);
        setLoading(false);
      });
  }, [url]);  // Providing URL as a dependency ensures that if the URL changes, useEffect runs again

  return { data, loading };   // Return data and loading status so they can be used in the component that calls this hook
};
export default useFetchSpaceships;
```
In the above code:

1. We create a function `useFetchSpaceships` which takes the URL for our API as a parameter.
2. We set a state variable `data` which stores the fetched data, and `loading` to keep track of when the data is still being fetched.
3. We use `useEffect` to run our fetch operation once the component mounts. The `url` specified in the dependency array ensures the operation runs once and subsequently only if `url` changes.
4. We fetch the data from the `url` and set this data to our `data` state variable. We also update our `loading` state to indicate that we've fetched our data.
5. After the operations are done, we return our `data` and `loading` status, which can be used in any component to display the fetched data from the API, or show a loading indicator while the data is being fetched.

You've now created your first custom hook! It's all set for incorporation in other components.

## Custom Hooks for Asynchronous API Calls
Building upon our newly created `useFetchSpaceships` custom hook, let's see how we can use it in a more generalized context - to fetch spaceships data not just from one, but multiple servers.

Just like you create components and import them wherever they're needed, similarly you can import and use hooks across your app. This makes custom hooks extremely adaptable and easy to use in a diverse array of scenarios.

```javaScript
import React from 'react';
import useFetchSpaceships from './useFetchSpaceships';

const MarsSpaceships = () => {
  // Use the custom hook to fetch Mars spaceship data
  const {data: spaceships, loading} = useFetchSpaceships('https://api-regional.codesignalcontent.com/spaceships/mars');

  return loading ? <div>Loading...</div> : <div>{spaceships.map(ship => <p>{ship.name}</p>)}</div>;
};

export default MarsSpaceships;
```
Let's dive deeper into this:

1. We import useFetchSpaceships from './useFetchSpaceships'. This is the file where we defined our custom hook.
2. In our MarsSpaceships functional component, we use the useFetchSpaceships custom hook. We give it the URL of the Mars spaceships API.
3. We assign data to the spaceships variable and keep the loading variable as it is. This operation uses an interesting JavaScript feature, named destructuring, which simplifies extracting properties from an object.
4. Finally, our render function utilizes conditional rendering. If the data is still loading, it displays a loading message. Once loading is complete, it cycles through the spaceships array and prints the name of each ship.

In this manner, you are not constrained to just one API call. You can create instances of different hooks for varying API calls, enhancing code reuse and efficiency!

## Lesson Summary and Upcoming Practice Exercises
Great job! We've explored asynchronous API calls, managed the loading and fetched data states, and learned about custom hooks. Get ready for our upcoming coding tasks. Exciting times await us on our React journey. Happy coding!
