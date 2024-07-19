# Navigating across the Universe: Introducing Routing with React Router v6

## Introduction and Overview
Welcome! We're stepping into the world of web applications where we'll interact with `react-router-dom` **v6**! This package furnishes expressive routing in a React.JS universe. By the end of this lesson, you'll have gleaned a solid understanding of React Router, the fundamentals of routing using `react-router-dom` v6, and the operation of the `Link` component.

First, we'll familiarize ourselves with the world of React Router, followed by an examination of the specifics of `react-router-dom` v6, the basics of routing, and concluding with the versatile `Link` component.

## Meet React Router
Embark on a journey into the city of applications where the `Router` serves as our GPS. It enables us to define paths leading to the various corners of our city, such as Pages or Components. When navigating to a specific path, the Router renders the appropriate component.

For example, if you were building a blog, '/submit' could direct you to the submission form, while '/help' might unveil a help page. We're merely scratching the surface of the possibilities!

Let's discuss the what's new in `react-router-dom` v6. It ushers in significant changes. We'll focus on the transition from using `Switch` to using `Routes`, and the influential shift from defining a 'component' to assigning an 'element'. We must guarantee that everything is cocooned within a `BrowserRouter` (or, more concisely, a `Router`).

## Basic Routing with v6
Routing in a web application is like channel surfing on your television. When you choose a channel, you get the content for that path. In `react-router-dom` v6, we use `BrowserRouter`, `Route`, and `Routes` to implement routing.

The `BrowserRouter` wraps around your entire application and provides it with routing capabilities. `Routes` is a container for multiple `Route`. Each `  ` defines a different channel for your application, and each of these channels can show different content.

Here is a simple code snippet that shows how you can set up routing in your application:

```javaScript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
```
In this example, the `path` in a `Route` is equivalent to a URL. So if your website's URL is `https://mysite.com/contact`, then your `Router` will know to display the `ContactPage`. Respectively `element={<HomePage />}` is what to display when the user navigates to that `path`.

Now, let's define each of those routes' contents as separate components (or pages):

```javaScript
function HomePage() {
  return <h1>Welcome Home</h1>
}

function AboutPage() {
  return <h1>About Us</h1>
}

function ContactPage() {
  return <h1>Contact Us</h1>
}
```
They can be as simple or as complex as you need them to be!

This simple structure provides a skeleton for your application and allows for great freedom in shaping your app's navigation.

## The Link Element in React Router
In a single-page application, we aim to navigate between different pages without a full-page reload. The `Link` component helps us achieve this goal. It represents a navigational link and allows us to change the URL, thus displaying the corresponding router-connected component.

Here's an example of how we can use the `Link` component for navigation in our application:

```javaScript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
```
The `Link` component resembles an HTML `a` tag, but it's designed to work seamlessly with our React Router. Its most major attribute is `to`, which indicates the destination URL of the link.

Each `Link` corresponds to a channel button on your TV remote. With a press of this button, the viewer experiences a seamless transition from one channel to another without having to power off and on the TV. It simply changes the URL and the displayed content.

In this way, `Link` allows smooth and efficient navigation within your application, enhancing the user experience by avoiding whole page reloads.

## Catch-all with `*` Path in React Router
React Router has a powerful feature that lets us handle unexpected paths or errors elegantly — the "catch-all" `*` path. This is like a net that catches all paths that haven't been defined in our application. When a user tries to navigate to a path that doesn't exist, the '* path' is matched, and we can decide what to render or where to redirect the user.

Let's update our weather forecasting app to include a '404 Page Not Found' route. Any non-defined paths will be caught by this route, and a relevant message will be displayed to the user.

```javaScript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function PageNotFound() {
  return <h1>404 Page Not Found. Whoops! We can't find the page you're looking for.</h1>
}
```
In this code, the `*` in `<Route path="*" element={<PageNotFound />}` will match any path not defined yet, and render the `PageNotFound` component.

And voila! Now, our app gracefully handles unexpected paths by guiding our users rather than leaving them lost in the galaxy!

Remember to place the `*` path `Route` at the end of all other routes. The router goes through the Routes sequentially. If we don't put the `*` path `Route` at the end, it will match all routes, and the user will always see the 'Page Not Found' instead of the desired page.

## Lesson Summary and Practice Session Announcement
We delved into the world of React Router, scrutinized the specifics of `react-router-dom` v6, examined how routing appears with `element` attributes and `Routes`, and observed how `Link` facilitates application navigation.

Prepare for hands-on exercises that'll refine your skills in due course. After all, practice is key when it comes to coding. So let's roll up our sleeves and get ready for an engaging adventure! Here's to happy practicing!
