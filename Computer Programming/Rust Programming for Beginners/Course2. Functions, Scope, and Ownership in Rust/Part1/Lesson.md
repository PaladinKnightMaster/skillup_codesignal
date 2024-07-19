# Exploring Rust Functions: A Beginner's Guide

## Overview of Rust Functions
Welcome, wise explorer! We are embarking on a journey through the world of Rust. Our focus for today is **Rust functions**. A function in Rust behaves like a recipe: it takes in certain ingredients, or "*arguments*", processes them according to a set of instructions, and then produces an output, or a "**return value**".

For instance, consider a function in a weather forecasting app. This function takes the current temperature and humidity as input, computes the likelihood of precipitation, and then displays the expected weather outcome.

Are you ready for an adventure into the world of Rust functions? Let's begin!

## Learning to Write Rust Functions
Creating a function in Rust involves the use of the keyword `fn`, the name of the function, parentheses `()`, and curly braces `{}`. Here is an example:

```rust
fn hello_world() {
    println!("Hello, World!");
}
```
In this function, `hello_world` is the name of the function. The body of the function, which is encapsulated within the curly braces, performs the operation of printing out the phrase "Hello, World!". Now that we've created our first function, let's understand how to use it.

## Calling Functions
In Rust, like many other languages, functions can be called within other functions, including within the `main` function itself. This is crucial in structuring our program: we can break down complex tasks into digestible sub-tasks. Each sub-task can be defined as a function and then executed in a particular order within the `main` function or even other functions.

In this example, we'll see how we can call a custom function, `hello_world()`, from within the `main` function:

```rust
fn main() {
    println!("Starting main function");
    hello_world(); // Call hello_world function.
    println!("Ending main function");
}

fn hello_world() {
    println!("Hello World!");
}
```
In the code above, we first defined the `hello_world()` function which, when called, prints "Hello World!". This function was then called within the `main` function, after printing "Starting 'main' function" and before printing "Ending 'main' function".

When the above program is executed, the console output will be:

```
Starting main function
Hello World!
Ending main function
```
The order that functions are defined does not matter. Declaring `fn hello_world()` before `fn main()` works just fine.

Functions allow us to organize our code and make it more readable and maintainable. We can reuse functions as many times as required, which allows us to reduce code repetition and make the program more efficient.

## Functions with Arguments
Just as a chef increases the versatility of a recipe by incorporating varying ingredients, our function becomes versatile when we introduce arguments. These are the inputs that our function can manipulate and blend to produce diverse results.

```rust
// Call the function with "Good Morning!"
fn main() {
    greet("Good Morning!"); // Prints: "Good Morning!"
}

fn greet(message: &str) {
    println!("{}", message);
}
```
In the above `greet` function, `message` is called a parameter. It is a variable name that we have access to inside our function. After nameing the parameter, we must declare the data type of the variable. Here, we see `message` is expected to be of type `&str`, also known as a string literal.

To invoke the function, we pass the string literal "Good Morning!" to the `greet` function. Inside the `greet` function, `message` now has a value of "Good Morning!". The `greet` function then prints "Good Morning!".

## Functions with Multiple Arguments
To expand on the versatility of our functions, we can include multiple parameters. Each parameter will be separated by a comma and include its respective type annotation. By using multiple parameters, our functions can create more complex and tailored outputs.

Let's examine this further with a function that introduces a person using their name and age:

```rust
fn main() {
    // Call the function with "Alice" and 30
    introduce("Alice", 30); // Prints: "My name is Alice and I am 30 years old."
}

fn introduce(name: &str, age: i32) {
        println!("My name is {} and I am {} years old.", name, age);
}
```
In the `introduce` function, we have two parameters: `name` and `age`. `name` is of type `&str` and `age` is `i32`, an integer type in Rust.

By utilizing multiple parameters within our functions, we can greatly enhance the capability and complexity of the tasks we can perform.

## Functions that Give Back: Return Values
In Rust, functions not only process operations but can also return a result or output. The returned value can then be used in other parts of your code. The data type the function returns is specified with an arrow `->` followed by the type information. If a function does not return a value, the `->` is not used.

There are two ways to return a value from a function:

* An expression without a semicolon as the last line of the function
* The `return` keyword (with or without a semicolon). This is used when a function needs to return early when the rest of the function does not need to be run.
Let's illustrate the concept with an example:

```rust
fn main() {
    // Call the function
    let total = add_numbers(7, 3);
    println!("The sum is: {}", total); // Prints: The sum is: 10
    let difference = subtract_numbers(7,3);
    println!("The difference is: {}", difference); // Prints: The difference is: 4
}

fn add_numbers(num1: i32, num2: i32) -> i32 {
        let result = num1 + num2;
        result // Returning result without 'return' keyword.
}

fn subtract_numbers(num1: i32, num2: i32) -> i32 {
    let result = num1 - num2;
    return result; // Returning result with 'return' keyword
    println!("The function returns early, so this line will not print.");
}
```
In the `add_numbers` function, we have `num1` and `num2` as parameters, and the function returns an integer (`i32`). The sum of `num1` and `num2` is calculated, and because `result` is the last expression of the function (without a semicolon), it's automatically returned.

In the `subtract_numbers` function, we have `num1` and `num2` as parameters, and the function returns an integer (`i32`). The difference of `num1` and `num2` is calculated, and returned by using the `return` keyword. The print statement does not run because the function stops execution after it returns a value.

Understanding how return values work in Rust functions significantly enhances our ability to write meaningful and reusable code.

## Concluding Our Journey
Well done! We have delved into the cosmos of Rust, unveiling the wonders of **Rust functions**. We have learned about their applications and even created our own functions. Still, our journey does not end here. There are countless more exciting Rust features waiting to be discovered!

Now, it's time to solidify your knowledge through hands-on practice. Up next, there is a host of experiments and exercises designed to test and refine your usage of Rust functions. Happy coding!
