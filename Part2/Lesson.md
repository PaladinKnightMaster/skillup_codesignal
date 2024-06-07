# Lesson 2. Mastering Conditional and Logical Operators and the forEach Loop in JavaScript

## Understanding the Ternary Conditional Operator
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

## Logical AND (`&&`) and OR (`||`) Operators Refresher
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

## Logical AND (`&&`) and OR (`||`) Operators with Non-Primitive Values
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

## Practical Use Cases of Logical Operators
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

## The `forEach` Loop
In JavaScript, the `forEach` loop presents an elegant and straightforward method for executing a function for each item in an array.

Here's an example in which we're developing an interactive quiz game and wish to display each question to the player:

```javaScript
let questions = ["What's your name?", "What's your favorite game?", "Who's your favorite character?"];
questions.forEach(function(question) {
    console.log(question);
});
```
In the example above, the `forEach` method executes the function for every item in the questions array and logs each question in the console.
