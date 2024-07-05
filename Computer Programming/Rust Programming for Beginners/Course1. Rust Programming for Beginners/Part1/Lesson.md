# Rust Essentials: Writing Your First Program

## Introduction
Greetings, future coders! Are you ready to dive into the fascinating journey of Rust? Today, we're going to explore the fundamentals of **Rust**, focusing on syntax and comments. By the end of this lesson, you'll have written your first simple Rust program.

Rust, a fast and memory-efficient language, serves as the launchpad of your coding journey. It is primarily used for system programming, but also finds applications elsewhere.

Much like English has grammar rules, Rust follows a syntax. Let's explore this exciting world together!

## Rust Syntax Basics
In Rust, just like in many other languages, we use statements to execute actions. Each statement ends with a semicolon (`;`). Rust uses curly braces (`{ }`) to delineate a block of code.

Consider this straightforward Rust syntax example:

```rust
fn main() {
    println!("Hello, Rust World!");
}
```
In this case, we've declared the `main` function, which acts as the starting point of the program, and added a statement that prints "Hello, Rust World!" Don't worry if you don't understand every line of this code just yet. We'll break down each component step by step in this lesson.

## Construct Your First Rust Program
Let's dive deeper into writing your first Rust program! Below is a straightforward Rust program that we have examined:

```rust
fn main() {
    println!("Hello, Rust World!");
}
```
Now, we'll analyze each piece of the program:
* `fn main() { }`: This function, called `main`, represents the start of our program. When you run a Rust program, this is the function that initiates execution. Don't worry if concepts like `fn` still seem unfamiliar to you. Just remember that the main function should always carry this name and be represented in this way.
* `println!("Hello, Rust World!");`: This statement prints "Hello, Rust World!" to the console.

## Meet Rust Comments
Coding often involves leaving notes for ourselves as reminders or explanations. These are known as comments. They do not affect the execution of the code and are used for clarification or to leave helpful pointers for other coders (or even for ourselves) working on the code. In Rust, we use `//` for single-line comments and `/* */` for multi-line comments.

Look at how we use comments below:

```rust
fn main() {
   // This is a single-line comment.
   /*
     This is a multi-line comment.
     It spans multiple lines.
     I can use multi-line comments
     for more extensive notes that don't fit within a single line.
   */
    println!("Hello, Rust World!"); // This line prints "Hello, Rust World!"
}
```
In this example, the text following `//` and the text between `/* */` won't influence the running of the program. We use the `println!` macro call to print the given text to the console.

## Lesson Summary and Practice
Bravo! You've stepped into the world of **Rust programming** and learned about its syntax, semicolons, and comments. Engaging exercises are coming next to reinforce your fresh knowledge and aid you in writing your first Rust code. Remember that stumbling blocks often serve as stepping stones to victory. Happy coding!
