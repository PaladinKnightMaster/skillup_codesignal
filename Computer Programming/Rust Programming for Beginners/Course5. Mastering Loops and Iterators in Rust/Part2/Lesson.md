# For Loops in Rust

## Introduction to For Loops in Rust
Hello! In this lesson, we're going to dive into **for loops** in Rust — a fundamental control structure used to iterate over sequences. For loops allow you to iterate over a range of numbers, items in a collection, or even characters in a string. Mastering for loops is critical for writing efficient and readable code. Let's dive in!

## Basic For Loop Syntax
A for loop in Rust iterates over a range or a collection. The basic syntax looks like this:

```Rust
fn main() {
    for var in range {
        code to execute
    }
}
```
* The `for` keyword starts the loop.
* The `in` keyword specifies the range or collection to iterate over.
* The code block inside `{}` runs for each item in the specified range.
Let's take a look at an example:

```Rust
fn main() {
    // For loop with range
    for number in 1..6 {
        println!("Number is: {}", number);
    }
}
/* Output
    Number is: 1
    Number is: 2
    Number is: 3
    Number is: 4
    Number is: 5
*/
```

The syntax `1..6` is a range expression in Rust that represents a sequence of numbers starting from 1 up to, but not including, 6. It uses the `..` operator to create this range. So, `1..6` generates the sequence: 1, 2, 3, 4, 5.

In each iteration of the loop, the variable `number` takes on the specified value in the range.

## Iterating in Reverse
Rust provides a convenient way to iterate in reverse using the `rev` method. The range includes the integers 1 up to, but not including, 6. Since the last element of the range is 5, the for loop starts at 5 and continues down to 1.

```Rust
fn main() {
    for number in (1..6).rev() {
        println!("Reverse number is: {}", number);
    }
}
/* Output
    Reverse number is: 5
    Reverse number is: 4
    Reverse number is: 3
    Reverse number is: 2
    Reverse number is: 1
*/
```

In this example:

* The `rev` method is called on the range `1..6`.
* This makes the loop iterate from 5 down to 1.

## Using `step_by` for Custom Increments
Sometimes, you may need to iterate with a custom step size. The `step_by` method allows you to specify the step size. `step_by` takes an integer argument that specifies the number of steps to jump.

```Rust
fn main() {
    // Using step_by to iterate
    for number in (1..8).step_by(2) {
        println!("{}", number);
    }
}
/* Output
    1
    3
    5
    7
*/
```
In this example, the loop iterates over the range `1..8` with a step size of 2.

## Combining `rev` and `step_by`
You can combine `rev` and `step_by` for more complex iterations:

```Rust
fn main() {
    // Using step_by in reverse iteration
    println!("Iterating in reverse with a step size of 2:");
    for number in (1..10).rev().step_by(2) {
        println!("{}", number); // Prints "9", "7", "5", "3", "1"
    }
}
/* Output
    9
    7
    5
    3
    1
*/
```
In this example:

* First, the range `1..10` is reversed.
* Then, the loop steps by 2, iterating backward.

## Variable Scope within For Loops
Variables declared within a for loop's body are local to that loop. This is important to keep in mind when writing more complex code:

```Rust
fn main() {
    // for loop scope
    for num in 1..5 {
        let doubled = num * 2;
        println!("{} doubled is {}", num, doubled);
    }
    // println!("{} doubled is {}", num, doubled);  // Error because `num` and `doubled` are out of scope.
}
```
In this example:

* Each iteration of the loop has its own instance of `doubled`.
* Attempting to access it outside the loop will result in a scope error.

## Summary and Next Steps
Well done! You've now explored various aspects of for loops in Rust, including iterating over ranges, using `rev` and `step_by` for custom iterations, and understanding variable scope within loops.

For loops are incredibly powerful and will make your code more concise and efficient. Now it's time to apply what you've learned. Dive into the exercises ahead to solidify your understanding and see how for loops can simplify your code. Happy coding!
