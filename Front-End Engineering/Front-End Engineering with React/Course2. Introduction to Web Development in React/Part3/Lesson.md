# Embarking on a Galactic Journey: Introduction to Props, Component Nesting

## Introduction to Props in Functional Components
Pack your bags! We're immersing ourselves into the world of React, exploring `props` in functional components. The term `props` is short for properties, and we use them to pass data between components.

Unlike variable data, `props` data is read-only. This means that a child component can only read the `props` sent from a parent component but can't change them. To better understand, let's consider `props` as 'instructions' that a parent passes down to a child.

To illustrate, let's review this code snippet:

```javaScript
// Define a functional component named 'Welcome' that accepts a prop 'name'.
function Welcome(props) {
  // Return a greeting message that includes the 'name' prop.
  return <h1>Hello, {props.name}</h1>;
}
```
In the line of code `{props.name}`, we are reading the `name` prop within our `Welcome` component.

## Nesting Components into HTML Elements
Those who are well-versed in LEGO building can relate to the concept of nested components. Within React, components can be placed within other components. This concept of modularity allows us to reuse and combine components.

An earlier `Welcome` component nested within an HTML `<h1>` tag bears witness to this concept:

```javaScript
// Define a function 'App' that renders a 'Welcome' component nested in a 'div' element.
function App() {
  return (
    <div>
      <Welcome name="Galactic Student" />
    </div>
  );
}
```
In this scenario, the `App` function is the main component, and the `Welcome` component is a child that is nested within it.

## Passing Primitive Data Types as Props
Jumping ahead in our journey, let's discuss how to pass primitive data types (strings, numbers, booleans) as `props`. Though we can pass other types (objects, functions) as `props`, for now, we're focusing on primitive data types.

Let's revisit our `Welcome` component to pass a string prop:

```javaScript
// Passing a string 'Galactic Student' to our 'Welcome' component.
<Welcome name='Galactic Student' />
```
And, for numbers and booleans, we use braces rather than quotes:
```javaScript
<DisplayNumber value={123} />
<DisplayTruth value={true} />
```

## Default Props in Functional Components
React components can have `default props`. These are the values that `props` fall back on when they are not supplied by the parent. Here's a modified `Welcome` component with a default name:

```javaScript
// Define a functional component named 'Welcome' that accepts a prop 'name'.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Setting a default value for the 'name' prop.
Welcome.defaultProps = {
  name: 'Galactic Traveler'
};
```
Now, rendering `<Welcome />` without providing a `name` prop results in "Hello, Galactic Traveler".

## Lesson Summary and Practice
Bravo! We traversed the terrain of props, visited nested components, passed primitive data types as props, learned about default props, and then stopped to acknowledge the React component life cycle.

Up next are exercises to bolster your understanding. Remember, practice makes perfect. Let's continue our journey in the universe of React!
