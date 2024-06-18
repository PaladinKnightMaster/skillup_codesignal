# Propelling Through React: Methods, Props, and Nesting Functional Components

## What Are Methods, and How Do We Define Them in React?
`Methods` in JavaScript are actions associated with an object. They are blocks of code that perform specific tasks. These methods are defined inside of a functional component before the return statement, as shown below:

```javaScript
const Spaceship = () => {
  const startThrusters = () => {
    console.log("Thrusters are ON");
  }
  return (
    <button onClick={startThrusters}>Start Thrusters</button>
  );
}
```

## Using Methods in Functional Components
An advantage of methods is they can handle virtually any type of event, ranging from a simple mouse click, to more elaborate ones such as form submissions, providing a React component with dynamic functionality.

Let's extend the functionality of our spaceship. How about we add a method that checks the spaceship's fuel level?

```javaScript
const Spaceship = () => {
  const fuelStatus = () => {
    let fuelLevel = 70; // in percentage
    if (fuelLevel > 50) {
      return "Fuel Status: Good";
    } else {
      return "Fuel Status: Low";
    }
  };
  return (
    <h3>{fuelStatus()}</h3>
  );
}
```

## Nesting Functional Components
Sometimes, a component might be designed to exist within another component. This is called "nesting". In our spaceship example, the thruster could be seen as a component nested within our spaceship component:

```javaScript
const Thruster = () => {
  return (
    <p>Thruster is ready!</p>
  );
}

const Spaceship = () => {
  return (
    <div>
      <Thruster />
    </div>
  );
}
```
Great! Now our spaceship has thrusters!

## Passing Primitive Data Types as Props
Now that the thruster is in place, how can we control it from the spaceship? Here's where `props` come into play. `Props` allow us to pass values between components. Let's pass a message — a `data prop` — from our `Spaceship` to our `Thruster`:

```javaScript
const Thruster = (props) => {
  return (
    <p>{props.status}</p>
  );
}

const Spaceship = () => {
  let thrusterStatus = "Thrusters are functional!";

  return (
    <div>
      <Thruster status={thrusterStatus} />
    </div>
  );
}
```

## Passing Methods as Props
Beyond data, we can pass methods as `props` in React. This is especially useful when coordinating between components. Let's illustrate this concept:

```javaScript
const Thruster = (props) => {
  // The Thruster makes use of the method passed as a prop
  return (
    <div>
      <p>{props.status}</p>
      <button onClick={props.startThrusters}>Start Thrusters</button>
    </div>
  );
}

const Spaceship = () => {
  let thrusterStatus = "Thrusters are functional!";

  // Our method 'startThrusters' is defined in the 'Spaceship' component
  const startThrusters = () => {
    console.log("Thrusters are ON");
  }

  // We pass `startThrusters` method to the 'Thruster' component as a prop
  return (<div><Thruster status={thrusterStatus} startThrusters={startThrusters} /></div>);
}
```
In this example, the `Thruster` can now use the `startThrusters` method that's actually defined in the `Spaceship` component. When the button in the `Thruster` component is clicked, it will call `startThrusters`, and print "Thrusters are ON" to the console.

## Destructuring Props in Function Signature
You might have noticed that accessing props repeatedly can result in repetitive code. In JavaScript, we have a neat language feature to simplify this: destructuring assignment. This lets us unpack properties from objects or arrays right in our function signature.

What if we analysed the engine status in our `Thruster`? Say our parent `Spaceship` component passes an `engineStatus` prop, we can access it directly by destructuring it from props:

```javaScript
// Before destructuring
const Thruster = (props) => {
  console.log(props.engineStatus);
  //...
}

// After destructuring
const Thruster = ({engineStatus}) => {
  console.log(engineStatus);
  //...
}
```
You can see how much cleaner the destructuring version is. Now, we can access `engineStatus` directly, without having to write `props`. each time!

React and JavaScript provide many such tools to write clean and efficient code. As you continue exploring, you'll discover and master these. Now, let's continue with our functional components!