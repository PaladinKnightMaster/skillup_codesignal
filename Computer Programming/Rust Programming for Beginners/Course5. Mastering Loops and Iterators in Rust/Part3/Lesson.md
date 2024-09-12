# Loop Control Flow in Rust

## Introduction to Loop Control Flow in Rust
Hello! In this lesson, we'll explore the powerful concept of loop control flow in Rust. Control flow in loops allows you to manage the execution of code more effectively within your `while` and `for` loops. . Specifically, we'll delve into using conditionals inside loops, the `loop` construct, controlling loops with `break` and `continue` statements, and understanding their significance.

Control flow mechanisms are essential for building complex and functional logic in your programs. By the end of this lesson, you'll be proficient in using these tools to write more efficient and readable code.

Let's get started!

## Conditionals Inside Loops
Let's first explore how to incorporate conditionals inside loops. This will help you perform specific actions based on dynamic conditions evaluated during each iteration.

```Rust
fn main() {
    let mut num = 0;
    while num <= 10 {
        if num % 2 == 0 {
            println!("{} is even", num);
        } else {
            println!("{} is odd", num);
        }
        num += 1;
    }
}
/* Output:
    0 is even
    1 is odd
    2 is even
    3 is odd
    4 is even
    5 is odd
    6 is even
    7 is odd
    8 is even
    9 is odd
    10 is even
*/
```

In this example:

* We initialize `num` to 0.
* The `while` loop runs as long as `num` is less than or equal to 10.
* Inside the loop, we use an `if` statement to check if `num` is even or odd, then print the approprita message.
* We increment `num` by 1.

## `loop` and `break` to Exit Loops
In Rust, an infinite loop can be created using the `loop` keyword. To stop the loop, use the `break` keyword to stop execution of the loop. This is useful when you want to stop a loop once a particular requirement is met. Let's take a look.

```Rust
fn main() {
    let mut count = 0;
    loop {
        if count == 5 {
            break;
            println!("This does not get printed");
        }
        println!("Count is: {}", count);
        count += 1;
    }
}
/* Output:
    Count is 0
    Count is 1
    Count is 2
    Count is 3
    Count is 4
*/
```

In this example:

* We initialize `count` to 0.
* The `loop` runs indefinitely until the `break` condition is met.
* When `count` equals 5, the `break` statement exits the loop.
* The print statement inside the `if` block does not get executed because the loop stop execution

## Using `continue` to Skip Iterations
The `continue` statement is used to skip the rest of the loop iteration and proceed to the next iteration. This is beneficial when you need to bypass certain actions based on a condition. Let's look at an example where we want to only print odd numbers.

```Rust
fn main() {
    for number in 1..10 {
        if number % 2 == 0 {
            continue;
            println!("This does not get printed");
        }
        println!("Odd number: {}", number);
    }
}
/* Output:
    Odd number: 1
    Odd number: 3
    Odd number: 5
    Odd number: 7
    Odd number: 9
*/
```

In this example:

* The `for` loop iterates over the range `1..10`.
* If the number is even, the `continue` statement skips the rest of the current iteration.
* The print statement inside the `if` block does not get executed because the loop skips to the next iteration
* If the number is odd, it gets printed.

## Combining Loop Control with Conditionals
Combining `break` and `continue` with conditionals allows for complex control flow within your loops. Here’s an example of using both together:

```Rust
fn main() {
    let mut num = 0;
    loop {
        if num > 10 {
            break;
            println!("This does not get printed");
        }
        if num % 2 != 0 {
            num += 1;
            continue;
            println!("This does not get printed");
        }
        println!("{} is even", num);
        num += 1;
    }
}
/* Output:
    0 is even
    2 is even
    4 is even
    6 is even
    8 is even
    10 is even
*/
```

In this example:

* The `num` variable is initialized to 0.
* The `loop` runs indefinitely until the `break` condition is met.
* Inside the loop:
    * First, it checks if `num` is greater than 10 with the condition `if num > 10`. If this condition is true, the `break` statement terminates the loop.
    * If not, it checks if `num` is odd with the condition `if num % 2 != 0`. If this condition is true:
        * `num` is incremented by 1.
        * The `continue` statement skips the rest of the loop iteration, causing the loop to proceed to the next iteration.
        * The `println!` statement after the `continue` statement does not get executed, as the `continue` statement transfers control to the beginning of the loop immediately.
    * If `num` is even, it reaches the `println!` statement, which prints the even number message, and then increments `num` by 1.

## Summary and Next Steps
Fantastic work! Today, you've delved into the essentials of loop control flow in Rust. You've learned how to use conditionals inside loops, control loop execution with `break` and `continue`, and how to combine these tools for complex loop behaviors.

Loop control flow is a powerful technique that allows you to write more efficient and controlled loops. Equipped with this knowledge, it's time to apply what you've learned in practice. Dive into the upcoming exercises to solidify your understanding and explore the true potential of loop control in Rust. Happy coding!
