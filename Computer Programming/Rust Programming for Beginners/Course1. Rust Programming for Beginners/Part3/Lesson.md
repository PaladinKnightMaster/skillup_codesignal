# Exploring Basic Data Types in Rust

## Introduction to Basic Data Types in Rust
In Rust, we have various data types that represent numbers, truth values, characters, and more. In this lesson, we will focus on `i32`, `f32`, `bool`, `char`, and `String`.

The `i32` data type represents 32-bit integers. The maximum value an `i32` can store is `2147483647`, or 2^31−1, and the minimum is `-2147483648`, or −2^31. Here's an example of `i32`:

```rust
let days_in_week: i32 = 7;
println!("{}", days_in_week);  // This will print: 7

let maximal_integer: i32 = 2147483647;
println!("{}", maximal_integer);  // This will print: 2147483647

let too_big_integer: i32 = 2147483648; // Oops! This will cause a compile error. The number is too large.
```
Next, we have the `f32` data type in Rust, used for floating-point numbers — that is, numbers with decimal points. It can contain up to 7 decimal digits:

```rust
let pi: f32 = 3.141592;
println!("{}", pi);  // This will print: 3.141592
```
Beyond numbers, we have the `bool` data type, which can hold either `true` or `false`. This type is commonly used in logical expressions and decision making:

```rust
let is_earth_round: bool = true;
println!("{}", is_earth_round);  // This will print: true

let is_earth_flat: bool = false;
println!("{}", is_earth_flat); // This will print: false
```
We also have the `char` data type. This type is used to represent single Unicode character. char variables must be surrounded by single quotes (`'`)

```rust
let first_letter_of_alphabet: char = 'A';
println!("{}", first_letter_of_alphabet); // This will print: A
```

## Exploring the String Data Type
Last but not least, we have `String`. `String` is used to store a sequence of `char` elements.
There are two types of Strings in Rust.

String literals are immutable and have a type of `&str`.

```rust
let welcome1 = "Hello World!"; // Creates a string literal
println!("{}", welcome1); // This will print: Hello World!
```
On the other hand, a `String` is by default immutable, but can be made mutable using the `mut` keyword.

```rust
let mut welcome2 = String::from("Welcome to Rust!"); // Creates a new String
println!("{}", welcome2); // This will print: Welcome to Rust!

welcome2 = String::from("Hello Rust World!"); // Changing the value of welcome2
println!("{}", welcome2); // This will print: Hello Rust World!
```

## Lesson Recap
Excellent! You've just explored the basic data types in Rust. You can now handle `i32` and `f32` for numerical operations, `bool` for decision-making, `char` to manage characters, and `String` to work with textual data.

That's a significant amount of new knowledge! Let's consolidate it through practice. The upcoming exercises are designed to help you apply these concepts. Brace yourself, and get ready to dive deeper into the world of Rust!
