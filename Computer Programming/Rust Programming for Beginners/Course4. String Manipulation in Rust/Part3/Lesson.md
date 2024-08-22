# Ownership and Functions with Strings

## Ownership and Functions with Strings
Hello! Welcome to this lesson on **Ownership and Functions with Strings**. Now, we'll dive deeper into the heart of Rust’s memory safety model. Additionally, we'll explore how ownership plays a role when passing data to functions. Understanding these concepts is crucial as they form the foundation of Rust programming.

Let’s get started!

## Ownership Review
Rust's ownership model ensures memory safety without needing a garbage collector. When a variable in Rust goes out of scope, it is automatically cleaned up. This model has three main rules:

1. Each value in Rust has a single owner.
2. The value is dropped when the owner goes out of scope.
3. Ownership can be transferred to another variable.

Let's see an example:

```Rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = s1;
    println!("{}", s2); // Prints: Hello
    // println!("{}", s1); // Error: value borrowed here after move
}
```
In this example:

* A `String` is created and stored in `s1`.
* `Ownership` of `s1` is transferred to `s2`. This means `s1` can no longer be used.
* This transfer (or "move") ensures that there is always one owner of the data. Attempting to use `s1` after the move results in an error.

## Cloning Data
Sometimes, instead of transferring ownership, we want to create a deep copy of the data. This is done using the `clone` method:

```Rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = s1.clone();
    println!("{}", s1); // Prints: Hello
    println!("{}", s2); // Prints: Hello
}
```

In this code:

* The `clone` method creates a deep copy of `s1` and assigns it to `s2`.
* Both `s1` and `s2` can be used independently because they own separate data.

## Functions: Transferring Ownership
When we pass a variable to a function, we can transfer ownership to the function:

```Rust
fn main() {
    let s = String::from("Hello");
    takes_ownership(s); // s is moved here and can no longer be used
    // println!("{}", s); // Error: value borrowed here after move
}

fn takes_ownership(some_string: String) {
    println!("Taking ownership of: {}", some_string); // Prints: Taking ownership of: Hello
}
```

In this example:

* The function `takes_ownership` accepts a `String`.
* When `s` is passed to `takes_ownership`, its ownership is moved to the function.
* Trying to use `s` after the call results in an error because `s` no longer owns the data.

## Functions: Passing References
To avoid moving ownership, we can pass a reference to the function:

```Rust
fn main() {
    let s = String::from("Hello");
    let length = calc_length(&s);
    println!("The length of {} is {}", s, length); // Prints: The length of Hello is 5
}

fn calc_length(s: &String) -> usize {
    s.len()
}
```

In this code:

* The `calc_length` function takes a reference to a `String`, denoted by `&`.
* `calc_length` borrows the reference without taking ownership.
* The original `String` `s` can still be used after the function call.

## Functions: Passing Mutable References
Mutable references allow us to modify data without transferring ownership:

```Rust
fn main() {
    let mut s = String::from("Hello");
    change_string(&mut s);
    println!("{}", s); // Prints: Hello Rust Explorer
}

fn change_string(some_string: &mut String) {
    let rust = " Rust";
    let explorer = String::from(" Explorer");
    some_string.push_str(rust);
    some_string.push_str(&explorer);
}
```

In this example:

* `change_string` takes a mutable reference to a `String`.
* The function modifies the `String` by appending more text.
* The changes are reflected in the original `String` `s`.

## Summary and Next Steps
You're doing great! In today's lesson, we explored the fundamental concepts of how Rust handles ownership and references for strings. We covered transferring ownership, borrowing through references, and using mutable references to modify data without taking ownership. These concepts are at the core of Rust's memory safety guarantees.

Now it’s time to solidify your understanding with hands-on practice. Let's dive into the exercises and apply what we've learned today. By practicing, you'll become more confident in handling ownership and functions in Rust. Happy coding!
