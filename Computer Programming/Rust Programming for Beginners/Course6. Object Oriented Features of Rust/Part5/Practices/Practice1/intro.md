# Polymorphism with Shape in Rust

Great progress so far! Let's continue exploring polymorphism in Rust using traits.

In this task, we define a trait named `Shape` with two methods: `area`, which must be implemented by any `struct` that implements the `Shape` trait, and `print`, which has a default implementation.

Then, we create two `struct`s: `Circle` and `Rectangle`, and implement the `Shape` trait for both, providing their specific definitions of the `area` method. We override the `print` method for the `Rectangle` struct to provide a custom message.

Lastly, we use a generic function `get_area` that accepts any type implementing the `Shape` trait, demonstrating how to leverage traits for polymorphic behavior.

Click `Run` to see how it works!