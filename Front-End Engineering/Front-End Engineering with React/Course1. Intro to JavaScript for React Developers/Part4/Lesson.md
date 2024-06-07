# Lesson 4. JavaScript Timers and Module Exports

## Covering the Basics: JavaScript Timers

JavaScript’s `setInterval` enables us to execute a piece of code repeatedly after a specified time interval. This concept is universally implemented in various tasks ranging from updating live clocks to executing server pings:

```javaScript
let intervalId = setInterval(() => {
    console.log('Hello, World!');
}, 2000);
```
`setInterval` takes two parameters: a function to be executed and the delay before the function execution is repeated.

Suppose we wish to halt the repetition of the action. In that case, we'd employ `clearInterval`, a function that ceases the timer set by `setInterval`:

```javaScript
clearInterval(intervalId);
```
In practical scenarios, errors might arise during the repeated execution of the function. Here's a snippet demonstrating the use of a `try...catch` block to handle such occurrences:

```javaScript
let intervalId = setInterval(() => {
  try {
    riskyFunction(); // A function which may fail
  } catch (error) {
    console.error(error);
    clearInterval(intervalId);
  }
}, 2000);
```

## Exporting and Importing in JavaScript

Maintaining organization in code is crucial for large JavaScript projects. We can split our code into multiple files or modules, export entities from one module, and import them into another. To accomplish this, we employ named exports and default exports.

## Digging Deeper into Named Exports

A named export enables the exportation of multiple entities from modules by simply using the `export` keyword. For instance, consider this module, which exports two mathematical functions:

```javaScript
// mathFunctions.js
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }
```

## Unpacking Default Exports

Default exports allow an entity, such as a variable, function, or class, to be exported from a module. While a module can only have one default export, it can include several named exports.

```javaScript
// greeter.js
export default function greet() { return "Hello, JavaScript!"; }
```

## How to Import Named and Default Exports
We make use of the `import` keyword to import named and default exports. For a named export, we enclose the entities to be imported within curly braces `{}`:

```javaScript
import { add, multiply } from './mathFunctions.js';
console.log(add(2, 3));  // 5
console.log(multiply(5, 2)); // 10
```
For a default export, we can choose any name:
```javaScript
import greet from './greeter.js';
console.log(greet());   // "Hello, JavaScript!"
```
When should default exports be preferred over named exports? If a module serves a primary purpose or contains a main function that's used more frequently than others, it's a good candidate for a default export. Conversely, named exports are better suited when a module exports multiple entities of equal importance.
