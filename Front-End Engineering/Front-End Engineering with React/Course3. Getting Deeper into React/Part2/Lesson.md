# Journey through Component Lifecycles with useEffect Hook in React

## Topic Overview and Actualization
Welcome to this lesson, where we delve deeply into the **useEffect** hook in React. Our goal is to grasp the concept of component lifecycle in functional components and use the `useEffect` hook to achieve this. A lifecycle in this context is a component's birth, growth, and retirement. We'll dissect each phase and apply `useEffect`. We'll conclude with a real-world example to solidify these concepts. Let's get started!

## Understanding Component Lifecycle in Functional Components
The component lifecycle is a sequence of events that range from initialization through to destruction in a React application, much like a human lifecycle.

Mounting: This is the point at which a component's life commences, much like the start of life for a newborn baby.

Updating: Throughout a component's lifetime, it may evolve, thanks to changes in state and props, just as we grow and adapt.

Unmounting: When a component is no longer needed, it's removed — this is akin to the end of life.

Functional components don’t have lifecycle methods like class components. However, `useEffect` can simulate these behaviors.

## Using useEffect to Handle Different Lifecycle Phases
`useEffect` is excellent for simulating lifecycle methods:

1. **Mounting with useEffect**: By using `useEffect` and specifying an empty array `[]` as the dependency, the effect runs once after the initial render.

2. **Updating with useEffect**: All the data the effect needs to 'watch' should be specified in the dependency array.

3. **Unmounting with useEffect**: A cleanup function returned from the effect helps prevent memory leaks during this phase.

Here's an example showing you how to apply everything:

```javaScript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mounting and updating:
    document.title = `You clicked ${count} times`;

    // Unmounting:
    return function cleanup() {
      document.title = `React App`; // Original title restored
    };

  }, [count]);  // When count updates, re-run the effect

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
```
In this case, every time you click the button, the `count` state will be updated along with the document title. When you navigate away from the component, the cleanup function restores the original title.

## Deep Dive: Cleanup Function and Handling Memory Leaks
Now that we've gotten a hold of the useEffect's basic functionality, it's time to explore its power to prevent memory leaks. Imagine your code sets up a subscription in a component. But aligning with the natural lifecycle, our component might be removed from the DOM at some point. If our component is gone but our subscription is still active, we have a problem -- this is a memory leak!

Memory leaks subtly eat up your system resources and can cause your application to slow down or crash. Hence, it's important to clean up your task if the component unmounts during the effect's lifecycle.

The cleanup part of useEffect comes into play here. Upon returning a function from a `useEffect` hook, React interprets this as a cleanup function and invokes it before the component is removed from the UI to prevent memory leaks.

Consider this example:

```javaScript
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [size, setSize] = useState(window.innerWidth);

  // Effect to update state
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize); // Set up subscription

    // Cleanup function to remove subscription
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []); // Empty array ensures the effect runs only once

  return (
    <div>
      <p>Window Size: {size} px</p>
    </div>
  );
}

export default MyComponent;
```
In this code, our effect sets up a window resize event listener, which triggers every time the window's width changes. But what if the `MyComponent` suddenly gets removed from the DOM? Our listener would still be active and may cause memory leaks. To prevent this, our effect returns a cleanup function, which removes the event listener when `MyComponent` is unmounted.

So never forget, when performing tasks such as setting up a subscription in an effect, always provide a cleanup function to release resources if/when the component unmounts!

## Calling Async Functions in `useEffect`
As we are using React, which is a JavaScript library, there will be instances when we need to perform asynchronous operations. However, we might wonder how to perform asynchronous tasks using the `useEffect` hook. Let's take a deeper look.

An async function is a function declared with the async keyword and allows us to use the `await` keyword to pause the execution of the function until a particular promise is resolved.

UseEffect doesn't support async functions as its parameter directly. This is because useEffect expects its parameter function to return a cleanup function or nothing at all. However, async functions always return a promise, which leads to a warning or error.

Here's an example that demonstrates this point:

```javaScript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [state, setState] = useState("Initial State");

  // A mock async function
  const asyncFunc = async () => {
    return Promise.resolve("Updated state");
  };

  useEffect(async () => {
    let result = await asyncFunc();
    setState(result);
  }, []);

  return <div>{state}</div>;
}

export default MyComponent;
```
In the above example, the async function `asyncFunc` returns a promise, but this causes issues when used directly inside `useEffect`.

The correct approach is to define an async function inside the `useEffect` hook and then call it:

```javaScript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [state, setState] = useState("Initial State");

  // Mock async function
  const asyncFunc = async () => {
    return Promise.resolve("Updated state");
  };

  useEffect(() => {
    const callAsyncFunc = async () => {
      let val = await asyncFunc();
      setState(val);
    }

    callAsyncFunc();

  }, []);

  return <div>{state}</div>;
}

export default MyComponent;
```
In the updated code, `callAsyncFunc` is defined inside `useEffect`, and then we immediately invoke it. This respects the rules of `useEffect` while allowing us to handle promises or asynchronous operations correctly.

Great work! You've made significant progress in mastering `useEffect`, especially with asynchronous operations. As a rule of thumb, always work with async functions within the scope of the useEffect parameter function – never pass an async function directly to useEffect.

## Lesson Summary and Practice
Great work! We have covered the process of understanding lifecycle phases and managing them with `useEffect`.

Now, the handling of phases in the life of a React component using `useEffect` should be clearer. Please remember that understanding this concept is critical when creating React apps with complicated data flows and side effects.

Are you ready for practice exercises? They will reinforce your learning and give you a chance to practice the use of the `useEffect` hook. Keep going — you're doing fantastic work!
