# Exploring the Universe of Nested and Protected Routes with React Router v6

## Introduction and Overview
Greetings, fellow coders! Our mission today involves Nested Routing in React and the protection of secret paths using `react-router-dom` v6. We aim to master Nested Routes and Protected Routes in our React application!

We will:

1. Discover *Nested Routing*.
2. Set up routes using **Outlet**.
3. Guard routes with the **element**.
4. Explore other routes using **Navigate**.
5. Let's embark on this journey!

## Understanding Nested Routing in React
Nested Routing involves defining a route within another — much like a set of Russian dolls. It's especially useful when building complex React applications.

Imagine creating a space travel blog. The homepage lists all the visited planets, and clicking a planet takes you to a “planet” page that shows various posts about your visit. These posts can then be further categorized, creating a nested route for easier navigation.

## Setting Up Nested Routes with `Outlet` and `index` attribute
To guide our spaceship to nested voyages, we set up Nested Routes using the `Outlet` component in `react-router-dom` v6. The `Outlet` component acts as a placeholder for nested routes, like a docking bay where our spaceship can anchor when we travel within nested sections of our journey.

Let's say we're creating a user profile page with 'Account Details' and 'Account Settings' pages accessible from there. So, we'll create nested routes under the 'Profile' route.

But what if we want to display a specific view when users visit the 'Profile' route initially, like a 'Profile Overview' page? Here's where the `index` attribute comes in!

The `index` attribute in `react-router-dom` v6 allows us to set a default nested route that will be displayed when the parent route is visited. Wrapping the `ProfileOverview` component with the `Route` component and including the `index` attribute will set this as the default view for the 'Profile' route.

Here is an updated example:

```javaScript
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileOverview />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Components for the user profile
function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```
Here, visiting '/profile' will display the `ProfileOverview`. If the user navigates to '/profile/details' or '/profile/settings', the respective components will be rendered.

## Shielding Routes: Security in React with conditional `element` Attribute
To fend off unauthorized access, we secure our Universe (Routes). Protected routes ensure selective access.

Routes can be protected using the conditional `element` attribute in `react-router-dom` v6. Let's protect your 'Profile' routes:

```javaScript
import {BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate} from "react-router-dom";

function App() {
  const user = getUserDetails(); // Function to get user details
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        >
          ...
        </Route>
      </Routes>
    </Router>
  );
}
```
Rendering `Profile` occurs only when there's a user; otherwise, it navigates to 'Login'.

## Navigating the Space with `Navigate`
`Navigate`, part of `react-router-dom`, facilitates transitions across different routes in our application.

```javaScript
import {BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate} from "react-router-dom";

function ProfileSettings() {
  const [updated, setUpdated] = React.useState(false);

  function updateSettings() {
    setUpdated(true);
  }

  // If settings are updated, navigate to ProfileDetails
  return updated ? <Navigate to="../details" /> : <SettingsComponent />;
}
```
Upon updating settings, we navigate to the 'ProfileDetails' page.

## Lesson Summary and Practice
What a fantastic voyage, space explorers! We journeyed through `Outlet`, `Navigate`, and protected routes using `element` with `react-router-dom` v6.

Now, brace yourself for challenges in the form of exciting hands-on exercises to reinforce and enhance your skills. Remember, practice propels us towards mastery. So get ready, set, and code!
