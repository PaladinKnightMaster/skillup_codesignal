# Vectors in Rust

## Introduction to Vectors in Rust
Hello! Today, we’re going to delve into one of Rust’s most versatile and powerful data structures — **vectors**. Just as we explored arrays in our previous lesson, vectors also store a collection of elements of the same type. However, unlike arrays, vectors are dynamic and can grow and shrink as needed.

In this lesson, we'll cover the essentials of creating, modifying, and managing vectors in Rust. We’ll look into different ways of creating vectors, adding and removing elements, and understanding how Rust handles data and ownership within vectors. By the end of this lesson, you'll have a strong grasp of vectors and be ready to use them effectively in your Rust programs.

Let's get started!

## Creating Vectors
Vectors can be created in Rust with or without specifying the data type explicitly. If the type is not explicitly mentioned, Rust will infer it based on the values pushed into the vector. To declare a new vector explicitly use `Vec` followed by the data type within `<>`. To add new elements to a vector, use `push` to append the new value to the end of the vector. To implicitly declare a vector, use `vec!` followed by the elements inside brackets.

Here are a couple of examples to illustrate this:

```rust
fn main() {
    // Creating Vector with Data Type
    let mut vector_with_type: Vec<i32> = Vec::new();
    vector_with_type.push(1);
    vector_with_type.push(2);
    vector_with_type.push(3);

    // Creating Vector without Data Type (type inference)
    let mut vector_without_type = vec![4, 5, 6];
    vector_without_type.push(7);
}
```
In this example:

* `vector_with_type` is explicitly typed as a vector of `i32` values. Elements are pushed into the vector using the `push` method.
* `vector_without_type` uses type inference, determining the type from the initial values provided.

## Accessing Elements of a Vector
You can access elements of a vector using both the `get` method and direct indexing. The `get` method returns an `Option` type that can be used to handle out-of-bounds errors gracefully. The `get` method returns an `Option<&T>` where `T` is the type of the elements in the vector. The `Option` type can be `Some(&element)` if the index is valid, or `None` if the index is out of bounds.

To ensure the valid access of an element, use the pattern matching construct `if let Some(&element) = vector.get(index)`. If `index` is indeed a valid index, `element` takes on the value of the element in the vector, and the `if` block is executed. If `index` is not a valid index, `element` takes on the value of `None`, and the `if` block does not execute.

```rust
fn main() {
    let vector = vec![1, 2, 3];
    if let Some(first_elem) = vector.get(0) {
        println!("First element (using get): {:?}", first_elem); // Prints: First element (using get): 1
    }
    println!("Second element (using index): {}", vector[1]); // Prints: Second element (using index): 2
}
```
* If 0 is a valid index of `vector` (it is), `vector.get(0)` returns `Some(&first_elem)` and binds `first_elem` to the value of the first element of `vector`.
* The `if` block is executed because `Some(first_elem)` is not `None`.
* `vector[1]` directly accesses the second element but can panic if the index is out-of-bounds.

## Modifying Vectors
Vectors in Rust are immutable by default, but can be made mutable using the `mut` keyword. This allows you to modify their elements and change their size:

```rust
fn main() {
    let mut mutable_vector = vec![8, 9, 10];
    mutable_vector[1] = 42; // Modifying the second element
    println!("Updated vector: {:?}", mutable_vector); // Prints: Updated vector: [8, 42, 10]
}
```
We created a mutable vector `mutable_vector` then modified the second element using `mutable_vector[1] = 42`.

## Removing Elements from a Vector
Rust provides methods like `pop` and `remove` to remove elements from a vector, simplifying management tasks.

`.pop` returns the last element of the vector and removes it from the vector.

The `remove` method is used to remove an element from a vector at a specified index. This operation shifts all elements after the specified index one position to the left, effectively reducing the vector's length by one. The method also returns the removed element.

```rust
fn main() {
    let mut vector = vec![4, 5, 6, 7];
    println!("Popped element: {:?}", vector.pop()); // Prints: Popped element: Some(7)
    let removed_elem = vector.remove(1); // Removes the element at index 1
    println!("Removed Element: {}", removed_elem); // Prints: Removed Element: 5
    println!("Updated vector: {:?}", vector); // Prints: Updated vector: [4, 6]
}
```
* `vector.pop()` removes the last element and returns it wrapped in `Some`, or `None` if the vector is empty.
* `vector.remove(1)` removes and returns the element at index 1. If the index is out-of-bounds, this code will cause an error during runtime.

## Ownership and Copy Data in Vectors
Handling ownership and the concept of copy versus non-copy data types is crucial in Rust. Vectors themselves are not `Copy` types in Rust. Even if the elements inside the vector are of a type that implements the `Copy` trait (such as `i32`), the vector itself does not implement the `Copy` trait. Like arrays, using direct indexing on a vector (`vector[index]`) does not move ownership of a non-copy element. You can only create a reference to the element. Here's how it works with vectors:

