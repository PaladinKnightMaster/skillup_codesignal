# JavaScript Programming and DOM API

## Lesson 1: Unlocking Advanced Arrays and Objects in Javascript: An Introduction to Destructuring, Spread, and Rest Operators

### Advanced Objects and Arrays
Objects and arrays form the backbone of any sophisticated language, including JavaScript. When paired with powerful ES6 features, these constructs offer the flexibility and efficiency we need in modern programming tasks.

Here's how you can create an object, a collection of properties:

```javaScript
const car = {
    wheels: 4,
    color: 'red',
};
```
Each property is an association between a key (or name) and a value. In our `car` object, `wheels` and `color` are keys, and 4 and `'red'` are their associated values. On the other hand, arrays can hold a list of values:

```javaScript
const fruits = ['apple', 'orange', 'grape'];
```
In our `fruits` array, `'apple'`, `'orange'`, and `'grape'` are individual values.

### Destructuring in JavaScript and Property Shorthand
JavaScript ES6 provides us with a neat method to 'unpack' values from arrays or properties from objects, rather than directly accessing them:

```javaScript
let { wheels, color } = car;
let [fruit1, fruit2, fruit3] = fruits;

console.log(wheels); // prints 4
console.log(fruit1); // prints 'apple'
```
Here, `wheels` and `color` are extracted from `car`, and `fruit1`, `fruit2`, and `fruit3` from `fruits`. This method is known as Destructuring.

ES6 also introduced Property Value Shorthand, which is advantageous when you intend to assign properties to variables of the same name:

```javaScript
let type = 'Suv';
let brand = 'Audi';

let car = { type, brand }; // { type: 'Suv', brand: 'Audi' }
```
This shorthand method eliminates repetition and leads to cleaner code.

Additionally, ES6 provides the convenience of using a variable as a property name in an object initializer syntax. Let's consider a situation where you want to create a new object, take a property name from a variable, and add a value to it:

```javaScript

let key = 'frontend';
let value = 'React';

let preference = { [key]: value }; // { frontend: 'React' }
```
Here, `[key]` is substituted with the value of `key`.

### ES6 Spread Operator
The ES6 spread operator, represented by three consecutive dots (`...`), makes working with arrays and objects more convenient. Let's explore!

Imagine you have an object named `house`, which represents a home along with its residents:

```javaScript
Copy
    const house = {
        habitat: 'Elm Street',
        type: 'Detached',
        habitants: ['John', 'Anna', 'Tom']
    };
```
Suppose you want to add a new resident, 'Lisa', to the house. Traditionally, you may use `push`:

```javaScript
   house.habitants.push('Lisa');
```
With the spread operator, we have a more elegant solution:
```javaScript
   house = { ...house, habitants: [...house.habitants, 'Lisa'] };
```
In this case, you're forming a new `house` object by merging the current `house` object and a freshly created `habitants` array, which includes the old residents plus 'Lisa'.

Let's take an array `arr`, and you want to destructure it such that you store the first and second elements in `a` and `b` variables and the rest in `others`. The spread operator can do just that:

```javaScript
   const arr = [1, 2, 3, 4, 5];
   const [a, b, ...others] = arr;
```
After this, `a` and `b` are `1` and `2`, respectively, while `others` is an array containing the remaining elements: `[3, 4, 5]`. This syntax is handy in various scenarios, like when working with function arguments.

Knowing the spread operator boosts your JavaScript skills, allowing you to write expressive and efficient code.

### ES6 Rest Parameters
Introduced in ES6, Rest *Parameters* meet the need to represent an indefinite number of arguments as an array. With rest parameters, you can gather as many arguments as needed into an array and apply array methods to them.

Consider the following function that calculates the sum of all its arguments:

```javaScript
function sumAll(...args) {
    return args.reduce((sum, current) => sum + current);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
```
The function call `sumAll(1, 2, 3, 4)` makes the `args` array equal to `[1, 2, 3, 4]`. Then, the `reduce` method computes their sum, yielding the output 10.


---

## Lesson 2. Mastering Conditional and Logical Operators and the forEach Loop in JavaScript

### Understanding the Ternary Conditional Operator
A Ternary Operator in JavaScript serves as a shortcut for an `if-else` statement. It derives its name "ternary" from involving three parts: a condition, a `true` result, and a `false` result.

Here's how it appears:

```javaScript
let result = (condition) ? 'value if true' : 'value if false';
```
If the condition holds true, you receive the first result; otherwise, you obtain the second result.

For instance, consider that you're developing a game and want to set a message based on the player's score:

```javaScript
let score = 85;
let message = (score > 50) ? 'Victory!' : 'Try again.';
console.log(message); // 'Victory!'
```
In the example above, the game declares 'Victory!' when the player's score exceeds 50; otherwise, it encourages the player to 'Try again.'.

Let's consider a more complicated example where we use a nested ternary operator. Assume we want to classify a number as "negative", "positive", or "zero":

