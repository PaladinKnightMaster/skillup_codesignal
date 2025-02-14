# Making Decisions with If-Else Statements

## Introduction to If-Else Statements
Welcome to the first unit of **"Mastering Control Structures in Ruby."** In this lesson, you will learn about the foundational `if` statements in Ruby. This basic control structure allows you to make decisions in your code based on specific conditions. Understanding this will help you control the flow of your program and handle varying conditions more effectively.

## What You'll Learn
In this lesson, you will learn how to use `if` statements to create decision-making structures in Ruby. Let's start with a simple example to check travel eligibility based on passport possession:

```Ruby
# Check for travel eligibility based on passport possession
passport = true

if passport
    puts "You are eligible to travel."
else
    puts "You cannot travel without a passport."
end
```

Here, the `if` statement checks if the `passport` variable is `true`. If it is, it prints "You are eligible to travel."; otherwise, it prints "You cannot travel without a passport." This simple structure can be expanded to handle more complex conditions.

Additionally, you will learn how to make decisions based on the value of a variable:

```Ruby
destination = "Moon"

if destination == "Moon"
    puts "Sorry, we don't have Moon travel yet. Come again later."
end
```

In this example, the statement checks the value of `destination` and prints a message based on the condition. Notice, that we omitted the `else` block, and this is perfectly valid. You can use `if` statements without the `else` block if you don't need to handle the opposite condition.

## Why It Matters
Using if statements is crucial because it allows your program to react differently based on varying conditions. This is essential in real-world applications where user inputs or data change dynamically. For instance, checking if a user has a passport before processing travel documents is a real-world scenario that requires decision-making logic like this.

Mastering if statements will enable you to create more interactive, flexible, and responsive programs. This is your first step into gaining control over your code's logic flow, an essential skill for any proficient Ruby developer.

Let's dive into the practice section to reinforce what you've just learned!
