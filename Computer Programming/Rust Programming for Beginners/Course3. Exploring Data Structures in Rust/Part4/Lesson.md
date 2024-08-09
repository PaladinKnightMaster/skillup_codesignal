# HashSets in Rust

## Introduction to HashSets in Rust
Hello! Today, we are going to explore **HashSets**, a powerful data structure in Rust that belongs to the `collections` module. *HashSets* provide us with an efficient way to store and manage unique items. As we delve into this lesson, you'll learn how to create, manipulate, and leverage the power of `HashSets` to solve common programming problems.

Rust's `HashSet` is an **unordered collection** that uses a hash function to manage its elements, ensuring that each element is unique. This makes `HashSets` incredibly useful for tasks where you need to check for membership, eliminate duplicates, or perform set operations. Let's get started!

## Creating a HashSet
In Rust, creating a `HashSet` involves using the `HashSet` struct from the `std::collections` module. You can either create an empty HashSet and then add elements to it or create a `Hashset` with default values.

Here's how to create a `HashSet`:

```rust
use std::collections::HashSet;

fn main() {
    // Create an empty HashSet
    let mut empty_set: HashSet<i32> = HashSet::new();
    let mut set = HashSet::from([1,2,3,4]);
}
```
* We first import the `HashSet` struct from the `std::collections` module.
* We then create an empty `HashSet` named `empty_set`, which can store `i32` values.
* We then create a `HashSet` named `set`, which already contains some values.

## Adding and Removing Elements
Once you have a `HashSet`, you can add or remove elements using the `insert` and `remove` methods.

```rust
use std::collections::HashSet;
fn main() {
    let mut hashset: HashSet<i32> = HashSet::new();

    // Add values to HashSet
    hashset.insert(1);
    hashset.insert(2);
    hashset.insert(3);

    // Remove values from HashSet
    hashset.remove(&2);
}
```
* The `insert` method adds a value to the `HashSet`. If the value already exists, it will not be added again.
* The `remove` method removes a value from the `HashSet`, if it exists. The value passed into `remove` must always be a reference.

## Checking Membership and Other Properties
One of the key advantages of using a `HashSet` is the ability to quickly check if an item exists within the set. You can also check the length of the `HashSet` and whether it's empty.

```rust
use std::collections::HashSet;
fn main() {
    let mut hashset: HashSet<i32> = HashSet::new();

    hashset.insert(1);
    hashset.insert(3);

    // Check membership in HashSet
    let has_one = hashset.contains(&1);
    let has_two = hashset.contains(&2);
    println!("HashSet has 1: {}, has 2: {}", has_one, has_two); // Prints: "HashSet has 1: true, has 2: false"

    // len() - get the number of elements
    let length = hashset.len();
    println!("Length of HashSet: {}", length); // Prints: "Length of HashSet: 2"

    // is_empty() - check if the set is empty
    let is_empty = hashset.is_empty();
    println!("Is HashSet empty: {}", is_empty); // Prints: "Is HashSet empty: false"
}
```
* The `contains` method checks whether a value exists in the `HashSet` and returns a boolean. `contains` always expects a reference as an input.
* The `len` method returns the number of elements in the `HashSet`.
* The `is_empty` method checks if the `HashSet` is empty.

## Understanding Ownership in HashSets
As with other data structures in Rust, managing ownership and borrowing is crucial when working with `HashSets`. Elements added to a `HashSet` must adhere to Rust's ownership rules.

```rust
use std::collections::HashSet;
fn main() {
    let s = String::from("Hello");
    let mut set = HashSet::from([s, String::from("World")]);
    println!("{}", s); // Causes an error
}
```
* We create a `String` called `s`
* We create a `HashSet` `set`, containing `s` and another `String` element.
* Adding `s` to the `Hashset` transfers ownership of "Hello" from `s` to `set`

## HashSets as Function Parameters
`HashSets` can be passed to functions as references or by value. Understanding how to pass `HashSets` to functions allows for more modular and reusable code. Unlike `tuples` and `arrays`, a `HashSet` is never copy type, even if the data held in the `HashSet` is copy type.

```rust
use std::collections::HashSet;
fn main() {
    let mut hashset = HashSet::new();
    hashset.insert(10);
    hashset.insert(20);

    display_hashset_reference(&hashset);
    println!("After display_hashset_reference: {:?}", hashset); // Prints: "After display_hashset_reference: {10, 20}"

    display_hashset_ownership(hashset); // Ownership moved to display_hashset_ownership
    println!("After display_hashset_ownership: {:?}", hashset); // Causes error
}

fn display_hashset_reference(set: &HashSet<i32>) {
    println!("In display_hashset_reference: {:?}", set); // Prints: "In display_hashset_reference: {10, 20}"
}

fn display_hashset_ownership(set: HashSet<i32>) {
    println!("In display_hashset_ownership: {:?}", set); // Prints: "In display_hashset_ownership: {10, 20}"
}
```
* `display_hashset_reference` takes a reference to a `HashSet`, so it doesn't take ownership, allowing the `HashSet` to remain available after the function call.
* `display_hashset_ownership` takes a `HashSet` by value. Even though the elements are a copyable data type (`i32`), a `HashSet` is not copy type, thus ownership is transferred.

## Summary and Next Steps
Great job! You've learned how to create and manipulate `HashSets` in Rust, explored how to add and remove elements, checked for membership and other properties, understood ownership within `HashSets`, and passed `HashSets` to functions.

`HashSets` are a versatile and efficient tool in Rust for managing collections of unique items. By applying these concepts, you can make your Rust programs more effective and sophisticated.

Now it's time to put these concepts into practice. Head over to the practice exercises to reinforce your understanding and get hands-on experience with `HashSets`. Happy coding!
