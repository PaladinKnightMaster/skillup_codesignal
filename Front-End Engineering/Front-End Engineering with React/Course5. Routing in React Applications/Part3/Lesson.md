# Navigating the Cosmos: Exploring NavLink in React

## Introduction to Topic and Actualization
Welcome back! Our journey today brings us into the heart of **React**, with a focus on `NavLink` Components. These components guide users around websites — think of them as the navigation system on a spaceship! Another crucial part of this ship is the `Link` — a less advanced sibling of `NavLink`. As we delve deeper, we will learn how to enhance these with appealing styles and helpful attributes. But before we get started, ensure that `React Router DOM v6` is ready in your project, as its unique features will be our guide today.

## Introduction to NavLink Components
In React routing, `NavLink` is one way to navigate different routes, acting like an advanced `Link`. Here's how:

```javaScript
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Nav = () => (
  <Router>
    <NavLink to="/home" activeClassName="active">Home</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
  </Router>
);
```
Think of `NavLinks` as doors on our spaceship that lead us to different areas like Home or About. Each click transports us to the respective spaces within the site.

## NavLink vs Link
`NavLink`'s superpower is that it offers user feedback—it styles "active" links. An 'active' link is akin to the room we're in. So, if we're in the 'About' room, the 'About' `NavLink` gets styled as 'active':

```javaScript
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </Router>
  );
}
```
The attribute `activeClassName="active"` in `NavLink` indicates this. Upon visiting '/about', `NavLink` applies the class 'active' to our About link. Delightful, isn't it?

## Styling NavLink Components
Ships ought to look cool, right? `NavLinks` are no different: we style them using CSS:

```javaScript
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <Router>
      <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
    </Router>
  );
}
```
In our CSS file, we deck out the `.nav-link` and `.active` tags with unique styles.

## Dynamic Styling with `style` attribute
We can even use the `style` attribute to apply styles dynamically based on the state of the NavLink. This is like changing the color of a room in the spaceship based on whether it is being used or not.

Let's look at an example:

```javaScript
<NavLink
  to="/dashboard"
  style={({ isActive }) => ({
      color: isActive ? 'orange' : 'blue'
  })}
>
  Dashboard
</NavLink>
```
In this example, we're using a function to determine the style. This function receives an object as a parameter with `isActive` property, a boolean that returns true if this NavLink is currently active. We then use a ternary operator to set the color based on whether the NavLink is active. If `isActive` is `true`, the color will be orange; otherwise, it will be blue. This allows for greater interactivity and visual feedback for users!

## NavLink Attributes
NavLink attributes are like a spaceship's navigation instructions that tell the spaceship which planet to go to and which path to take. Here are some important NavLink attributes:

* `to`: This attribute is equivalent to determining the destination of the spaceship. It indicates which route to take when the NavLink is clicked. For instance, `<NavLink to='/mars'>Go to Mars</NavLink>` would take us to the 'mars' route when clicked.

* `replace`: This attribute decides whether the spaceship should replace the current location in the history stack with a new location. If `replace` is set to true, the current URL in the history stack is replaced with a new URL instead of adding the new URL to the history stack.

* `exact`: This attribute is used to avoid any ambiguity in NavLink activation. It ensures that the NavLink is only considered 'active' if the location is an exact match. The `exact` prop helps us make sure we're only highlighting the NavLink to the exact location we're currently at instead of also highlighting the links to similar, but not the same, locations.

Let's look at an example to illustrate how these attributes work:

```javaScript
<NavLink to='/home' replace exact>Home</NavLink>
```
In this case, the Home NavLink directs the spaceship to the '/home' route, the `replace` attribute replaces the current URL in the history stack instead of adding a new one, and it will only get the activeClassName or activeStyle if the current URL is exactly '/home'. These attributes help in providing a better navigation experience.

## Practical example: Implementing NavLink
Time for some practice! Let's equip our spaceship with `NavLink`:

```javaScript
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Spaceship() {
  return (
    <Router>
      <NavLink to="/cockpit" replace exact activeClassName="active">Cockpit</NavLink>
      <NavLink to="/engine-room" replace exact activeClassName="active">Engine Room</NavLink>
    </Router>
  );
}
```
Our spaceship now has two rooms. We've applied the `exact` attribute to each so that they obtain the activeClassName only when their respective URLs match exactly.

## Lesson Summary and Practice
Great work! You now understand `NavLink` components in `React Router`, how they compare to `Link`, how to style them, and how to use `NavLink` attributes. Practice is up next—it solidifies learning and develops precision. So, gear up!
