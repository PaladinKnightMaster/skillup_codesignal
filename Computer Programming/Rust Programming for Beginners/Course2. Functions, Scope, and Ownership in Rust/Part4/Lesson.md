# Variable Ownership and Functions in Rust

## Introduction to Variable Ownership
Welcome! Today, we will navigate the realm of **variable ownership** in Rust. This principle forms the crux of Rust's performance and safety. To visualize this, consider how you solely possess a book before handing it to a sibling. Rust variables adhere to a similar convention. We'll delve into `Copy` and `non-Copy` types, understand variable ownership within functions.

## Understanding Ownership in Rust
Variable ownership is the star feature of Rust that differentiates it from other languages. The three rules of ownership are:

1. Each value in Rust has a variable that’s called its owner. This means that there's always one and only one variable bound to any given piece of data. There can only be one owner at a time.

2. When you assign the value of one variable to another, the first variable will no longer hold that value if its type does not implement the `Copy` trait. We could say it's a bit like passing a baton in a relay race!

3. When the owner goes out of scope, the value will be dropped. This means once the variable that owns the data is done (like at the end of the function or a block of code), Rust automatically cleans up and frees the memory associated with that data. It's like when you're done reading a library book and return it, the book is no longer in your possession and can be borrowed by someone else.

## Dive into Copy Variables
Rust features the `Copy` trait for types of a fixed size that can be safely duplicated. When `Copy` types are assigned, the data is reproduced.

The following data types are `Copy` types:

integers and floating points (`i32`, `f64`, `u32`, etc.)
`char`
`bool`
Let's take a look at an example:

```rust
fn main() {
    let x = 5; // x, an integer, is a Copy type
    let y = x; // y receives a copy of x's value
    println!("x = {}, y = {}", x, y); // Here, x and y are both valid
}
```
In this code, `y` is assigned a duplicate of `x`’s value. Therefore, after the assignment operation, both `x` and `y` are valid. `x` and `y` each own their own value of 5.

## Understanding Non-Copy Variables
Rust also encompasses `non-Copy` types, such as `String`, `Vec<T>`, etc. For these types, the actual data isn't copied, but the reference is. The 2nd rule of ownership dictates that when you assign the value of one variable to another, the first variable will no longer hold that value if its type does not implement the `Copy` trait.

Consider Strings (non-Copy types) as an example:

```rust
fn main() {
    let s1 = String::from("hello"); // s1 is a String, hence it's a non-Copy data type
    let s2 = s1; // here, s1's ownership is transferred to s2
    println!("{}", s1); // This will result in a compile-time error
}
```
In this snippet, once `s1` is assigned to `s2`, `s2` becomes the owner of the value, and `s1` is invalidated.

## Ownership and Functions
Functions, in Rust, operate similarly. When a variable is passed to a function, its ownership is transferred.

## Taking Ownership
Here's an example:

```rust
fn main() {
    let s = String::from("hello");
    take_ownership(s); // s transfers ownership to `take_ownership`
    // After this point, s becomes invalid
}
fn take_ownership(some_string: String) {
    println!("{}", some_string);
}
```
Here's a step-by-step of what's happening:

1. `let s = String::from("hello");` - A new `String` object is created. The variable `s` becomes the owner of this `String`.

2. `take_ownership(s);` - The `s` string is passed to `take_ownership` function. When we pass `s` to this function, we are transferring the ownership of `s` to the function's parameter `some_string`. Once the function takes ownership, `s` no longer has access to the `String` object.

3. `some_string: String` - The function declares a parameter `some_string` which is of type `String`. This means it expects an owner to a `String` value.

4. When we call `println!("{}", some_string);`, it will print the value of the `String` to the console.

5. After the `take_ownership` function finishes executing, `some_string` goes out of scope, and Rust automatically frees up the memory `some_string` occupies.

One important feature to note is that `println!` is a macro, not a function. This means passing a variable into `println!` does not transfer ownership.

## Copying a Variable
```rust
fn main() {
    let x = 5;
    make_copy(x); // x is a Copy type. make_copy takes ownership of a new x value
    // Here, x is still valid as it's a Copy type
}
fn make_copy(some_integer: i32) {
    println!("{}", some_integer);
}
```
Here's a step-by-step of what's happening:

1. `let x = 5;` - This line creates an integer variable `x` and gives it a value of 5. Integers in Rust have the `Copy` trait, which means that when they are used as function arguments, what is actually passed is a copy of the data, not the original data itself.

2. `make_copy(x);` - The `make_copy` function is called with `x` as an argument. Because `x` is a type that implements the `Copy` trait, it is copied when passed to the function. This means the function gets its own version of `x`'s value to work with, and the original `x` in main is unaffected by whatever happens to this copy inside the function. After this line, `x` is still perfectly valid and accessible in the `main` function scope.

3. `some_integer: i32` - The function takes one parameter, `some_integer`, which is of type `i32` Like `x`, this is also a `Copy` type.

4. `println!("{}", some_integer);` - The function prints the value of `some_integer` to the console. If `make_copy` changed `some_integer` in any way (which it doesn't in this example), it would only change its copy, not `x` in `main`.

5. After `make_copy` finishes executing, `some_integer` goes out of scope, and Rust automatically frees up the memory `some_integer` occupies.

## Giving Ownership
```rust
fn main() {
    let s = give_ownership(); // s becomes owner of value returned by gives_ownership
    // s is valid
}
fn give_ownership() -> String {
    let s = String::from("Hello World!");
    s
}
```
1. `let s = give_ownership();` - In the `main` function, a new variable `s` is declared. It is set to the value returned by `give_ownership()`. This means that s becomes the owner of the `String` value that `give_ownership()` returns.
2. `fn give_ownership() -> String` - This function signature tells us that `give_ownership` will return a `String` value when it's called.
3. `let s = String::from("Hello World!");` - Inside the function, we declare a new `String` variable s and initialize it with the value `"Hello World!"`. The `String` variable is owned by `s` inside the `give_ownership` function
4. `s` - The function returns the value of `s`, giving ownership of the `String` to `s` in the `main` function.
5. After the call to `give_ownership()`, `s` is a valid `String` in the main function's scope. You can use `s` just like any other valid `String` in Rust.

## Taking and Giving Ownership
```rust
fn main() {
    let s = String::from("Hello World!");
    let s = take_and_give(s);
}

fn take_and_give(some_string: String) {
   some_string
}
```
This Rust code demonstrates ownership transfer to and from a function. Here is a breakdown of what happens:

1. `let s = String::from("Hello World!");` In the `main` function, we declare a variable `s` and initialize it with a `String` containing the text `"Hello World!"`. The `String` is owned by `s` in the `main` function
2. `let s = take_and_give(s);` - Calling `take_and_give` transfers ownership of the value in `s` to this new function. `take_and_give` then returns the `String` and `s` takes ownership of the `String` once again.

Understanding these concepts will equip you to write efficient and safe code in Rust. Practice this knowledge through hands-on exercises for effective learning. The upcoming session will present problems for you to tackle, further enhancing your understanding of Rust's variable ownership rules. Happy coding!
