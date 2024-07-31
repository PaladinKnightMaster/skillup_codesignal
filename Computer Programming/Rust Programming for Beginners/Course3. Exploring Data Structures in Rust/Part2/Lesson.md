# Arrays in Rust

## Introduction to Arrays in Rust
Welcome back! Today, we're diving into arrays in Rust. In our last lesson, we explored tuples, a way to group different types of data into a single compound type. Arrays are somewhat similar but come with their own unique set of characteristics and benefits.

An array in Rust is a collection of elements of the same type, stored in a contiguous block of memory. This can be especially useful when you have a fixed-size collection of elements that you need to manage efficiently. Unlike tuples, every element of an array must be the same data type.

Imagine a scenario where you need to store the temperatures recorded for each day of the week. An array can be an ideal candidate for this. Let's explore arrays in Rust in more detail!

## Creating Arrays in Rust
There are two ways to declare arrays in Rust. To declare an array with explicit data types, specify the data type followed by a semicolon and the array's size within square brackets. The values for each element in the array must match this explicitly declared data type. Rust can also infer the data types, eliminating the need to explicitly declare data types.

Here’s how you can create arrays with and without explicit data types:

```rust
fn main() {
    // Creating Array with Data Type
    let array_with_type: [i32; 4] = [1, 2, 3, 4];
    // Creating Array without Data Type (type inference)
    let array_without_type = [5, 6, 7, 8];

    println!("Array with type: {:?}", array_with_type); // Prints: [1, 2, 3, 4]
    println!("Array without type: {:?}", array_without_type); // Prints: [5, 6, 7, 8]
}
```
In the code above:

* `array_with_type` is an array explicitly typed as having four elements, all of type `i32`.
* `array_without_type` relies on type inference to determine the elements’ type.
Recall, to print the values of an array, we use `{:?}` in the `println!` statement.

## Accessing Elements of an Array
In Rust, you can access the elements of an array using index notation. Arrays are zero-indexed, meaning the first element of the array is at index 0. To access the value of an array, use the array name followed by square brackets containing the index number. Here’s how you can do it:

```rust
fn main() {
    let array = [1, 2, 3, 4];
    println!("First element: {}", array[0]); // Prints: First element: 1
    println!("Fourth element: {}", array[3]); // Prints: Fourth element: 4
}
```
In this example:

* We accessed the first element using `array[0]`.
* We accessed the fourth element using `array[3]`.

## Mutable Arrays
In Rust, arrays are by default immutable. Using the `mut` keyword, we can modify the elements of an array. Keep in mind the data type of new values must be the same as the original value.

```rust
fn main() {
    let mut mutable_array = [9, 10, 11, 12];
    mutable_array[2] = 42; // Modifying the third element
    println!("Mutable array: {:?}", mutable_array); // Prints: Mutable array: [9, 10, 42, 12]
}
```
In this code:

* We created a mutable array `mutable_array`.
* We modified the third element to `42` using `mutable_array[2] = 42`.

## Copy and Non-copy Data in Arrays
Understanding whether data in arrays can be copied or moved is crucial for effective Rust programming. If all the elements in an array implement the Copy trait, the array itself will also implement the Copy trait. Assigning an element of a non-copy Array to a variable is not allowed. Instead, you must use a reference. Here's an example:

```rust
fn main() {
    let array_with_copy = [1, 2, 3, 4]; // Array with Copy type data

    // Copy data
    let copy_array = array_with_copy; // Elements are copied
    println!("array_with_copy: {:?}", array_with_copy); // Prints: array_with_copy: [1, 2, 3, 4]
    println!("copy_array: {:?}", copy_array); // Prints: copy_array: [1, 2, 3, 4]

    // Non-copy data
    let array_with_non_copy = [String::from("Hello"), String::from("World")]; // Array with data that cannot be copied
    let first_elem = &array_with_non_copy[0]; // Creates a reference
    println!("Accessed element by reference: {}", first_elem); // Prints: Accessed element by reference: Hello
    let invalid_copy = array_with_non_copy[0]; // Causes an error. You cannot move ownership of array elements

    // Ownership Transfer
    let non_copy_array = array_with_non_copy; // Ownership moves
    println!("{:?}", array_with_non_copy); // Causes an error
}
```
**Array with Copy Data**

* `array_with_copy` is an array of integers, and since `i32` implements the `Copy` trait, this entire array also implements the `Copy` trait.
* When `array_with_copy` is assigned to `copy_array`, each element is copied.