```javaScript
let number = 5;
let description = (number > 0) ? 'positive' : (number < 0) ? 'negative' : 'zero';
console.log(description); // 'positive'
```
In the above example, if `number` is greater than `0`, we get 'positive'. If not, JavaScript checks if `number` is less than `0`, in which case we get 'negative'. If both conditions fail (i.e., if the number is `0`), we get 'zero'. We used a nested ternary operator to evaluate a condition in the `else` block.

### Logical AND (`&&`) and OR (`||`) Operators Refresher
In JavaScript, logical operators are utilized to ascertain logic between variables or values. Today, we will examine two such operators: AND (`&&`) and OR (`||`).

The AND (`&&`) operator returns true only if all conditions hold true. This can be beneficial when multiple conditions need to be simultaneously fulfilled. For instance, consider an online store that provides a special discount for customers from a certain region who also have a specific item in their cart:

```javaScript
let customerRegion = 'North America';
let cartContains = 'Special Item';
let isDiscounted = (customerRegion === 'North America' && cartContains === 'Special Item');
console.log(isDiscounted); // true
```
Alternatively, the OR (`||`) operator returns true if at least one of the conditions holds true. This can be useful when an effect has multiple possible triggers. For example, assume that the game sound is activated either when the player clicks on the settings or when the player reaches a particular level:

```javaScript
let isSettingsClicked = true;
let isLevelUp = false;
let activateSound = (isSettingsClicked || isLevelUp);
console.log(activateSound); // true
```

### Logical AND (`&&`) and OR (`||`) Operators with Non-Primitive Values
In JavaScript, logical operators such as AND (`&&`) and OR (`||`) can also be used with non-primitive values like objects and arrays.

The AND (`&&`) operator returns the first falsy value; if not found, it returns the last truthy value. On the other hand, the OR (`||`) operator returns the first truthy value; if not found, it returns the last falsy value.

Here is an example demonstrating the behavior of AND and OR operators with non-primitive values:

```javaScript
let firstObject = {name: 'John'};
let secondObject = {name: 'Jane'};

let resultAnd = firstObject && secondObject;
console.log(resultAnd); // {name: 'Jane'}

let resultOr = firstObject || secondObject;
console.log(resultOr); // {name: 'John'}
```
In the above example, since both `firstObject` and `secondObject` are truthy, the AND (`&&`) operator returns the last one (`secondObject`), while the OR (`||`) operator returns the first one (`firstObject`).

Remember, in JavaScript, an empty object is always truthy, while an empty string, `null`, `undefined`, `NaN`, and `0` are falsy. Keep this in mind while dealing with logical operators and non-primitive values. So continuing our work on JavaScript, it's essential to understand how logical operators work, not just for conditional testing, but also for working with non-primitive values. Happy coding!

### Practical Use Cases of Logical Operators
Here are a few additional examples illustrating the usage of logical AND `&&` and logical OR `||` operators with non-primitive JavaScript values.

- Using Logical AND to Prevent Errors
```javaScript
let text;
let message = text && text.length;
console.log(message); // undefined
```
In this example, since `text` is `undefined` (a falsy value), the `&&` operator doesn't even evaluate `text.length` (which would cause an error) and directly returns `undefined`.


- Setting Default Values with Logical OR
```javaScript
let currentUser = null;
let defaultUser = "Guest";
let name = currentUser || defaultUser;
console.log(name); // Guest
```
Here, if `currentUser` is falsy (`null` in this case), `defaultUser` gets assigned to `name`.

- Combining Logical AND and Logical OR
```javaScript
let server;
let local = "Local User";
let user = server || local && local.toUpperCase();
console.log(user); // LOCAL USER
```
In this example, the `&&` operation is executed first, and then the `||` operation. So, `local.toUpperCase()` gets executed if `local` is truthy, and only if `server` is falsy does the entire expression evaluate to the result of `local.toUpperCase()`. Note that the `toUpperCase` function is used to convert all the string characters to uppercase.

The above examples demonstrate the power and versatility of using logical operators in JavaScript with non-primitive values. It's an efficient way to handle default values and prevent errors caused by undefined or null values.

### The `forEach` Loop
In JavaScript, the `forEach` loop presents an elegant and straightforward method for executing a function for each item in an array.

Here's an example in which we're developing an interactive quiz game and wish to display each question to the player:

```javaScript
let questions = ["What's your name?", "What's your favorite game?", "Who's your favorite character?"];
questions.forEach(function(question) {
    console.log(question);
});
```
In the example above, the `forEach` method executes the function for every item in the questions array and logs each question in the console.

---
### Practice

---

## Lesson 3. Navigating JavaScript Classes: Understanding Structure, Methods, and Accessors

### Understanding Classes
JavaScript classes are essentially the molds for creating objects. They encompass data and behaviors that belong to the object. The structure for defining a class includes the `class` keyword followed by the name of the class.

```javaScript
class Dog {
    constructor(name) {
        this.name = name;
    }
}
```
In this `Dog` class, we have a property called `name`, which is set in a special function named the `constructor()`. The `constructor` is automatically called when we create a new instance of the class.

In object-oriented programming, an "instance" is an object created from a specific class. We can create a new instance in JavaScript using the `new` keyword:

