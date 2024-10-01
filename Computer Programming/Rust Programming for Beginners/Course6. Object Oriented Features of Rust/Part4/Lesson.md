# Introduction to Traits in Rust

## Introduction to Traits
Hello! In this unit, we will explore an advanced and powerful feature of the Rust programming language — Traits. As we delve into traits, we'll understand how they enable polymorphism and code reuse in Rust, making our programs more modular and elegant.

Traits in Rust let us define shared behavior in an abstract way, similar to interfaces in other programming languages. They are essential for achieving polymorphism, allowing different types to be treated uniformly based on shared behavior.

Let's get started!

## What are Traits?
Traits are a way to define shared behavior in Rust. They are somewhat similar to interfaces in languages like Java or abstract base classes in C++. A trait defines a set of methods that a type must implement. By defining traits, you can write functions that can operate on any type that implements a particular trait.

Here's an example to illustrate how traits work:

```Rust
// Define a trait named `Area`
trait Area {
    fn area(&self) -> f32;
}
```

* We defined a trait named `Area` with a single method `area` that returns a `f32`.
* Any `struct` that wants to implement the `Area` trait must have a method with the signature `fn area(&self) -> f32`

## Implementing Traits for Structs
Now that we've defined a trait, let's implement the trait for 2 different shapes

```Rust
// Define a trait named `Area`
trait Area {
    fn area(&self) -> f32;
}

// Define a struct for `Rectangle`
struct Rectangle {
    width: f32,
    height: f32,
}

// Implement the `Area` trait for `Rectangle`
impl Area for Rectangle {
    fn area(&self) -> f32 {
        self.width * self.height
    }
}

// Define a struct for `Circle`
struct Circle {
    radius: f32,
}

// Implement the `Area` trait for `Circle`
impl Area for Circle {
    fn area(&self) -> f32 {
        3.14159 * self.radius * self.radius
    }
}
```

In this code:

* We created a `Rectangle` struct and a `Circle` struct
* We implemented the trait for each structure using the syntax `impl Area for Rectangle` and `impl Area for Circle`

Now that both `Rectangle` and `Circle` implement the `Area` trait, our code ensures that any instance of `Rectangle` and `Circle` can use `.area()` to get the area of the respective shape.

## Using Traits
Using the code from the previous section, we can now create shapes and get their area.

```Rust
fn main() {
    // Create an instance of `Rectangle`
    let rect = Rectangle { width: 10.0, height: 20.0 };
    println!("Rectangle Area: {}", rect.area()); // Prints: Rectangle Area: 200.0

    // Create an instance of `Circle`
    let circ = Circle { radius: 5.0 };
    println!("Circle Area: {}", circ.area()); // Prints: Circle Area: 78.53975
}
```

## Summary and Next Steps
Fantastic work! Today, you've learned about defining and implementing traits, and their importance. In the next lesson, we will explore how we can use traits to implement polymorphism.

Now that you understand the theory behind traits, it's time to dive into some hands-on practice. These exercises will solidify your grasp of traits and their powerful capabilities. Happy coding!
