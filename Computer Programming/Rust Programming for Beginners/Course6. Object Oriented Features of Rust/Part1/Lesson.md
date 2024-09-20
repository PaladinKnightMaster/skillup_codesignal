# Introduction to Structs in Rust

## Introduction to Structs
Hello! In this lesson, we will dive into one of Rust's fundamental features — **structs**. Structs are a powerful way to package related data together, making your code more organized and easier to manage.

In this lesson, we will cover how to define structs, create instances, access and modify their fields. By the end of this lesson, you will have a solid understanding of Rust structs and will be ready to use them in your own projects.

Let's get started!

## Aside: Is Rust an Object Oriented Language?
Rust supports many features associated with object-oriented programming (OOP), but it doesn't strictly adhere to traditional OOP principles as seen in languages like Java or C++. Let's take a look at some common features of OOP.

**Objects and Classes**
Rust does not have a concept of classes or objects as seen in other programming languages. However, Rust allows the grouping of data and functionality into a single data structure called a struct, similar to an object.

**Encapsulation**
Rust also supports another OOP paradigm known as encapsulation. The concept of encapsulation helps in managing complexity by hiding the internal state of the object from the outside world and exposing only what is necessary through a defined interface.

**Inheritance**
Rust does not support inheritance. Inheritance allows a class to derive properties and behavior (methods) from another class. The class that inherits is called the "subclass," and the class being inherited from is called the "superclass." Rust does not have any features that allow a `struct` to inherit fields or methods from other structs.

**Polymorphism** Rust supports polymorphism using `traits` and `generics` which we will cover later in this course. Polymorphism allows objects of different types to be treated as objects of a common supertype.

## Defining a Struct
A struct (short for "structure") in Rust is a custom data type that allows you to group together related data. Imagine you are writing a program to manage a library. You will need to keep track of various information about each book, such as its title, author, and the number of pages. Instead of using separate variables for each attribute, Rust allows you to group these related pieces of data into a single, cohesive unit called a `struct`. Let's explore how to define a `struct` using the book analogy.

In Rust, a struct is defined using the `struct` keyword, followed by the struct's name and a block of fields. Each field has a name and a type. Here’s an example to illustrate:

```Rust
// Defining a struct
struct Book {
    title: String,
    author: String,
    pages: u32,
}
```

In this code, we defined a struct named `Book` with three fields: `title`, `author`, and `pages`. Each field has a specific type: `String` for `title` and `author`, and `u32` for `pages`. Note that when defining a struct, the last field can optionally end with a comma, and no semicolon is needed after the definition.

## Creating an Instance of a Struct
Now that we have defined the `Book` struct, we can create an instance of it. To do this, we declare a variable and assign a value to each of the fields. We can then access each field using dot notation. Let's take a look.

```Rust
fn main() {
    // Creating an instance of a struct
    let book1 = Book {
        title: String::from("Rust Programming"),
        author: String::from("John Doe"),
        pages: 250,
    };

    // Accessing fields
    println!("Title: {}", book1.title);  // Prints: Title: Rust Programming
    println!("Author: {}", book1.author); // Prints: Author: John Doe
    println!("Pages: {}", book1.pages);   // Prints: Pages: 250
}
```

In this example:

* We create an instance named `book1` with specific values for `title`, `author`, and `pages`.
* We access the fields using dot notation (e.g., `book1.title`) and print their values.

## Mutable Struct Fields
Struct fields in Rust are immutable by default. To change their values, we need to create a mutable instance of the struct. Just like other data structures, we use the `mut` keyword to make the struct mutable. Here’s how it’s done:

```Rust
fn main() {
    // Create a mutable instance of Book
    let mut book2 = Book {
        title: String::from("Rust for Beginners"),
        author: String::from("John Doe"),
        pages: 300,
    };

    // Modify the author field
    book2.author = String::from("Cosmo");
    println!("Book 2 Author: {}", book2.author); // Prints: Book 2 Author: Cosmo
}
```

In this example:

* We use the `mut` keyword to make `book2` mutable.
* We change the value of the `author` field and print the updated value.

## Ownership of Struct Instances
Each piece of data in Rust has a variable that is its owner.

* The variable assigned to the struct owns the entire struct.
* Each field in the struct does not "own" its data; instead, the struct instance as a whole owns all of its fields.

When you assign the value of one variable to another, the first variable will no longer hold that value if its type does not implement the `Copy` trait.

* Structs do not implement the `Copy` trait, even if all of their fields are `Copy`.
* If a field in the struct holds data that implements the `Copy` trait, assigning a variable to the value of that field will copy that field's data instead of transferring ownership.
* If a field holds non-`Copy` data, assigning a variable to the value in that field transfers ownership of that field's data.
* Once ownership of a struct is transferred, it is no longer valid to use the original variable, even though other fields are technically still valid within the new owner.

```Rust
struct Book {
    title: String,
    author: String,
    pages: u32,
}

fn main() {
    let book1 = Book {
        title: String::from("Rust Programming"),
        author: String::from("John Doe"),
        pages: 250,
    };

    let book2 = book1; // Transfer ownership of Book struct to book2

    // println!("Title: {}", book1.title); // Causes an error because book1 no longer owns the data

    let book_author = book2.author; // Transfer ownership of the "author" field ("John Doe") from book2 to book_author

    // println!("Book author: {}", book2.author); // Causes error, book2 no longer owns the author field

    let num_pages = book2.pages; // book2 still owns the pages field because pages is u32 (copy type)
    println!("Number of pages: {}", book2.pages); // Prints: Number of pages: 250


    let book_title = &book2.title; // Borrow the "title" field from book2 without transferring ownership.

    println!("Book title: {}", book2.title); // Prints: Book title: Rust Programming

    // let book3 = book2; // Causes error because book2 no longer owns the "author" field
}
```

Let's break this code down:

* When `book1` is assigned to `book2`, ownership of the `Book` struct is moved to `book2`. Therefore, `book1` can no longer be used.
* Attempting to access `book1.title` after this point results in a compile-time error because `book1` no longer owns the data.
* The `author` field of `book2` is moved to `book_author`. As a result, `book2` can no longer access its `author` field and will cause an error.
* The `pages` field of `book2` is a `u32`, a type that implements the `Copy` trait. Therefore, `num_pages` gets a copy of the `pages` field, and `book2` still retains its `pages`.
* Borrowing the `title` field of `book2` with `&book2.title` allows access without transferring ownership.
* Attempting to reassign `book2` to `book3` would cause a compile-time error because `book2` would no longer own one of its fields (`author`).

## Strings as Field Types
In the course, we will only use the `String` data type to represent textual data in structs. Using string literals or string slices is allowed, but requires the use of lifetimes, a topic beyond the scope of this course.

## Summary and Next Steps
Excellent work! You've now learned how to define structs in Rust, create instances, access their fields, and modify them when necessary. Structs are vital for organizing related data, making your programs more maintainable and clear.

Up next, you'll get to practice creating and manipulating structs on your own. Get ready to apply what you've learned and see the power of structs in action. Happy coding!
