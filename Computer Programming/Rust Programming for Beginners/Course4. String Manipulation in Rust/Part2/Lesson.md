# String Methods and Ownership

## Introduction to String Methods and Ownership
Hello! Welcome to this lesson on **String Methods and Ownership in Rust**. In the previous lesson, we explored string data types, including string literals, the `String` type, references, and string slices. Today, we'll delve deeper into string manipulation by learning various string methods while understanding Rust's unique ownership model. By the end of this lesson, you will have a strong grasp of how to manipulate strings and understand how ownership affects strings in Rust.

## String Concatenation: `push_str`
Rust provides multiple ways to concatenate strings. The `push_str` method adds a string slice to the end of another `String`. The variable passed into `push_str` must be a string literal/slice or a reference to a `String`. Don't forget to declare the `String` as mutable with `mut`.

```Rust
fn main() {
    let mut greeting = String::from("Hello");
    let rust = " Rust";
    greeting.push_str(rust);
    println!("{}", greeting); // Prints: Hello Rust

    let world = String::from(" World!");
    greeting.push_str(&world);
    println!("{}", greeting); // Prints: Hello Rust World!
}
```
In this example:

* We created a mutable `String` called `greeting`.
* We used the `push_str` method to append the **string literal**`" Rust"` to `greeting`.
* We created a `String` called `world` and concatenated it to `greeting`
`push_str` is useful when you want to add a string slice to an existing string.

## String Concatenation using `+`
Another way to concatenate strings is by using the `+` operator. This method is slightly different as it moves ownership of the original string. In addition, the second variable must be a reference.

```Rust
fn main() {
    let hello = String::from("Hello, ");
    let rust = "Rust ";
    let explorer = String::from("Explorer!");
    let greeting = hello + &rust + &explorer;
    println!("{}", greeting); // Prints: Hello, Rust Explorer!
    // println!("{}", hello); // Error: `hello` no longer owns "Hello, "
}
```
In this example:

* We created two `String` variables, `hello` and `explorer`.
* We create a string literal called `rust`
* We used the `+` operator to concatenate these strings into `greeting`.
* Note that after using the `+` operator, `hello` cannot be used anymore because its ownership has been moved to `greeting`.
Understanding how ownership works in string concatenation is crucial. The `+` operator consumes the left operand's ownership, making it unavailable for further use.

## Determining String Length
Rust offers the `len` method to determine the length of a string. This method counts the number of bytes in the string, not the number of characters. All ASCII characters are a single byte, so the number of bytes in a string of ASCII characters is equal to the number of characters in the string.

```Rust
fn main() {
    let s1 = String::from("Hello!");
    let s2 = "Hello, Explorer!";
    println!("The length of s1 is: {}", s1.len()); // Prints: The length of s1 is: 6
    println!("The length of s2 is: {}", s2.len()); // Prints: The length of s2 is: 16
}
```
Keep in mind that `len` returns the number of bytes. If your string contains multi-byte characters such as € or 汉, the length might be different from the number of characters.

## String Equality and Comparison
Rust supports comparing strings for equality using the `==` operator and inequality using the `!=` operator. These operators in Rust are designed to compare different types of strings, making it convenient to check if a string slice and a String contain the same value. Keep in mind that comparisons are case sensitive.

```Rust
fn main() {
    let word1 = "Hello";
    let word2 = "Hello";
    let word3 = "HELLO";
    let word4 = String::from("Hello");

    println!("{}", word1 == word2); // Prints: true
    println!("{}", word1 != word3); // Prints: true
    println!("{}", word1 == word4); // Prints: true
}
```
In this example:

* `word1 == word2` compares `word1` and `word2` using the `==` operator, which checks for equality. Since both have the value "Hello", it prints `true`.
* `word1 != word3` compares `word1` and `word3` using the `!=` operator, which checks for inequality. Since "Hello" is not equal to "HELLO" (comparison is case-sensitive), it prints `true`.
* `word1 == word4` compares `word1` (a string literal) with `word4` (a `String` type) using the `==` operator. Rust allows comparison between a string literal and a `String` type, and since both contain the value "Hello", it prints `true`

## String Comparisons
Besides equality, Rust also allows you to compare strings lexicographically. The string that comes first alphabetically is considered "less than" the one that follows. So, the string that would come earlier in the dictionary is "less than". However, it's important to note that capital letters are considered "less than" lowercase letters because of their order in the Unicode system.

```Rust
fn main() {
    let apple = String::from("apple");
    let banana = String::from("banana");

    if apple < banana {
        println!("'{}' comes before '{}'", apple, banana); // Prints: 'apple' comes before 'banana'
    } else if apple > banana {
        println!("'{}' comes after '{}'", apple, banana);
    } else {
        println!("'{}' and '{}' are equal", apple, banana);
    }
}
```
In this code, "apple" is less than "banana" because "apple" comes before "banana" in the dictionary.

## Summary and Next Steps
Great work! In this lesson, you learned how to concatenate strings using both `push_str` and the `+` operator, check the length of strings, and perform string comparisons for equality and order. Understanding these methods and Rust's ownership model is crucial for efficient and safe string manipulation.

Now it's time to put your knowledge into practice through hands-on exercises. By practicing, you'll get a deeper understanding of how to effectively use these string methods and ownership concepts in Rust. Happy coding!
