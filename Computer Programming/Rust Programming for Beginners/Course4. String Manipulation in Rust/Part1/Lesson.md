# Introduction to String Data Types

## Introduction to String Data Types
Hello! Welcome to your first lesson on **String Data Types** in Rust. Strings are an essential part of any programming language because they enable you to store and manipulate text. In this lesson, we'll delve into the fundamental concepts of strings in Rust, covering literals, the `String` type, references, and string slices. By the end of this lesson, you'll have a solid understanding of how to work with strings efficiently and effectively in Rust.

## String Literals
String literals are the most basic form of strings in Rust. They are immutable and stored directly in the binary file that also holds the code. Here's a simple example:

```Rust
fn main() {
    let greeting = "Hello, world!";
    println!("{}", greeting); // Prints: Hello, world!
}
```
String literals are ideal for text that doesn't need to change, as they provide excellent performance and safety.

## String Type
The `String` type in Rust is more complex and flexible than string literals. It supports mutability and is allocated in memory when the program runs. To declare a String, use `String::from` followed by a string in quotes. Here's an example:

```Rust
fn main() {
    let hello = String::from("Hello");
    println!("{}", hello); // Prints: Hello
}
```
The `String` type is useful when you need a growable, mutable text representation.

## Strings, String Literals, and References
You might be asking, what is the difference between a `String` and string literal.

String literals are immutable and stored directly in the program's binary. They have a `static` lifetime, meaning they are valid for the entire duration of the program. Assigning a variable to a string literal creates an immutable reference with a static lifetime (`&'static str`). Therefore, string literals are not considered `Copy` types. Assigning a new variable to a string literal does not transfer ownership or make a copy of the data. Instead, the new variable is just a reference to where the string literal is stored in the code binary.

The `String` type is allocated in memory when the program runs. When you want to use a `String` without transfering ownership, use a reference instead by using `&`.

```Rust
fn main() {
    // String Literal
    let s1 = "Hello";
    let s2 = s1;
    println!("{}", s1); // Prints: Hello
    println!("{}", s2); // Prints: Hello


    // String type
    let s3 = String::from("Hello");
    let s4 = &s3; // s4 is a reference to s3
    println!("I am a reference to {}", s4); // Prints: I am a reference to Hello
    println!("I still own {}", s3); // Prints: I still own Hello

}
```
* `s1` is a string literal. The type of `s1` here is `&'static str`.

* `let s2 = s1;` copies the reference of the string literal. Because `s1` and `s2` are both `&'static str`, the assignment does not transfer ownership. In other words, both `s1` and `s2` point to the same string literal `"Hello"`.

* `s3` is a `String` type.

* `s4` is a reference to `s3`. The `&` symbol creates an immutable reference. The type of `s4` is `&String`.

References are powerful as they allow multiple parts of your code to read the same data without interfering with each other.

## String Slices
String slices are references to parts of a string. They allow you to work with substrings without making a copy. To create a string slice from a String or string literal, use the syntax `&var_name[start..end]`. Just like arrays, Strings are zero indexed, and the upper bound of the range is exclusive. Let's take a look:

```Rust
fn main() {
    // String Slices
    let s1 = String::from("Hello, world!");
    let hello = &s1[0..5];
    let world = &s1[7..12];
    println!("{} {}", hello, world); // Prints: Hello world

    let s2 = "Greetings Explorer!";
    let greeting = &s2[0..9];
    println!("{}", greeting); // Prints: Greetings
}
```
In this example:

* We created a string `s1` with the value `"Hello, world!"`.
* We used slices to get `hello` (the first 5 characters) and `world` (characters 7 to 12).
* For `s2`, we converted part of the string `"Greetings Explorer!"` into a slice by explicitly referencing the range `[0..9]`.
String slices are useful for efficiently accessing parts of a string without needing to copy data.

## Summary and Next Steps
Great job! In this lesson, you learned the basics of **String Data Types** in Rust. We covered string literals, the `String` type, references, and string slices. These foundational concepts are crucial for effective string manipulation and memory management in Rust.

Now it's time to apply what you've learned through hands-on practice. Dive into the upcoming exercises to reinforce and deepen your understanding. Remember, mastering strings is a key step in becoming proficient in Rust. Happy coding!
