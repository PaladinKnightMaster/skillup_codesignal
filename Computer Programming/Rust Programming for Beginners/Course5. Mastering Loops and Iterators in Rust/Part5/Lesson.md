# Nested Loops in Rust

## Introduction to Nested Loops in Rust
Greetings! In this lesson, we're going to delve into another essential concept in Rust programming: Nested Loops. You've learned the fundamentals of looping structures in previous lessons, including the usage of `for`, `while`, and `loop`. Now, we're going to layer these loops to handle more complex scenarios and data manipulations.

Nested loops allow us to perform iterations within iterations. Think of it as another level of repetition where one loop runs inside another loop. This capability is vital for tasks such as multidimensional array processing, creating patterns, and more complex data manipulations.

Let's get started!

## Basic Nested For Loops
Nested `for` loops are a powerful tool for iterating over multidimensional arrays or creating patterns. Here’s a basic example to get you started:

```Rust
fn main() {
    // Start of outer loop
    for i in 1..4 {
        println!("Outer loop iteration {}", i);
        // Start of inner loop
        for j in 1..4 {
            println!("i: {}, j: {}", i, j);
        }
    }
}
/* Output
    Outer loop iteration 1
    i: 1, j: 1
    i: 1, j: 2
    i: 1, j: 3
    Outer loop iteration 2
    i: 2, j: 1
    i: 2, j: 2
    i: 2, j: 3
    Outer loop iteration 3
    i: 3, j: 1
    i: 3, j: 2
    i: 3, j: 3
*/
```
In this example:

* The outer loop runs with `i` ranging from 1 to 3.
* The inner loop runs with `j` ranging from 1 to 3 for each iteration of the outer loop.

## Basic Nested While Loops
Nested `while` loops offer similar functionality.

```Rust
fn main() {
    let mut i = 1;
    // Start of outer loop
    while i < 4 {
        println!("Outer loop iteration {}", i);
        let mut j = 1;
        // Start of inner loop
        while j < 4 {
            println!("i: {}, j: {}", i, j);
            j += 1;
        }
        i += 1;
    }
}
/* Output
    Outer loop iteration 1
    i: 1, j: 1
    i: 1, j: 2
    i: 1, j: 3
    Outer loop iteration 2
    i: 2, j: 1
    i: 2, j: 2
    i: 2, j: 3
    Outer loop iteration 3
    i: 3, j: 1
    i: 3, j: 2
    i: 3, j: 3
*/
```
In this example:

* We initialized `i` and `j` outside the loops.
* The outer while `loop` iterates while `i` is less than 4.
* Inside the outer loop, we have another `while` loop iterating while `j` is less than 4, printing the values of `i` and `j`.

## Advanced Nested For Loops
For more advanced funcationality, the inner loop can use a range dependant on the outer loop variable. The syntax `0..=i` creates a range from 0 up to and including `i`.

```Rust
fn main() {
    for i in 0..5 {
        // Inner loop iterates from 0 up to and including i
        for j in 0..=i {
            print!("{} ", j);
        }
        println!();
    }
}
/* Output
    0
    0 1
    0 1 2
    0 1 2 3
    0 1 2 3 4
*/
```
In this example:

* The outer loop runs with `i` ranging from 0 to 4.
* For each iteration of the outer loop, the inner loop runs with `j` ranging from 0 to `i`.

## Advanced Nested While Loops
Similar to nested `for` loops, nested `while` loops can also create advanced patterns or manipulate data:

```Rust
fn main() {
    let mut i = 5;
    while i > 0 {
        let mut j = i;
        while j > 0 {
            print!("{} ", j);
            j -= 1;
        }
        println!();
        i -= 1;
    }
}
/* Output
    5 4 3 2 1
    4 3 2 1
    3 2 1
    2 1
    1
*/
```
In this example:

* The outer loop iterates with `i` decrementing from 5 to 1.
* The inner loop starts with `j` taking on the value of `i`, decrementing `j` until it reaches 0.

## Combining For Loops and While Loops
You can `mix` for loops with `while` loops to leverage the strengths of both constructs:

```Rust
fn main() {
    for i in 1..4 {
        let mut j = i;
        while j > 0 {
            println!("i: {}, j: {}", i, j);
            j -= 1;
        }
    }
}
/* Output
    i: 1, j: 1
    i: 2, j: 2
    i: 2, j: 1
    i: 3, j: 3
    i: 3, j: 2
    i: 3, j: 1
*/
```
In this example:

* The outer `for` loop runs with `i` ranging from 1 to 3.
* The inner `while` loop starts with `j` taking on the value of `i`, decrementing `j` until it reaches 0.

## Summary and Next Steps
Great job! You've now explored the use of nested loops in Rust, including basic and advanced examples for both `for` and `while` loops. You've also seen how to combine these loops for greater control and flexibility in your programs.

Understanding nested loops expands your ability to handle complex data structures and create intricate algorithms. It's a powerful skill that will be highly beneficial in advanced programming tasks, such as multidimensional array manipulations and complex pattern creations.

Now, let's move on to the practice exercises where you can apply what you've learned. These exercises will help you solidify your understanding and get comfortable with using nested loops in various scenarios. Enjoy coding!