```javaScript
let myDog = new Dog('Spot');
```
In this line of code, `new Dog('Spot')` creates a new instance of the `Dog` class, with the `name` property set to 'Spot'. The `new` keyword is essentially telling JavaScript to create a new object, and then invoke the constructor function on that object.

Within the class, we also often see and use the `this` keyword. The `this` keyword in JavaScript is a little complex as it behaves differently depending on the context it is used in. In a class, `this` refers to the instance of the class. In other words, it refers to the object that is created from the class.

For example, when we use `this.name = name;` in our constructor, `this` is referring to the instance of the Dog being created, and `this.name` is setting the `name` property of that specific Dog instance.

The instance of the class, such as `myDog` in this case, is a full-fledged object with properties and behaviors as defined by the class structure. We can easily access these properties, like so:

```javaScript
console.log(myDog.name);  // "Spot"
```
When you see this code, the dot notation ".name" accesses the `name` property of `myDog` and returns its value. It's actually accessing `this.name` for the `myDog` object. So, whenever you see `this` in a method inside a class, think of `this` as the object which the method is acting on.

### Class Structure and Main Methods
The class structure is defined using the `class` keyword followed by the class's name. Inside, we define a `constructor` method that initializes object properties and additional methods that define class actions or behaviors. If we want our dogs to bark, we can add a `bark` method:

```javaScript
class Dog {
    constructor(name) {
        this.name = name;
    }
    
    bark() {
        // The keyword 'this' represents the instance of the class
        return `${this.name} says woof!`;
    }
}

let myDog = new Dog('Spot');
// 'bark' method being used on 'myDog' instance of Dog class
console.log(myDog.bark());  // "Spot says woof!"
```
With this addition, our `Dog` class now includes a `bark` method, meaning `Spot` can bark.

### Getters and Setters
Getters and setters are special methods that allow us to manipulate an object's properties.

Getters
Getters in a class are methods that get the value of a specific property. To define a getter, we use the `get` keyword in front of a function.

Let's modify the `Dog` class to include a getter for the `name` property:

```javaScript
class Dog {
    constructor(name) {
        this._name = name; // the underscore (_) is a common convention for private properties which will be discussed later
    }
    
    // Define a getter for the 'name' property
    get name() {
        return this._name;
    }
}
```
Here, the `get` keyword before the `name` function makes it a getter, which means it will be automatically invoked when we access the `name` property.

Now, we can create a `Dog` instance and use our getter to access its `name` property:

```javaScript
let myDog = new Dog('Spot');
console.log(myDog.name);  // "Spot"
```
Here, when we use `myDog.name`, instead of directly returning the value of `myDog._name`, it invokes the getter method that returns the value of `this._name` of the `myDog` object. This allows us to abstract away the underlying data and present a simple interface for getting the `name` attribute of a `Dog`, making our code more flexible and easier to maintain.

Setters
Following the getters, we now have setter methods. They allow us to run some code every time a specific property is attempted to be changed, or 'set'.

We can create a setter for the `name` property in the `Dog` class. We want to make sure that a dog's name is not left blank, so we'll add a check in our setter:

```javaScript
Copy
class Dog {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name;
    }
    
    // Define a setter for the 'name' property
    set name(value) {
        // Only update _name if value is not empty
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("Error: Name cannot be empty.");
        }
    }
}
```
Here, the `set` keyword before our `name` method marks it as a setter. It is used to update the value of a property. In this case, the `_name` property.

Now, if we create a `Dog` instance and use our setter to change its `name` property, we can ensure that a meaningful value is set:

```javaScript
let myDog = new Dog('Spot');
console.log(myDog.name);  // "Spot"
myDog.name = '';  // Error: Name cannot be empty.
console.log(myDog.name);  // "Spot"

myDog.name = 'Buddy';
console.log(myDog.name);  // "Buddy"
```
Here, when we tried to set the `name` property to an empty string, it triggered the setter method. As our setter method contains a condition checking that the name cannot be empty, an error message was displayed to the console and the `name` property remained unchanged.

Setters are very useful to protect your object's properties from being incorrectly set or to automatically change other properties when one is set. For instance, here it ensures that we don't accidentally leave a dog nameless.

---
### Practice

---

## Lesson 4. JavaScript Timers and Module Exports

### Covering the Basics: JavaScript Timers

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

### Exporting and Importing in JavaScript

Maintaining organization in code is crucial for large JavaScript projects. We can split our code into multiple files or modules, export entities from one module, and import them into another. To accomplish this, we employ named exports and default exports.

### Digging Deeper into Named Exports

A named export enables the exportation of multiple entities from modules by simply using the `export` keyword. For instance, consider this module, which exports two mathematical functions:

```javaScript
// mathFunctions.js
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }
```

### Unpacking Default Exports

Default exports allow an entity, such as a variable, function, or class, to be exported from a module. While a module can only have one default export, it can include several named exports.

```javaScript
// greeter.js
export default function greet() { return "Hello, JavaScript!"; }
```

### How to Import Named and Default Exports
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

---

### Practice

---


