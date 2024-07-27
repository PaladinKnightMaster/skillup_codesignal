# Exploring Error Handling and Boundaries in Functional Components with React Router v6

## Introduction and Objective
Gear up for an exciting lesson! We will familiarize ourselves with the handling of **Unexpected Errors** and the implementation of **Error Boundaries** in functional components using `navigate` in React Router v6. Are you ready? Let's dive in!

## Refresher for `navigate`
The `navigate` prop in React Router v6 is a potent tool. It assists with navigation within your application. Check out `navigate` in action within a login page scenario:

```javaScript
import { useNavigate } from 'react-router-dom';

function LoginPage() {
   const navigate = useNavigate(); // Initialize navigate
   const handleLogin = async () => {
     const isLoginSuccessful = await login(); // Invoke login function
     if (isLoginSuccessful) {
       navigate('/main');  // Redirects to the main page
     }
   };
   return <button onClick={handleLogin}>Login</button>; // Invoke handleLogin on button click
}
```

## Handling Unexpected Errors with Navigate
`Navigate` returns a promise. The promise confirms the execution of navigation, which it can either fulfill, by navigating to a new location, or deny, by cancelling the navigation. We can manage errors smoothly using a `try/catch` block:

```javaScript
async function LoginPage() {
   const navigate = useNavigate();
   const handleLogin = async () => {
     try {
         const isLoginSuccessful = await login();
         if (isLoginSuccessful) await navigate('/main'); // Navigation to main page
     } catch(err) {
         console.error(`Navigation error: ${err}`); // log error
     }
   };
   return <button onClick={handleLogin}>Login</button>;
}
```

## Unveiling the Concept of Error Boundary
**Error Boundaries** in React serve as a wrapper component that catches and logs errors in its child component tree. Think of it as a safety net for your application UI, providing a seamless user experience even amidst exceptions.

## Error Boundary with Functional Components
Thanks to the `react-error-boundary` library, we can efficiently implement Error Boundaries in functional components. The library provides a simple yet powerful tool, called `ReactErrorBoundary`. This seems complex, but in essence, it's quite straightforward. The `ReactErrorBoundary` component wraps around any other components we'd like to protect from potential errors. If an error occurs in any of the wrapped components, the `ReactErrorBoundary` gracefully handles it, preventing the whole application from crashing.

Inside the `ReactErrorBoundary` component, we have a `fallback` prop. The fallback prop allows us to define a component or elements that should be rendered when an error occurs. It provides a seamless user experience by avoiding blank screens or error messages that can be confusing to non-technical end users. Instead, a friendly user interface indicating an issue is displayed.

Let's examine a basic implementation of the Error Boundary:

```javaScript
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ComponentWithError() {
    throw new Error('Unexpected error occurred in the component.'); // This component throws an error
}

function LoginPage() {
  return (
    <ReactErrorBoundary fallback={<h2>Oops...something went wrong.</h2>}> // Using ReactErrorBoundary to wrap our component
      <ComponentWithError/>
    </ReactErrorBoundary>
  );
}
```
In this code snippet, the `ReactErrorBoundary` component is wrapping the `ComponentWithError` component. In our `ComponentWithError`, we're forcing an error to occur. Thanks to `ReactErrorBoundary`, when this error occurs, instead of crashing our application, it catches the error and displays the alternative UI defined in the `fallback` attribute, the friendly message: "Oops...something went wrong.".

This is a simple example that conveys the principle idea of using Error Boundary in functional components, keeping our applications robust and user-friendly.

## Crucial Relation of Error Boundary with Functional Components and React Router v6
When twinned together, `Navigate` and Error Boundary help create a robust and user-friendly application in React Router v6. Here's how we can implement them together in React Router v6:

```javaScript
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function HomePage() { /*...*/ }
function LoginPage() { /*...*/ }

function App() {
  return (
    <Router>
      <ReactErrorBoundary FallbackComponent={() => <Navigate to="/error" replace />} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<h2>Oops... something went wrong.</h2>} />
          {/* You can add more routes as needed */}
        </Routes>
      </ReactErrorBoundary>
    </Router>
  );
}
```

## Understanding Fallback Component and React Error Boundary
Welcome to another fascinating exploration in React's universe! In this lesson, we're going to delve into the 'fallback' prop, which plays a crucial role in providing a better user experience, even in the face of unexpected errors.

As we've seen before, we use a functional component as a fallback and utilize `error` and `resetErrorBoundary`. Let's break it down:

1. `error` is a caught JavaScript `Error` object that includes several properties like `message`, `name`, and `stack`. These offer human-readable error description, error type, and a stack trace to debug where the error occurred. It can be used to display error details.

2. `resetErrorBoundary` is a function that resets the error state inside the Error Boundary. On invocation, it takes Error Boundary back to its initial state, letting the problematic component re-render.

The following code snippet paints a clearer picture:

```javaScript
import { ErrorBoundary } from 'react-error-boundary'

function ComponentWithError() {
  throw new Error('Oops! Something went wrong.');
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (<div>
    <p>Error: {error.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>);
}

function MyApp() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ComponentWithError />
    </ErrorBoundary>
  );
}

export default MyApp;
```
In this, on error in `ComponentWithError`, Error Boundary catches it, rendering `ErrorFallback`. The user sees an error message with the 'Try again' button, which calls the `resetErrorBoundary`, resetting the error state, re-rendering `ComponentWithError`.

Through these tools, our app offers useful info and a retry mechanism instead of breaking the UI on errors, enhancing user experience. Keep up the good work! 💫 Continue practicing to master these nuances.

## Lesson Summary and Practice
Great job! We've navigated through the use of `navigate` for handling unexpected errors, Error Boundary in functional components, and their role in React Router v6. Now, reinforce this knowledge. Remember, practice makes perfect!
