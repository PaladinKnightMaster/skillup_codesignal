# While Loops in Rust

## Introduction to While Loops in Rust

Hello! In this lesson, we will dive into while loops in Rust, a fundamental control structure used frequently in programming. Understanding while loops is crucial because they allow you to repeat a block of code as long as a specified condition is true. This makes them incredibly useful for scenarios where you don't know in advance how many times you need to repeat an operation.

We'll cover the basics of while loops, their syntax, common use cases, handling infinite loops, and scope within while loops.

Let's get started!

## Basics of While Loops
A while loop in Rust repeatedly executes a block of code as long as a given condition evaluates to true. The general syntax looks like this:

```Rust
while condition {
    code to execute
}
```

As long as the condition is true, the block is executed and the condition is checked again. Let's take a look at a concrete example:

```Rust
fn main() {
    let mut count = 0;
    while count < 5 {
        println!("Count is: {}", count);
        count += 1;
    }
}
/* Output:
    Count is: 0
    Count is: 1
    Count is: 2
    Count is: 3
    Count is: 4
*/
```

In this snippet:

* `count` is a mutable variable initialized to 0.
* The while loop condition checks if `count` is less than 5.
* The loop prints the value of `count` and then increments it by 1 until the condition is no longer true.
* Once `count` reaches 5, the condition becomes false, and the loop stops.

## Infinite Loops and Loop Control
While loops can become infinite if their conditions never become false. Be cautious to ensure they eventually terminate. For example:

```Rust
fn main() {
    let mut countdown = 5;
    while countdown > 0 {
        println!("Countdown is: {}", countdown);
    }
}
```
This loop would never terminate because the `countdown` value remains unchanged, keeping the condition true. To fix this infinite loop, the countdown variable must be decremented as follows:

```Rust
fn main() {
    let mut countdown = 5;
    while countdown > 0 {
        println!("Countdown is: {}", countdown);
        countdown -= 1;
    }
}
/* Output:
    Countdown is: 5
    Countdown is: 4
    Countdown is: 3
    Countdown is: 2
    Countdown is: 1
*/
```
* The loop starts with `countdown` set to 5.
* It prints the current value and decreases `countdown` by 1 in each iteration.
* The loop stops when `countdown` becomes 0, making the condition false.
However, if we forget to decrement `countdown` within the loop, it would keep running forever

## Looping Through Indices
Sometimes, you'll want to iterate over arrays or vectors using indices. While loops can help with this:

```Rust
fn main() {
    let numbers = [1, 2, 3, 4];
    let length = numbers.len();
    let mut index = 0;
    while index < length {
        println!("Value at index {} is {}", index, numbers[index]);
        index += 1;
    }
}
/* Output:
    Value at index 0 is 1
    Value at index 1 is 2
    Value at index 2 is 3
    Value at index 3 is 4
*/
```

In this code:

* We defined an array `numbers` and calculated its length.
* The while loop prints values at each index until the index matches the length.

## Scope within While Loops
In Rust, variable scopes are crucial to understand. Variables declared inside a while loop are not accessible outside of it:

```Rust
fn main() {
    let mut num = 0;
    while num < 5 {
        let doubled = num * 2;
        println!("{} doubled is {}", num, doubled);
        num += 1;
    }
    // println!("Last doubled number is {}", doubled); // Error: doubled is out of scope
}
```

* We declared `doubled` inside the loop.
* It's accessible only within the loop body, hence the error if we try to access it outside.

## Summary and Next Steps
Awesome! You've now been introduced to while loops in Rust. You've learned:

* How to create and iterate with while loops.
* How to avoid infinite loops.
* How to loop through indices.
* The scope of variables within loops.

Using while loops effectively is a key skill in writing clean, efficient code. You're now ready to practice and apply these concepts in real-world scenarios.

Dive into the practice section to reinforce your understanding and see the magic of while loops in action. Happy coding!
