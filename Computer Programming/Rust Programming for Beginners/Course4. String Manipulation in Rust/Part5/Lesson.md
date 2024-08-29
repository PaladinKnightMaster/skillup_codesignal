# Advanced String Methods in Rust

## Introduction
Hello! In this lesson, we will dive into some **advanced string manipulation methods** in Rust. Building on the previous knowledge of basic string operations, you will learn how to find substrings, check for the presence of a substring within another string, replace parts of a string, and transform strings using splitting and joining techniques.

Let's get started!

## Finding a Substring
In Rust, you can use the string method `.find()` to locate the position of a substring within another string. This can be particularly useful when you need to determine whether a certain pattern exists in your text. The `.find()` method in Rust returns an `Option<usize>`, and it can yield two types of values:

1. `Some(index)`
    * This variant signifies that the substring was found within the string.
    * `index` is the starting position (0-based index) of the first occurrence of the substring within the string.
2. `None`
    * This variant indicates that the substring was not found within the string.

Here’s an example:
```Rust
fn main() {
    let s = String::from("Hello, world!");
    match s.find("world") {
        Some(index) => println!("Found 'world' at index: {}", index),
        None => println!("'world' not found")
    }
    // Prints: "Found 'world' at index: 7"

    match s.find("Rust") {
        Some(index) => println!("Found 'Rust' at index: {}", index),
        None => println!("'Rust' not found")
    }
    // Prints: 'Rust' not found
}
```
In this code:
* `s.find()` will return either `Some(index)` or `None`
* If the value is `Some(index)`, execute the first arm of the match statement
* If the value is `None`, execute the second arm of the match statement.

## Checking for Substring Presence
Another common task is to check if a substring exists within a string using the `.contains()` method. It returns a boolean value, which you can use to conditionally execute parts of your code.

Consider this example:

```Rust
fn main() {
    let s = String::from("Hello, world!");
    if s.contains("world") {
        println!("The string contains 'world'");  // Prints: "The string contains 'world'"
    } else {
        println!("The string does not contain 'world'");
    }
}
```

In this snippet:

* We create a `String` variable `s`.
* We use the `.contains("world")` method, which returns `true` if the substring is found, and `false` otherwise.
* With an `if` statement, we print a corresponding message based on whether the substring is present.

## Replacing Substrings
Replacing parts of a string is another essential string operation. Rust provides the `.replace()` method to substitute occurrences of a substring with another value.

Here’s how you can do it:

```Rust
fn main() {
    let s = String::from("Hello, world!");
    let new_s = s.replace("world", "Rust");
    println!("{}", new_s);  // Prints: "Hello, Rust!"
}
```

In this example:
* We create a `String` variable `s`.
* The `.replace("world", "Rust")` method creates a new string, `new_s`, where all instances of "world" are replaced with "Rust".

## Splitting and Joining Strings
Splitting and joining strings are powerful techniques for transforming textual data. The `.split()` method divides a string into a vector of substrings based on a delimiter, and join can be used to combine a vector of strings into a single string.

Here’s an example:

```Rust
fn main() {
    let s = String::from("apple, banana, pear");
    let fruits: Vec<&str> = s.split(',').collect();
    println!("{:?}", fruits);  // Prints: ["apple", " banana", " pear"]

    let joined = fruits.join(" & ");
    println!("{}", joined);  // Prints: "apple &  banana &  pear"
}
```

In this code:

* We create a `String` variable `s`.
* The `.split(',')` method splits the string at each comma, returning an iterator. The `.collect()` method collects the results into a vector of string slices (`Vec<&str>`).
* We print the resulting vector to see the individual substrings.
* The `join(" & ")` method combines the vector elements into a single string with " & " as the separator.

## Summary
Great job! In this lesson, you have learned several advanced string manipulation methods in Rust:

* How to find the position of a substring using `.find()`.
* How to check for the presence of a substring using `.contains()`.
* How to replace parts of a string with the `.replace()` method.
* How to split a string into substrings and join them back together using `.split()` and `join()`.

These techniques are vital for efficient text processing and are widely used in various programming tasks. Now that you have these advanced tools, it's time to reinforce your understanding with hands-on practice.

Jump into the practice section and apply these new skills to solve real-world string manipulation challenges. Enjoy the coding exercises!
