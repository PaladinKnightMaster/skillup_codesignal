# Understanding Rust Comparison Operators: Navigating Data Conditions in Code

## Lesson Introduction and Plan
Hey there! Today, we're delving into the essential world of **Rust comparison operators**. These operators play a crucial role in controlling the flow of code by comparing values.

Our goal is to understand comparison operators and their applications in Rust programs. We'll explore several Rust comparison operators and enhance your understanding through realistic examples.

## Exploring Rust Comparison Operators
Imagine you are navigating a submarine underwater. Here, routes are determined by evaluating conditions such as the distances to underwater artifacts. These judgment calls are similar to comparisons, mirroring scenarios in programming. In Rust, we use comparison operators to make such determinations.

Rust features six comparison operators: equal to (`==`), not equal to (`!=`), greater than (`>`), less than (`<`), greater than or equal to (`>=`), and less than or equal to (`<=`). Each of these produces either `true` or `false`, commonly referred to as boolean values.

For example, consider the following comparison of a submarine's speed with that of a whale:

```rust
let submarine_speed = 50;  // speed in km/h
let whale_speed = 20;   // speed in km/h
let submarine_faster: bool = submarine_speed > whale_speed; // evaluates to 'true'
println!("Is the submarine faster than a whale? {}", submarine_faster);
// Prints: Is the submarine faster than a whale? true
```
In the code above, we compare `submarine_speed` and `whale_speed` using the `>` operator. The outcome, `true`, indicates that the `submarine_speed` is indeed greater than the `whale_speed`.

## Exploring == and != Operators
Now, let's delve into the equal to (`==`) and not equal to (`!=`) operators. These operators are crucial when there is a need to compare values, such as when comparing the current oxygen level to the required level:

```rust
let current_oxygen_level = 65;  // current oxygen level in %
let required_oxygen_level = 80;  // required oxygen level in %

let is_enough_oxygen = current_oxygen_level == required_oxygen_level;  // evaluates to 'false'
let is_oxygen_low = current_oxygen_level != required_oxygen_level;  // evaluates to 'true'
```
The `==` operator checks whether `current_oxygen_level` equals `required_oxygen_level`, which results in `false`. In contrast, the `!=` operator asserts the inequality, returning `true`.

## Exploring <, >, <=, and >= Operators
Next, we will examine the less than (`<`), greater than (`>`), less than or equal to (`<=`), and greater than or equal to (`>=`) operators. These operators are primarily used to compare numeric data, such as when you're studying two underwater sites and want to identify which one is nearer:

```rust
let distance_to_site_a = 200; // distance in meters
let distance_to_site_b = 150; // distance in meters

let is_a_closer = distance_to_site_a < distance_to_site_b;  // evaluates to 'false'
let is_b_closer_or_same = distance_to_site_a >= distance_to_site_b;  // evaluates to 'true'
```
In the example above, we contrasted the distances to two underwater sites. The submarine isn't closer to site A, so `is_a_closer` yields `false`. On the other hand, the submarine is as close or closer to site B, hence `is_b_closer_or_same` returns `true`.

## Lesson Summary
Excellent work! We've explored the comparison operators in Rust and their real-world applications. With this newfound understanding, you can handle decisions and effectively control the flow of your Rust programs. In the next step, we'll delve deeper with some hands-on practice exercises. Prepare to dive in!
