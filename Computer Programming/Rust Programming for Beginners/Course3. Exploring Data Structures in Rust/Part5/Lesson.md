# HashMaps in Rust

## Introduction to HashMaps in Rust
Hello! Today, we will focus on another powerful and versatile data structure in Rust's `std::collections` module — '**HashMaps**'. HashMaps are invaluable when you need to establish a mapping between a set of keys and a corresponding set of values.

HashMaps store key-value pairs, making it easy to quickly look up values based on their associated keys. This concept is similar to dictionaries in other programming languages like Python. Let's dive in and get familiar with HashMaps!

## Creating a HashMap
In Rust, creating a HashMap involves using the `HashMap` struct from the `std::collections` module. When creating a new `Hashmap`, add the data type of the keys and data type of the values inside `<>`. You can also create an empty HashMap without specifying types, and Rust will infer the types based on how you insert an element into the HashMap for the first time.

```rust
use std::collections::HashMap;

fn main() {
    // Create a new HashMap with explicit types
    let mut hashmap: HashMap<&str, i32> = HashMap::new();

    // Create a new HashMap with inferred types
    let mut hashmap_inferred = HashMap::new();
}
```
* We first import the `HashMap` struct from the `std::collections` module.
* We then create a mutable `HashMap` named `hashmap`, which can store `&str` keys and `i32` values.
* We create a `HashMap` named `hashmap_inferred` that will infer the data types when an element is added.

## Adding and Accessing Elements
Once you have a HashMap, you can add elements using the `insert` method. To access a value from a `Hashmap` use `.get` followed by the key name. The `.get` method only accepts a reference.

```rust
use std::collections::HashMap;

fn main() {
    let mut hashmap: HashMap<&str, i32> = HashMap::new();

    // Add elements
    hashmap.insert("one", 1);
    hashmap.insert("two", 2);
    hashmap.insert("three", 3);

    // Access a value
    let value = hashmap.get("two");
    println!("Value under 'two': {:?}", value); // Prints: Value under 'two': Some(2)

    println!("{:?}", hashmap); // Prints: {"one": 1, "two": 2, "three": 3}
}
```
* The `insert` method adds key-value pairs to the `HashMap`.
* The `get` method accesses the value associated with a key and returns an `Option` type.

## Modifying and Removing Elements
HashMaps provide methods to modify values and remove elements by their keys. To remove an element, use .remove by passing in a variable reference. To modify the value stored in a key, you can reinsert the key with its new value or use .get_mut. .get_mut accepts a reference to the key.

```rust
use std::collections::HashMap;

fn main() {
    let mut hashmap: HashMap<&str, i32> = HashMap::new();
    hashmap.insert("one", 5);
    hashmap.insert("two", 2);
    hashmap.insert("three", 4);

    // Remove an element
    hashmap.remove("two");

    // Reinserting an element
    hashmap.insert("one", 1);

    // Modify an element
    if let Some(entry) = hashmap.get_mut("three") {
        *entry = 3;
    }

    println!("Updated HashMap: {:?}", hashmap); // Prints: Updated HashMap: {"one": 1, "three": 3}
}
```
* The `remove` method deletes the key-value pair from the HashMap.
* Re-inserting the key "one" with the value 1, overrides the original value of the key.
* The `get_mut` method obtains a mutable reference to the value associated with the key, which allows us to modify it.

## Checking for Keys
Checking for the existence of keys in a HashMap can be easily done using the `contains_key` method. The value passed to `contains_key` must be a reference.

```rust
use std::collections::HashMap;

fn main() {
    let mut squares: HashMap<i32, i32> = HashMap::new();
    squares.insert(1, 1);
    squares.insert(2, 4);

    // Check if a key exists
    let has_one = squares.contains_key(&1); // Passing a reference
    let has_three = squares.contains_key(&3); // Passing a reference
    println!("HashMap contains key 1: {}", has_one); // Prints: HashMap contains key 1: true
    println!("HashMap contains key 3: {}", has_three); // Prints: HashMap contains key 3: false
}
```
* The `contains_key` method checks whether a specified key exists in the `HashMap`.

## Understanding Ownership in HashMaps
As with other data structures in Rust, managing ownership and borrowing is crucial when working with HashMaps. Elements added to a HashMap must adhere to Rust's ownership rules.

```rust
use std::collections::HashMap;

fn main() {
    // Create an empty HashMap
    let s = String::from("Hello");
    let mut map = HashMap::new();
    map.insert("key1", s); // Transfers ownership of "Hello"
    map.insert("key2", String::from("World"));
    println!("{}", s); // Causes an error
}
```
* We create a `String` called `s`.
* We create a `HashMap` `map`, and insert s with a key and another `String` element with a different key.
* Adding `s` to the `HashMap` transfers ownership of "Hello" from `s` to `map`.

## HashMaps as Function Parameters
HashMaps can be passed to functions as references or by value. Understanding how to pass HashMaps to functions allows for more modular and reusable code. Similar to vectors and Hashsets, a HashMap is never copy type, even if the data held in the HashMap is copy type.

```rust
use std::collections::HashMap;

fn main() {
    let mut hashmap = HashMap::new();
    hashmap.insert("key1", 10);
    hashmap.insert("key2", 20);

    display_hashmap_reference(&hashmap);
    println!("After display_hashmap_reference: {:?}", hashmap); // Prints: After display_hashmap_reference: {"key1": 10, "key2": 20}

    display_hashmap_copy(hashmap); // Ownership moved to display_hashmap_copy
    // println!("After display_hashmap_copy: {:?}", hashmap); // Causes error
}

fn display_hashmap_reference(map: &HashMap<&str, i32>) {
    println!("In display_hashmap_reference: {:?}", map); // Prints: In display_hashmap_reference: {"key1": 10, "key2": 20}
}

fn display_hashmap_copy(map: HashMap<&str, i32>) {
    println!("In display_hashmap_copy: {:?}", map); // Prints: In display_hashmap_copy: {"key1": 10, "key2": 20}
}
```
* `display_hashmap_reference` takes a reference to a `HashMap`, so it doesn't take ownership, allowing the `HashMap` to remain available after the function call.
* `display_hashmap_copy` takes a `HashMap` by value. Even though the elements are a copyable data type (`i32`), a `HashMap` is not copy type, thus ownership is transferred.

## Summary and Next Steps
Great job! You've learned about creating and managing HashMaps in Rust, including adding, accessing, modifying, and removing elements. You've also explored how to check for the presence of keys, understood ownership in HashMaps, and learned how to pass HashMaps to functions effectively.

HashMaps are an indispensable tool for organizing and managing key-value pairs. Applying these concepts will significantly enhance your ability to write efficient and robust Rust programs.

Now that you have a solid understanding of HashMaps, it's time to try some hands-on practice to reinforce your learning. Dive into the exercises ahead and start experimenting with HashMaps. Happy coding!
