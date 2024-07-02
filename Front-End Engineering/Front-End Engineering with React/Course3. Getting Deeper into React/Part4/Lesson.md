# Unleashing Power of useEffect Hook for Prop Changes in Nested React Components

## Lesson Introduction and Overview
Hi there, eager explorer! Today's focus is **"Using React's useEffect Hook for Prop Changes in Nested Components"**. We will learn how to handle prop changes in nested React components using the `useEffect` hook. Together, we will demystify this topic step-by-step.

## Understanding the useEffect Hook and Prop Changes
We are already familiar with React's `useState` and `useEffect` Hooks. The useEffect Hook becomes active whenever a prop (an input to the component) changes. Let's consider `fuelLevel` as a prop in the `Spaceship` Component. Here's how you get alerted when `fuelLevel` changes:

```javaScript
import React, { useEffect } from 'react';

function Spaceship({ fuelLevel }) {
  // useEffect watches fuelLevel, logs changes
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]); // fuelLevel as dependency
}
```

## Nested Components and Propagation of Prop Changes
Let's explore nested components — for example, envision a smaller Control Panel inside our larger Spaceship component. When a prop changes in the parent Spaceship, it impacts the Control Panel. Let's examine how to manage such prop changes:

```javaScript
import React, { useEffect } from 'react';

function ControlPanel({ fuelLevel }) {
  // useEffect logs fuelLevel changes
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);
}

function Spaceship({ fuelLevel }) {
  // Nested ControlPanel component
  return <ControlPanel fuelLevel={fuelLevel} />;
}
```
Each time `fuelLevel` changes in the `Spaceship`, the nested ControlPanel updates and `useEffect` triggers a log.

## Practical Example: Using useEffect for Prop Changes in Nested Components
Imagine our Spaceship has multiple Control Panels. We need to handle prop changes given this complexity:

```javaScript
import React, { useState, useEffect } from 'react';

function ControlPanel({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Rest of component's code
}

function Spaceship() {

  const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

  // Function to decrease fuel level
  const decreaseFuel = () => {
    setFuelLevel(fuelLevel - 10);
  }

  // Nested Control Panels
  return (
    <div>
      <ControlPanel fuelLevel={fuelLevel} />
      <ControlPanel fuelLevel={fuelLevel} />
      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}
```
Now, each time the "Decrease Fuel" button is clicked, the `fuelLevel` decreases by 10. Each decrease triggers a re-render of the `Spaceship` and the nested `ControlPanel` components, and `useEffect` in each `ControlPanel` logs the new `fuelLevel`. The `useState` hook ensures that the new `fuelLevel` is preserved across re-renders.

## Advanced Practical Example: Three Levels of Nested Components
Now, let's tackle a more complex scenario. Imagine a `Spaceship` that contains a `ControlPanel`, which in turn contains a `FuelGauge` component. Each component keeps track of the `fuelLevel` passed down from its parent.

```javaScript
import React, { useState, useEffect } from 'react';

function FuelGauge({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level in Fuel Gauge changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Rest of component's code
}

function ControlPanel({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level in Control Panel changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Nested Fuel Gauge
  return <FuelGauge fuelLevel={fuelLevel} />;
}

function Spaceship() {

  const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

  // Function to decrease fuel level
  const decreaseFuel = () => {
    setFuelLevel(fuelLevel - 10);
  }

  // Nested Control Panel
  return (
    <div>
      <ControlPanel fuelLevel={fuelLevel} />
      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}
```
In this scenario, a change in `fuelLevel` propagates from the `Spaceship` to the `ControlPanel`, and further down to the `FuelGauge`. The `useEffect` hook in each component keeps track of these changes, ensuring that the components respond accordingly.

## Lesson Summary and Preparation for Practice Exercises
Great job! Today, we mastered the `useEffect` hook for prop changes and controlled these changes in nested components. Are you ready for the next hands-on challenges? Practice is key to mastering and enhancing your React programming skills. Don't forget, `useEffect` and nested components are your secret weapons for building complex React apps. Happy exploring!
