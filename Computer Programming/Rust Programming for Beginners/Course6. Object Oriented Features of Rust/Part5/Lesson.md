# Exploring Polymorphism with Traits

## Exploring Polymorphism with Traits
Hello! In this lesson, we will explore the concept of **polymorphism** in Rust using **traits**. Polymorphism is a core concept in object-oriented programming that allows you to define a single interface and have multiple implementations. In Rust, traits let us achieve polymorphism, enabling different types to be treated uniformly based on shared behavior.

Our journey will involve defining traits, implementing them for different structs, and leveraging these traits to perform polymorphic operations. This lesson will build upon your understanding of traits from the previous lesson and elevate your ability to design flexible and reusable code in Rust.

Let's get started!

## Default Methods in Traits
Default methods in traits define method behavior that should be used when a struct that implements the trait does not have a required method. For example, let's say we want to create a new trait named `Shape`. Any struct that implements the `Shape` trait should have an `area` method and `print` method. However, if a struct that implements `Shape` does not have a `print` method, we can provide a default `print` method within the trait declaration. If the struct does have a `print` method, that method is used instead of the default method provided in the trait. Let's take a look:

```Rust
// Define a trait named `Shape`
trait Shape {
    fn area(&self) -> f32;
    fn print(&self) {
        println!("This is the default shape method");
    }
}
```

Any struct that implements the `Shape` trait must provide an implementation for `area`, but if they do not provide an implementation for `print`, a default is provided.

## Creating structs using Default Methods
Now let's see how these default methods work in action. We'll start by creating a `Circle` and `Rectangle` struct. Both will implement the `Shape` trait by having the required `area` method. However, we will not give the `Circle` struct a `print` method, so it must use the default method. For the `Rectangle` struct, we use a concept called method overriding. The `print` method for `Rectangle` is said to "override" the default `print` method.

```Rust
// Define a trait named `Shape`
trait Shape {
    fn area(&self) -> f32;
    fn print(&self) {
        println!("This is the default shape method");
    }
}

// Define a struct for Circle
struct Circle {
    radius: f32,
}

// Define a struct for Rectangle
struct Rectangle {
    width: f32,
    height: f32,
}

// Implement the Shape trait for Circle
impl Shape for Circle {
    fn area(&self) -> f32 {
        3.14159 * self.radius * self.radius
    }
}

// Implement the Shape trait for Rectangle
impl Shape for Rectangle {
    fn area(&self) -> f32 {
        self.width * self.height
    }

    fn print(&self) {
        println!("Rectangle with width = {} and height = {}", self.width, self.height);
    }
}
```

* We've defined a trait named `Shape` with two methods: `area` and `print`. The print method has a default implementation
* We also defined two structs, `Circle` and `Rectangle` that implement the `Shape` trait
* The `Circle` struct contains an `area` method but not a `print` method
* The `Rectangle` struct contains an `area` method and a `print` method

Let's take a look at these methods in action:

```Rust
fn main() {
    let circle = Circle { radius: 10.0 };
    let rectangle = Rectangle { width: 10.0, height: 20.0 };

    circle.print(); // Prints: This is the default shape method
    rectangle.print(); // Prints: Rectangle with width = 10 and height = 20

    let circle_area = circle.area();
    let rectangle_area = rectangle.area();

    println!("Circle area = {}", circle_area); // Prints: Circle area = 314.159
    println!("Rectangle area = {}", rectangle_area); // Prints: Rectangle area = 200
}
```

## Generics, Traits, and Functions
Now that we have `Circle` and `Rectangle` that both implement the `Shape` trait, let's see the power of polymorphism. Suppose we have a function called `get_area` that takes in any instance of a struct that implements the `Shape` trait. Since the input parameter implements the `Shape` trait, we know we can safely called the `.area()` method on that input. However, how can we ensure that the input to `get_area` implements `Shape`? We can use a concept called **generics**. Generics in Rust allow for code reuse by enabling functions, structs, and traits to operate on different data types while ensuring type safety. Let's take a look at how to define a function using generics:

```Rust
fn get_area<T: Shape>(shape: &T) -> f32 {
    shape.area()
}
```

* In Rust, the `T` (stands for Type) in a generic type declaration is a placeholder for a type that will be specified later.
* The syntax `<T:Shape>` declares that the function will take in a data type that implements the `Shape` trait
* In parentheses, we define the input parameter `shape` that is a reference to a value of type `T`
* Inside the function, we can safely call `.area()`, as whatever data type `shape` is, we know it has an `area` method

Let's take a look at how it works:

```Rust
// Using Circle, Rectangle, and Shape defined earlier
fn main() {
    let circle = Circle { radius: 10.0 };
    let rectangle = Rectangle { width: 10.0, height: 20.0 };

    let circle_area = get_area(&circle);
    let rectangle_area = get_area(&rectangle);
    println!("Circle area = {}", circle_area); // Prints: Circle area = 314.159
    println!("Rectangle area = {}", rectangle_area); // Prints: Rectangle area = 200
}
```

## Summary and Next Steps
Great job! In this lesson, we explored how to define and implement traits for structs, and how to use these traits to achieve polymorphism in Rust. You learned how to:

1. Define a trait with default methods.
2. Implement the trait for different structs.
3. Write functions that accept any type implementing a specific trait.

Polymorphism with traits in Rust allows you to write flexible and reusable code that can handle various types uniformly. This is a powerful feature that enhances your ability to design modular programs.

Now, it's time to put your knowledge into practice! Head over to the exercises where you will create your own traits and implement them for different types. Happy coding!
