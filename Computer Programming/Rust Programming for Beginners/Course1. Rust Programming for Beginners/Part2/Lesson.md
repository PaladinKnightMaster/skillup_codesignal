# Understanding Rust Variables and Constants

## Topic Overview and Goal Setting

Welcome back to your Rust journey! Let's immerse ourselves in the exploration of **Rust Variables** — our key constructs. Similar to a cornerstone, variables provide structure to our code, enriching it with data and information.

A variable in coding is like a bookmark — a dedicated place in memory where a value is stored. This session aims to familiarize you with the concept of Rust variables, their declaration, naming rules, value assignments, and the concept of immutable variables.

## What are Rust Variables?
Think of Rust variables as sticky notes imprinted with data. The short example below explains how to create a variable in Rust:

```rust
let number_of_stars: i32; // Declare a variable, similar to making a new sticky note
number_of_stars = 88; // Write a value on it
println!("{}", number_of_stars); // Prints out: 88
```
Let's break down each line of the code.

1. `let number_of_stars: i32;`
This line is similar to creating a new sticky note and labeling it `number_of_stars`. The `let` keyword is used to declare a variable named `number_of_stars` with the data type `i32` (a signed 32-bit integer). For now, don't worry about the `i32` part; we'll cover data types in a subsequent lesson.

2. `number_of_stars = 88;`
This line assigns the value 88 to the `number_of_stars` variable. It is like writing the information (88 in this case) on our `number_of_stars` sticky note.

3. `println!("{}", number_of_stars);`
This line prints the value of the `number_of_stars` variable to the console. The `{}` is a placeholder that gets replaced by the value of `number_of_stars` when the program is run.

Rust also allows you to declare and assign a variable value simultaneously. Here's an example:

```rust
let number_of_stars = 88; // Create and assign a value to a variable at the same time
println!("{}", number_of_stars); // Prints out: 88
```
Notice how we did not have to explicitly declare `number_of_stars` as `i32`. Rust has a feature called type inference where Rust can automatically infer the type of `number_of_stars`. The default integer type in Rust is `i32`.

## Assignment Operations in Rust
In Rust, variables are divided into two categories: mutable and immutable. By default, all variables in Rust are immutable, which means once a value is assigned to them, it cannot be changed. If you attempt to alter the value of an immutable variable, the Rust compiler will throw an error.

However, Rust gives you the ability to explicitly make a variable mutable using the `mut` keyword. A mutable variable is one whose value can be changed after it has been initially declared and assigned.

Rust allows us to change a variable's value using the `=` operator, which works much like writing a new note on a previously used sticky note.

```rust
let mut constellations = 88; // We make a new sticky note and write a value on it
println!("{}", constellations); // Prints out: 88

constellations = 77; // We change the note's details
println!("{}", constellations); // Prints out: 77

let stars = constellations; // stars has a value of 77
// stars = 88; This would throw an error. You can't change the value of immutable variables
```

## Rust Naming Convention
Choosing a name for a Rust variable follows certain rules and conventions similar to effectively labeling a sticky note. These ensure that our code remains clear and free from errors.

The variable name should start with a lowercase letter and adhere to the `snake_case` convention: if the variable's name contains multiple words, use lowercase letters and separate each word with an underscore `_`. For instance, `age`, `weight`, `my_age`, `first_day_of_week`.

Special characters and digits are not allowed at the start of variable names.

```rust
// Correct way to declare a variable
let my_age = 20;
let my_weight = 72;
let district_9_population = 10000;

// Incorrect ways to declare a variable
// let 0zero = 0;
// let ?question_mark = 1;
```

## Rust Constants
While the previous section explains how to change a variable's value, Rust also supports defining constants — variables that cannot alter their value once assigned. We use the `const` keyword to declare a constant. `const` variables must explicitly state their data type upon declaration and cannot use the `mut` keyword. Note that the `let` keyword is not used when declaring constants. For constants, the naming convention is to use uppercase letters with words separated by an underscore `_`.

Declaring a value as `const` might be prudent if you are certain it won't change. Doing so improves readability, ensures safety (by avoiding unintentional changes), and can sometimes enhance performance.

```rust
const DAYS_IN_WEEK: i32 = 7; // A constant is declared,

println!("{}", DAYS_IN_WEEK); // Prints out: 7

// DAYS_IN_WEEK = 6; This will cause an issue since "DAYS_IN_WEEK" is immutable
```
In the example above, `DAYS_IN_WEEK` is a constant that prohibits any value changes after assignment.

## Lesson Recap and Next Steps
Well done! You're now familiar with the basics of variables and constants in Rust. In upcoming lessons, we'll apply these concepts in real-world scenarios. Practice is the only way to convert knowledge into skills; so let's engage in tasks and proceed at a steady pace on our **Rust Road to Mastery!**
