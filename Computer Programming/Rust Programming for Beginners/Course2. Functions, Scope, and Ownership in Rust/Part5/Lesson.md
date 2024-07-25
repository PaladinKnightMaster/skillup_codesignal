# Variable References and Borrowing for Function

## Introduction to Borrowing and References in Rust
Welcome to this lesson on borrowing and references in Rust! Rust is known for its unique approach to memory management, which emphasizes safety and concurrency. One of the fundamental concepts in Rust is ownership, which governs how memory is allocated and deallocated. Understanding borrowing and references is crucial for writing efficient and safe Rust programs.

In this lesson, we will explore:

* **Borrowing Immutable References**: How to access variables without transferring ownership.
* **Borrowing Mutable References**: How to modify data through references without ownership changes.
* **Rules of Mutable References**: The constraints Rust imposes to ensure safe modifications.
* **Dangling References**: How Rust prevents pointers to non-existent objects and ensures memory safety.
By the end of this lesson, you will have a solid understanding of how to use borrowing and references in Rust to write more efficient and safer code. Let's dive in!

## Borrowing Immutable References
Rust defaults to transferring a variable's ownership when it's passed to a function. If we want to pass a variable to a function without transferring ownership, Rust uses the borrowing mechanism. To do this, the function signature declares its input as a reference (in this case `s: &String`). To call the function, pass a reference to a variable (in this case `&title`).

```rust
fn main() {
    let title = String::from("Rust Programming");  // Here, we declare a new String variable title
    borrow_reference(&title);  // We then create a reference to it and pass it to borrow_reference
    println!("I still own the book {}", title);  // Prints "I still own the book Rust Programming"
}

fn borrow_reference(s: &String) {  // borrow_reference takes a reference to a String
    println!("I am borrowing {}", s);  // Prints: I am borrowing "Rust Programming"
}  // Note, we only have a reference to s, so the owner doesn't change
```
Here, a reference to `title` is borrowed via `borrow_reference` without transferring ownership, making `title` accessible post function-call.

## Borrowing Mutable References
Rust also allows you to pass a mutable variable to a function without transfering ownership. Mutable references marked with `&mut` are modifiable pointers. Here's an example:

```rust
fn main() {
    let mut title = String::from("Rust");  // We have a mutable String variable
    edit(&mut title);  // We pass a mutable reference to edit
    println!("Edited title: {}", title);  // Once edit returns, prints "Edited title: Rust Programming"
}

fn edit(title: &mut String) {  // edit takes a mutable reference to a String
    title.push_str(" Programming");  // It can therefore modify the String
}  // After the function call, the borrowed reference is dropped.
```
The `edit` function appends the string " Programming" to `title`, showcasing mutable references' ability to manipulate data without transferring ownership.

We will cover how `push_str` works in a later lesson. For now, just know that it appends " Programming" to "Rust".

## Rules of Mutable References
Rust imposes two safe rules on mutable references:

* No limit on the number of immutable references.
* Only one mutable reference or multiple immutable references concurrently, not both.
These rules are necessary to prevent data races. A data race is when two parts of a program try to access a piece of data at the same time. For example, if there is a mutable and immutable reference to the same piece of memory, the immutable reference might read the data before or after it has been changed by the mutable reference.

Here's an example:

```rust
fn main() {
    let mut title = String::from("Rust");  // A mutable variable
    let ref1 = &title;  // An immutable reference
    let ref2 = &mut title;  // A mutable reference
    let ref3 = &title;  // Will raise a compilation warning- violates Rust's mutable reference rule
}
```
The immutable references, `ref1` and `ref3`, and the mutable one, `ref2`, cannot coexist, resulting in a compilation error.

## Dangling References
Dangling references pertain to a non-existent object. Rust, through compile-time checks, stops dangling references from arising. Take this example:

```rust
fn main() {
    let title = bad_reference();  // This will cause a compile error
}

fn bad_reference() -> &String {  // bad_reference attempts to return a reference to a local variable
    let title = String::from("Rust Programming");  // A local variable String is created
    &title  // We then return a reference pointing to it
}  // The function ends here, and title gets dropped, creating an unreachable (a.k.a. dangling) reference
```
In `bad_reference`, a reference to `title` is attempted to be returned. After the function is returned, Rust frees the memory that holds `title`, so the reference to `title` no longer contains the actual String. This results in a dangling reference, culminating in a compile error.

## Summary and Practice Exercises
Excellent! You've mastered borrowing and references in Rust. With practice exercises up next, you have the opportunity to apply your newfound knowledge. Challenge yourself to create your own scenarios involving borrowing and references, spot potential errors, and avoid them. Happy practicing!