**Array with Non-Copy Data**

* The `array_with_non_copy` array includes `String` elements, which do not implement the `Copy` trait and thus transfer ownership when assigned.
* The line `&array_with_non_copy[0]` creates a reference to the first element of the array
* The line `array_with_non_copy[0]` causes an error because you cannot move ownership of elements in a non-Copy array

**Ownership Transfer**

* Ownership of `array_with_non_copy` is moved to `non_copy_array`, making `array_with_non_copy` invalid.

## Array Slices
Slices in Rust provide a way to reference a contiguous sequence of elements from an array. They are particularly useful for working with subsections of an array without needing to create a new array. To create an array slice, use a reference to the array followed the starting index up to, but not including the ending index. To create a full slice of an array, simply place `..` inside the brackets. Here’s how you can create and use slices:

```rust
fn main() {
    let array = [1, 2, 3, 4];
    let slice = &array[1..3]; // Slicing the array
    println!("Slice from array: {:?}", slice); // Prints: Slice from array: [2, 3]

    let full_slice = &array[..]; // Full slice of the array
    println!("Full slice of array: {:?}", full_slice); // Prints: Full slice of array: [1, 2, 3, 4]

    // Modifying slice elements through a mutable slice
    let mut array_for_slice = [10, 20, 30, 40];
    {
        let slice = &mut array_for_slice[1..3];
        slice[0] = 25; // Modifying the slice
        slice[1] = 35; // Modifying the slice
    }
    println!("Array after modifying slice: {:?}", array_for_slice); // Prints: Array after modifying slice: [10, 25, 35, 40]
}
```
In this code:

* We created a slice that references elements two and three of `array`.
* We created a `full_slice` that references the entire array.
* We modified a section of `array_for_slice` through a mutable slice.

## Arrays as Function Parameters
Arrays can be passed to functions in Rust, making it possible to work with fixed-size collections efficiently. Similar to tuples, arrays can be passed by reference or by value, depending on whether you want to transfer ownership or simply allow the function to read the data. The rules for passing arrays as function parameters are:

* Passing a reference to an array does not transfer ownership.
* Passing an array by value copies the array if its elements implement the Copy trait.
* Arrays composed of non-copy elements transfer ownership if passed by value.
```rust
fn main() {
    let array_with_non_copy = [String::from("Hello"), String::from("World")];
    display_array_reference(&array_with_non_copy);
    println!("After display_array_reference: {:?}", array_with_non_copy); // Prints: After display_array_reference: ["Hello", "World"]

    let array_with_copy = [1, 2, 3, 4];
    display_array_copy(array_with_copy);
    println!("After display_array_copy: {:?}", array_with_copy); // Prints: After display_array_copy: [1, 2, 3, 4]

    display_array_ownership(array_with_non_copy);
    // println!("After display_array_ownership: {:?}", array_with_non_copy); // Causes error
}

fn display_array_reference(arr: &[String; 2]) {
    println!("In display_array_reference: {:?}", arr); // Prints: In display_array_reference: ["Hello", "World"]
}

fn display_array_copy(arr: [i32; 4]) {
    println!("In display_array_copy: {:?}", arr); // Prints: In display_array_copy: [1, 2, 3, 4]
}

fn display_array_ownership(arr: [String; 2]) {
    println!("In display_array_ownership: {:?}", arr); // Prints: In display_array_ownership: ["Hello", "World"]
}
```
In this code:

* The function `display_array_reference` takes a reference to an array with two `String` elements. This allows the function to read the array without taking ownership, so the array remains available in the main function.

* The function `display_array_copy` takes an array with four `i32` elements. Since `i32` implements the Copy trait, the data is copied when passed to the function.

* The function `display_array_ownership` takes ownership of an array with two `String` elements. This consumes the array, making it unavailable for further use in the main function. Uncommenting the last `println!` statement in `main` causes an error because the array's ownership has been moved to the function.

## Summary and Next Steps
Congratulations! You've taken a significant step in your Rust journey by understanding how to work with arrays. We've covered creating arrays, accessing and modifying their elements, handling copy and non-copy data types, and using slices. Mastering arrays is crucial for efficiently handling collections of data in your Rust programs.

As we move forward, your understanding will be solidified through hands-on practice. Get ready to apply what you've learned in the exercises that follow. Happy coding!
