# Discovering the Cosmos of React Components: From Class to Functional

## Introduction to Class Components
Class components, which were once vital in React, are a type of ES6 class. These components are robust, offering lifecycle methods, render methods, constructors, and the ability to handle state and props.

Below is an example of a simple Class Component:

```javaScript
class Hello extends React.Component {
  render() { // The render function determines what gets displayed
    return <h1>Hello, world!</h1>; // Hello, world! will be shown on the screen
  }
}
```

## Decline of Class Components
Class components, however, faced limitations. Having to handle the `this` keyword complicated matters and resulted in more bugs. As JavaScript evolved, developers started preferring functional components due to their simplified syntax.

## Introduction to Functional Components
Functional components have been a part of React from the very beginning and are simply JavaScript functions. They accept `props` object as parameters and implement the `render` method to return React elements. These could be anything: a fragment of HTML, another functional component, or a class component.

But there's a crucial thing to remember. Every functional component must return only one parent element.

You might wonder, "What if I want to return multiple elements?" That's where wrapping elements come in handy. If your component needs to return multiple elements, they must all be wrapped in a parent element. This parent could be a `div`, a `section`, or any other HTML element.

Here's the example:

```javaScript
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>;
      <p>Welcome to the React Universe!</p>
    </div>
  );
}
```
But what if you don't want an additional div in your HTML? This is where `React Fragment` comes into play! Fragments let you group a list of children without adding extra nodes to the DOM. Let's use `React Fragment` to refactor our `Welcome` component:

```javaScript
function Welcome(props) {
  return (
    <>
      <h1>Hello, {props.name}</h1>;
      <p>Welcome to the React Universe!</p>
    </>
  );
}
```
In this way, you can return multiple elements from a component. Functional components have shown their incredible power and versatility especially after the introduction of Hooks, as we will see going forward.

## Using Variables in JSX
Now, let's dive deeper into how we can use variables inside our JSX in functional components. When JSX sees curly braces `{}`, it knows that it needs to interpret the contents in JavaScript mode. This means we can insert any valid JavaScript expression within those braces!

JavaScript expressions can be variables, operations, functions or any other valid piece of code that has a value. Here's a bit more about what we can put into these curly braces `{}`:

* **Variables** - We can access JavaScript variables inside curly braces and their values will be interpolated into the resulting HTML.

* **Expressions** - Any valid JavaScript expression that results in a value can be placed inside curly braces. This can include arithmetic operations, function calls, property access, etc.

* **Functions** - We can even run JavaScript functions inside our JSX, which needs to return a valid JSX or a value that can be rendered, such as a string, number etc.

Let's see an example that demonstrates all these points:

```javaScript
const someFunction = () => 5;

function Welcome() {
  // Define some variables
  const salutation = "Hello,";
  const object = "Universe!";

  // Here we use a variable and a ternary operation inside the curly braces
  return (<div>
    <p>Our someFunction returns {someFunction();}</p>
    <h1>{salutation} { object === "Universe!" ? "How vast you are!" : "Who are you?" }</h1>
  </div>);
}

// Usage: <Welcome />
```
In this component, we have variables as well as a ternary operation inside the curly braces in JSX. Although it's a fairly simple example, it shows the power and flexibility that JSX affords you when building user interfaces in React.

## Deep Dive into Functional Components
Functional components tend to be easier to read, test, and debug than their class-based counterparts. As they are purely JavaScript functions, they have the ability to return various types of data: components, arrays, strings, numbers, Booleans, null, and more.

Let's look at a slightly more complex Functional Component with `button` element:

```javaScript
const Greeting = () => {
  return (
    <div>
      <button onClick={() => alert(greeting)}>Greet Me!</button> {/* On click, show an alert with the greeting */}
    </div>
  );
}
```

## Understanding Component Lifecycle
Like humans, React components have a lifecycle: they are created (Mounting), updated (Updating), and finally removed (Unmounting).

* Mounting: The component is created and inserted into the DOM.
* Updating: The component updates due to changes in its state, which we will discuss later.
* Unmounting: The component is removed from the DOM.
React Hooks allow Functional components to have similar lifecycle capabilities to those of Class components.

## Lesson Summary
Well done! Today we grasped the concepts of Class and Functional components, understood why we prefer Functional components, and created a complex functional component. We have also been introduced to the Component Lifecycle.

This knowledge is crucial for front-end developers as it helps us to write efficient and clear code.