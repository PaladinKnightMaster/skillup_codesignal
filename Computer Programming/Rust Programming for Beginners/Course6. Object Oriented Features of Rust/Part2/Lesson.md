# Adding Functionality with Methods

## Adding Functionality with Methods
Hello! In this lesson, we will explore how to add functionality to your structs using methods in **Rust**. Just as you use functions to encapsulate behavior in your programs, methods allow you to encapsulate behavior within a struct. This lesson will cover defining methods, creating constructors, and using mutable methods to add functionality to structs.

Let's get started!

## What are Methods?
Methods in Rust are similar to functions, but they are associated with an instance of a struct and can operate on its data. Think of methods as actions that instances of structs can perform. Let's use a `Rectangle` struct as an analogy to understand this concept better.

Imagine we have a `Rectangle` struct, and we want this rectangle to perform certain actions, such as calculating its area or changing its dimensions. Methods allow us to define these actions directly so the rectangle "knows" how to perform these actions on its own.

## Defining Methods for Structs
In Rust, methods are defined within an `impl` block, connecting them to a specific struct. This enables us to associate behavior with the struct. The first parameter of a method must always be `&self`. The `self` keyword refers to the instance of the struct. We use `&` to prevent the method from taking ownership of the instance. After defining a method, call it using dot syntax on the desired instance of the struct. The instance of the struct automatically gets passed as the `self` parameter. Let's take a look:

```Rust
// Define a struct
struct Rectangle {
    width: f32,
    height: f32,
}

// Implement methods for the struct
impl Rectangle {

    // Method to calculate the area
    fn area(&self) -> f32 {
        self.width * self.height
    }
}

fn main() {
    // Create an instance of Rectangle
    let rect = Rectangle {
        width: 30.5,
        height: 50.1,
    };

    // Call the area method
    let rect_area = rect.area();
    println!("Area: {}", rect_area); // Prints: Area: 1528.0499
}
```

In this example:

* We defined a struct named `Rectangle` with two fields: `width` and `height`, both of type `f32`.
* Inside the `impl` block, we defined a method `area` that borrows the instance of the struct using `&self`. This method calculates and returns the area of the rectangle.
* We then created an instance of `Rectangle`, called `rect`
* We use `rect.area()` to call the `area` method. `rect` automatically gets passed as the `self` parameter.

## Creating a Constructor
Associated functions in Rust are functions that are defined within the `impl` block but are not associated with an instance of the struct. These functions do not take `&self` as a parameter. This is because they are called on the struct data type itself rather than an instance of the struct.

Associated functions are often used to create constructors for a struct. The take in the necessary data to instantiate the struct and return an instance of the struct containing this data. Let's take a look at the syntax to create a constructor for our `Rectangle` struct.

```Rust
// Define a struct
struct Rectangle {
    width: f32,
    height: f32,
}

impl Rectangle {

    // Method to calculate the area
    fn area(&self) -> f32 {
        self.width * self.height
    }

    // Associated function to create a new Rectangle instance
    fn new(width: f32, height: f32) -> Rectangle {
        Rectangle { width: width, height: height }
    }
}

fn main() {
    // Create an instance using the associated function
    let rect = Rectangle::new(30.5, 50.1);

    // Call methods on the struct
    println!("Area: {}", rect.area()); // Prints: Area: 1528.0499
}
```

In this example:

* We added an associated function `new` that takes `width` and `height` as parameters and returns a new instance of `Rectangle`.
* In the `main` function, we used `Rectangle::new` to create a new instance, passing the width and height as parameters.
* We then call the `area` method and print the result.

## Adding Mutable Methods
Sometimes, we need to modify the fields of a struct. In such cases, methods can be defined to take a mutable reference to `self`. Let's add a method called `change_dims` to change the dimensions of our rectangle.

```Rust
// Define a struct
struct Rectangle {
    width: f32,
    height: f32,
}

impl Rectangle {

    // Method to calculate the area
    fn area(&self) -> f32 {
        self.width * self.height
    }

    // Associated function to create a new Rectangle instance
    fn new(width: f32, height: f32) -> Rectangle {
        Rectangle { width: width, height: height }
    }

    // Method to change the dimensions of the rectangle
    fn change_dims(&mut self, width: f32, height: f32) {
        self.width = width;
        self.height = height;
    }
}

fn main() {
    // Create an instance using the associated function
    let mut rect = Rectangle::new(30.5, 50.1);

    // Call methods on the struct
    println!("Area: {}", rect.area()); // Prints: Area: 1528.0499

    // Change dimensions and print the new area
    rect.change_dims(20.0, 30.3);
    println!("New Area: {}", rect.area()); // Prints: New Area: 606
}
```

In this example:

* We added a mutable method `change_dims` that takes `&mut self`, `width`, and `height`.
* The method updates the `width` and `height` fields using `self.width` and `self.height`.
* In the `main` function, we created a mutable instance of `Rectangle` and called `change_dims` to modify its dimensions.
* We then calculated and printed the new area of the rectangle.

## Summary and Next Steps
Excellent work! Today, you've learned how to define methods to add functionality to your structs, create constructors, and use mutable methods to modify struct fields. These skills enhance the utility and maintainability of your code by encapsulating behavior within the structs themselves.

Understanding how to integrate behavior with data using methods is crucial for writing clean and reusable code. Now, it's time to practice what you've learned. Dive into the exercises to reinforce your understanding and see the power of methods in action.

Let's get coding!
