# Introduction to Modules and Encapsulation

## Introduction to Modules and Encapsulation
Hello! In this lesson, we will explore an essential aspect of Rust programming and OOP — **modules and encapsulation**. This lesson welcomes you into the world of Rust's modularity and the principles of encapsulation, key features in writing maintainable and scalable code.

Modules in Rust help organize code into separate namespaces, making it easier to manage and navigate larger projects. Encapsulation allows you to restrict access to parts of your code, promoting safer and more intentional interactions with your data structures.

In this lesson, we will:

* Introduce the concept and syntax of modules
* Learn to control visibility with `pub`
* Implement encapsulated data using `struct` methods

Let's dive in!

## Creating Modules
Modules in Rust are like containers that organize your functions, `structs`, traits, and methods. They allow you to create structs and methods while using encapsulation to control access to a structs methods and fields.

Here's a simple example to create a module in Rust:

```Rust
mod bank {
    struct BankAccount {
        balance: f32,
        name: String,
    }
}
```

In this example:

* We defined a module named `bank` using the `mod` keyword
* Inside the `bank` module, we created a `BankAccount` struct with two fields

## Using Modules
Now that we have created a module, let's explore how to use it! By default, any structs or methods defined in a module are private and cannot be accessed by code outside the module. To allow access to code inside the module, we use the `pub` keyword, making the code public. In this section we make the `BankAccount` public, create a public constructor, and create a new `BankAccount` instance.

```Rust
mod bank {
    pub struct BankAccount {
        balance: f32,
        name: String,
    }

    impl BankAccount {
        pub fn new(balance: f32, name: String) -> BankAccount {
            BankAccount { balance: balance, name: name }
        }
    }
}

fn main() {
    let my_account = bank::BankAccount::new(1000.0, String::from("Cosmo"));
}
```

* Adding the `pub` keyword to the `BankAccount` struct allows code in the `main` function to access the `struct`
* We added a public associated function for the `BankAccount` struct called `new` that creates a new instance of a `BankAccount`
* Inside `main`, we created an instance of a `BankAccount`
* The syntax to access the `new` method is `<module name>::<struct name>::<struct method>(<input parameters>)`

## Implementing Encapsulation
Let's take a deeper dive into encapsulation with the `pub` keyword. Continuing with the `BankAccount` example, currently both fields of the struct are private.

We want users to be allowed to check the `balance` and `deposit` money, but not allow them to directly access the `balance` field. To do this, we will create a public deposit method to change the balance field and a public `get_balance` method.

Additionally, we want the name associated with the account to be accessed by anyone, so we make it public. Let's take a look:

```Rust
mod bank {
    pub struct BankAccount {
        balance: f32,
        pub name: String,
    }

    impl BankAccount {
        pub fn new(balance: f32, name: String) -> BankAccount {
            BankAccount { balance: balance, name: name }
        }

        pub fn deposit(&mut self, amount: f32) {
            self.balance += amount;
        }

        pub fn get_balance(&self) -> f32 {
            self.balance
        }
    }
}

fn main() {
    let mut my_account = bank::BankAccount::new(1000.0, String::from("Cosmo"));

    my_account.deposit(500.0);
    println!("Balance: ${}", my_account.get_balance()); // Prints: Balance: $1500
    //println!("Account balance is {}", my_account.balance); // Causes error because balance field is private

    println!("Account belongs to {}", my_account.name); // Prints: Account belongs to Cosmo
}
```

Let's break this code down step by step.

* Inside the `bank` module, we've changed the `name` field to be public
* We've created a public method `deposit` that takes in a mutable reference to `self`
* We've created a public method `get_balance` that returns the account balance.

In the main function

* We create a new instance of `BankAccount` called my_account
* The `deposit` and `get_balance` methods are public, so we can call them and print the results.
* When we try to access `my_account.balance`, we will get an error because the `balance` field is private
* We can directly access the `name` field because it is public

## The Importance of Encapsulation
To make the importance of encapsulation more clear we will allow users to withdraw money, ensuring the account balance does not become negative.

Adding onto the code from the previous section:

```Rust
mod bank {
    pub struct BankAccount {
        balance: f32,
        pub name: String,
    }

    impl BankAccount {
        pub fn new(balance: f32, name: String) -> BankAccount {
            BankAccount { balance: balance, name: name }
        }

        pub fn deposit(&mut self, amount: f32) {
            self.balance += amount;
        }

        pub fn get_balance(&self) -> f32 {
            self.balance
        }

        pub fn withdraw(&mut self, amount: f32) -> String {
            if self.balance >= amount {
                self.balance -= amount;
                String::from("Account balance: $") + &self.balance.to_string()
            } else {
                String::from("Insufficient Funds")
            }
        }
    }
}

fn main() {
    let mut my_account = bank::BankAccount::new(1000.0, String::from("Cosmo"));

    println!("{}", my_account.withdraw(300.5)); // Prints: Account balance: $1199.5
    println!("{}", my_account.withdraw(2000.0)); // Prints: Insufficient Funds

    // my_account.balance -= 2000.0 // Causes error since `balance` is private

    println!("Final balance: ${}", my_account.get_balance()); // Prints: Final balance: $1199.5
}
```

The `withdraw` method ensures that `amount` can be withdrawn from the `balance` without the account becoming negative.

The code shows the successful withdrawal of $300.50 and an unsuccessful withdrawal of $2000.

The attempt to directly modify `my_account.balance` causes an error because the `balance` field is private. If users could directly modify the `balance` field, they could withdraw more money than they actually have.

## Summary and Next Steps
Great job! You've learned how to create and use modules, control access with `pub`, and apply encapsulation in Rust. These skills are crucial for organizing your code and enhancing its readability, safety, and maintainability.

Now it’s time to practice what you’ve learned. Get ready to dive into the exercises and reinforce your understanding of modules and encapsulation in Rust.