```rust
fn main() {
    let vector_with_copy = vec![1, 2, 3, 4];

    // Copy data
    let first_elem_copy = vector_with_copy[0];
    println!("first_elem_copy: {}", first_elem_copy); // Prints: first_elem_copy: 1
    println!("vector_with_copy: {:?}", vector_with_copy); // Prints: vector_with_copy: [1, 2, 3, 4]

    // Non-copy data
    let vector_with_non_copy = vec![String::from("Hello"), String::from("World")];

    let first_elem_non_copy = &vector_with_non_copy[0]; // Creates a reference
    println!("first_elem_non_copy: {}", first_elem_non_copy); // Prints: first_elem_non_copy: Hello
    let invalid_copy = vector_with_non_copy[0]; // Causes an error. You cannot move ownership of vector elements

    // Ownership Transfer
    let copied_vector = vector_with_copy; // Ownership moved to copied_vector
    println!("vector_with_copy: {:?}", vector_with_copy); // Causes an error
}
```
**Vector with Copy Data**
* `vector_with_copy` contains `i32` elements, which are copy types.
* `vector_with_copy[0]` accesses the first element, `1`, which is of type `i32`.
* `first_elem_copy` is assigned the value `1`. Since `i32` implements the `Copy` trait, the value is copied rather than moved.

**Vector with Non-Copy Data**
* `vector_with_non_copy` is initialized with `String` elements. `String` does not implement the `Copy` trait.
* The line `&vector_with_non_copy[0]` creates a reference to the first element of the vector
* The line `vector_with_non_copy[0]` causes an error because you cannot move ownership of elements in a non-Copy vector

**Ownership Transfer**
* Ownership of `vector_with_copy` is moved to `copied_vector`, making `vector_with_copy` invalid.

## Slicing Vectors
Slices allow you to work with portions of a vector without creating a new one. To create a vector slice, use a reference to the vector followed the starting index up to, but not including the ending index. To create a full slice of an vector, simply place `..` inside the brackets. Here’s how you can create and use slices:

```rust
fn main() {
    let vector = vec![10, 20, 30, 40];
    let slice = &vector[1..3]; // Slicing the vector
    println!("Slice from vector: {:?}", slice); // Prints: Slice from vector: [20, 30]

    let mut vector_for_slice = vec![10, 20, 30, 40];
    {
        let mutable_slice = &mut vector_for_slice[1..3];
        mutable_slice[0] = 25; // Modifying the slice
        mutable_slice[1] = 35; // Modifying the slice
    }
    println!("Vector after modifying slice: {:?}", vector_for_slice); // Prints: Vector after modifying slice: [10, 25, 35, 40]
}
```
* `&vector[1..3]` creates an immutable slice of the vector.
* `&mut vector_for_slice[1..3]` creates a mutable slice, allowing modifications to the vector's elements.

## Vectors as Function Parameters
Vectors can be passed to functions by reference or by value, affecting ownership and data access. The rules for passing vectors to functions are as follows:

* Passing a reference to an vector does not transfer ownership.
* Unlike arrays, passing a vector by value always transfers ownership, regardless of whether the elements implement the `Copy` trait or not.
```rust
fn main() {
    let vector1 = vec![String::from("Hello"), String::from("World")];
    display_vector_reference(&vector1);
    println!("After display_vector_reference: {:?}", vector1); // Prints: After display_vector_reference: ["Hello", "World"]

    let vector2 = vec![1, 2, 3, 4];
    display_vector_ownership(vector2);
    println!("After display_vector_ownership: {:?}", vector2); // Error as ownership has been moved
}

fn display_vector_reference(vec: &Vec<String>) {
    println!("In display_vector_reference: {:?}", vec); // Prints: In display_vector_reference: ["Hello", "World"]
}

fn display_vector_ownership(vec: Vec<i32>) {
    println!("In display_vector_ownership: {:?}", vec); // Prints: In display_vector_ownership: [1, 2, 3, 4]
}
```
In this code:

* The function `display_vector_reference` takes a reference to a vector with two `String` elements. This allows the function to read the vector without taking ownership, so the vector remains available in the main function.

* The function `display_vector_ownership` takes ownership of a vector with two `i32` elements. This consumes the vector, making it unavailable for further use in the main function. The last print statement in `main` causes an error because the vector's ownership has been moved to the function.

## Summary and Next Steps
Congratulations! You have just taken a significant step in mastering vectors in Rust. We have covered how to create, modify, and access vectors, slice them, and understand the importance of data ownership and copy types within vectors.

With vectors, you've unlocked a dynamic and powerful way to manage collections in Rust. They provide flexibility and efficiency that’s easy to integrate into any Rust project. As you continue to practice, keep experimenting with different ways to manipulate and use vectors.

Now it's time to put your newfound skills to the test. Dive into the exercises ahead and enjoy the hands-on practice. Your journey into the world of Rust is getting even more exciting. Happy coding!
