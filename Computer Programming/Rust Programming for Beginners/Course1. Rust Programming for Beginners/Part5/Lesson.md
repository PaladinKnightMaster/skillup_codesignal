# Understanding Rust: Arithmetic and Logical Operations

## Lesson Overview
Greetings, coder! Today, we're delving into **Rust** to master arithmetic and logical operations. This foundation is fundamental for data manipulation and decision-making within the Rust environment.

## Rust Arithmetic Operations Revealed
Rust's primitive data types include `i32` for whole numbers, `f32` for decimal numbers, `bool` for true/false values, and `char` for single characters.

You can perform arithmetic operations — such as addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (which represents the remainder of the division, `%`) — on numerical types. Here's an example:

```rust
let a: i32 = 10;
let b: i32 = 2;
println!("{}", a + b); // Outputs: 12
println!("{}", a - b); // Outputs: 8
println!("{}", a * b); // Outputs: 20
println!("{}", a / b); // Outputs: 5
println!("{}", a % b); // Outputs: 0
```

## Augmented Assignment Operators Uncovered
In many programming languages, including Rust, there's a set of augmented assignment operators which are used as a shorthand method for modifying the value of our variables. These operators are `+=`, `-=`, `*=`, `\=`, and `%=`. The `+=` operator adds the value on its right to the variable on its left and assigns the result to the variable. The other operators work similarly. Let's take a look.

```rust
let mut number: i32 = 10;

number += 2;   // same as number = number + 2;
println!("{}", number); // Outputs: 12

number -= 4;   // same as number = number - 4;
println!("{}", number); // Outputs: 8

number *= 3;   // same as number = number * 3;
println!("{}", number); // Outputs: 24

number /= 12; // same as number = number / 12;
println!("{}", number); // Outputs: 2

number %= 2 // same as number = number % 2;
println!("{}", number); // Outputs: 0
```

## Logical Operations Demystified
Logical operators — `&&` (AND), `||` (OR), `!` (NOT) — evaluate to `bool` values — `true` or `false` within the Rust environment.

`&&` outputs `true` only if both boolean values are `true`, whereas `||` returns `true` if either value is `true`. `!` inverses the boolean value.

Below is an example of their application to two `bool` values:

```rust
println!("{}", true && true); // true
println!("{}", true && false); // false
println!("{}", false && true); // false
println!("{}", false && false); // false

println!("{}", true || true); // true
println!("{}", true || false); // true
println!("{}", false || true); // true
println!("{}", false || false); // false

println!("{}", !true); // false
println!("{}", !false); // true
```
Rust's logical operations are most commonly applied to variables. Here's a brief example:

```rust
let speed: i32 = 60;
let min_speed: i32 = 30;
let max_speed: i32 = 70;
// Check if the speed is within the expected range.
println!("{}", speed > min_speed && speed < max_speed); // Prints: true
```

## Lesson Summary
Fantastic work! Today, we've learned about Rust's arithmetic operations and used logical operators to make complex decisions. Practice exercises are coming up to help solidify these critical concepts in Rust. Let the coding begin!
