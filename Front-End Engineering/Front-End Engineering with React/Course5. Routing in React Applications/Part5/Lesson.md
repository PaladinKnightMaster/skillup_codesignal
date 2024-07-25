# Steering the Course: Programmatic Navigation in React Router v6

## Topic Overview and Actualization
Welcome! Today, we'll journey through the process of programmatic navigation using React Router v6. We'll explore the hooks `useNavigate` and `useLocation`, along with a concept known as navigation with state. Let's jump in!

## Navigating Programmatically
Typically, a React app that uses Router v6 utilizes `Link` or `NavLink` for navigation. However, there are instances when we require more control, such as redirecting after a form submission. That's when we turn to programmatic navigation.

```javaScript
import { useNavigate } from 'react-router-dom';

function NewPostPage() {
  let navigate = useNavigate();

  saveNewPost(newPost).then(() => {
    navigate('/main'); // Navigates the user to the main page after saving a post
  });
}
```

## The Magic of useNavigate
`useNavigate` hook provides a function enabling navigation in our React router application. In addition to navigating to absolute paths like `/login` or `/home`, `useNavigate` possesses the superpower to navigate relative to the current location. It also introduces a new way to navigate backwards.

For instance, if we wanted to move back one step in our route history, we could call `navigate(-1)`. It's a simple and intuitive feature that can be incredibly handy in certain scenarios.

For example, consider a back button in a multi-step form:

```javaScript
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  let navigate = useNavigate();

  let handleClick = () => {
    navigate(-1); // Takes you back one step in your route history.
  };

  return <button onClick={handleClick}>Go Back</button>;
}
```
Here, when the 'Go Back' button is clicked, the user would be taken back to the previous page in their route history. This beautiful feature brought forth by the `useNavigate` hook allows us a more human-friendly way of handling navigation in our apps. Continue exploring and you'll find even more friendly features!

## Introduction to useLocation
`useLocation` is another hook offered by React Router. It returns an object representing the current location or URL. This can be useful when you're creating breadcrumbs or displaying the current pathname.

```javaScript
import { useLocation } from 'react-router-dom';

function CurrentPathDisplay() {
  let location = useLocation();

  return <div>Your current location: {location.pathname}</div> // Displays the user's current location
}
```

## Navigation with State
When navigating, you can pass state data that will be accessible on the destination route. React Router provides `useNavigate` for passing state and `useLocation` for accessing it.

```javaScript
import { useNavigate } from 'react-router-dom';

function UpdateButton() {
  let navigate = useNavigate();

  let handleClick = () => {
    navigate("/login", { state: { from: "update" } }); // Adds state when navigating
  };

  return <button onClick={handleClick}>Update post</button>;
}

// In Login component
import { useLocation } from 'react-router-dom';

function Login() {
  let location = useLocation();
  let from = location.state?.from; // Accesses the state passed during navigation
}
```
In this snippet, we can display a custom message to a user coming from the update button by checking `location.state?.from`. In this snippet, we display a custom message for a user coming from the Update button. The `location.state?.from` above uses the Optional Chaining operator (`?.`). It immediately returns `undefined` if `location.state` does not exist, thus preventing a `TypeError`, as JavaScript would not be able to read the `from` property of `undefined`. This way, we can safely access nested properties even if an intermediate property doesn't exist.

## Lesson Summary and Practice
Today, we've enhanced our understanding of programmatic navigation in React Router v6. Up next are some hands-on practice tasks to help solidify your learning — they're beneficial and enjoyable! Applying what you've learned in realistic conditions reinforces the knowledge. So let's navigate to the workload. Happy practicing!
