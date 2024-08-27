# String Conversions and Methods

## String Conversions and Methods
Hello! Welcome to this lesson on **String Conversions and Methods in Rust**. In the previous lesson, we delved into the fundamentals of Rust string methods and ownership, exploring how to handle strings efficiently. Today, we will build on that knowledge by learning how to convert data to and from strings, and how to manipulate strings using various methods. By the end of this lesson, you will have a solid understanding of these essential string operations in Rust.

Let's get started!

## Introduction
Rust provides robust tools for string manipulation, making it easier to convert different data types to and from strings and apply various string methods, such as changing case, trimming spaces, and handling escape characters.

Let's see how Rust makes string conversions and manipulations straightforward and efficient.

## String Conversions
Converting data to and from strings is a common necessity in programming, and Rust offers several utilities to perform these conversions seamlessly.

Here’s an example to demonstrate how to convert to and from string literals, String`, and numbers.

```Rust
fn main() {
    let data = "initial contents";
    let s1 = data.to_string();
    println!("String: {}", s1);  // Prints: "String: initial contents"

    let s2 = String::from("Hello, world!");
    let s2_literal = s2.as_str();
    println!("{}", s2_literal);  // Prints: "Hello, world!"

    let num = 42;
    let num_str = num.to_string();
    println!("String: {}", num_str);  // Prints: "String: 42"

    let parsed_num: i32 = num_str.parse().unwrap();
    println!("Number: {}", parsed_num);  // Prints: "Number: 42"
}
```
In this snippet:

* `data.to_string()` converts a string literal to a `String` type.
* `s2.as_str()` converts a `String` to a string literal
* `num.to_string()` converts an integer to a string.
* `num_str.parse()` converts the string back into an integer. The method `unwrap` is used here to handle the potential error elegantly.

## Changing Case
Changing the case of strings is a common requirement in text processing. Rust provides methods like to_lowercase and to_uppercase for this purpose. Using these methods does not transfer ownership.

Let's look at an example:

```Rust
fn main() {
    let s = String::from("Hello, WORLD!");
    let lower_s = s.to_lowercase();
    println!("{}", lower_s);  // Prints: "hello, world!"

    let upper_s = lower_s.to_uppercase();
    println!("{}", upper_s);  // Prints: "HELLO, WORLD!"

    println!("s still has ownership of {}", s); // Prints: "s still has ownership of Hello, WORLD!"
}
```
In this code:

* `to_lowercase` converts all characters in the string to lowercase.
* `to_uppercase` converts all characters to uppercase.
* Printing the value of `s` works because ownership has not been transfered

## Trimming Whitespace
Often, input strings might have extra whitespace that needs to be removed. Rust’s `trim` method is handy for these situations. Similar to the previous methods, `trim` does not transfer ownership.

Here's an example:

```Rust
fn main() {
    let s = String::from("   Hello, world!   ");
    let trimmed_s = s.trim();
    println!("'{}'", trimmed_s);  // Prints: "'Hello, world!'"
}
```
In this snippet, the `trim` method removes leading and trailing whitespace from the string `s`.

## Handling Escape Characters
Escape characters are used to represent special characters within strings. For example, to instruct Rust to treat quotes as part of the string instead of the closing quote, just prepend `\` before the quotes. Rust provides functionality to handle these characters efficiently. To include a `\` as part of the string, prepend `\` with another `\`. To create a new line, use `\n`.

Consider the following example:

```Rust
fn main() {
    let s = "Cosmo says \"hi\"";
    println!("{}", s);  // Prints: Cosmo says "hi"

    let s_escaped = "Hello\\world!";
    println!("{}", s_escaped);  // Prints: "Hello\world!"

    let s_new_line = "Hello\nWorld!";
    println!("{}", s_new_line); // Prints: Hello
                               //  World!
}
```
In this code:

* The `\"hi\"` allows quotes to be part of the string
* The `\\` escape character is used to include a backslash in the string.
* The `\n` escape character is used to insert a newline in the string

## Summary
Fantastic work! Today, you've learned how to:

* Convert different data types to and from strings using `to_string`, `as_str`, `parse`, and `unwrap`.
* Manipulate the case of strings using `to_lowercase` and `to_uppercase`.
* Trim excess whitespace from strings using the `trim` method.
* Handle special escape characters within strings.
These skills are crucial for text processing, ensuring data is formatted and manipulated correctly. Now that you have these tools at your disposal, it’s time to practice and reinforce your learning.

In the next set of exercises, you will apply what you’ve learned through hands-on coding challenges designed to test and strengthen your understanding. Dive into the practice section and enjoy honing your new skills. Happy coding!
