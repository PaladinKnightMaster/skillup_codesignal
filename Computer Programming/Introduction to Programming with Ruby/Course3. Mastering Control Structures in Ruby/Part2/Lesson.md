# Using If-Elsif-Else for Multiple Conditions

## Expanding Our Knowledge: Using If-Elsif-Else for Multiple Conditions
Welcome back! Now that we have a grasp of basic `if` statements, let's take our decision-making skills to the next level. In this lesson, we'll explore using `if-elsif-else` statements to handle scenarios that require more than just a simple yes-or-no decision.

## What You'll Learn
When programming, you'll often encounter situations where one condition isn't enough. You might need to decide among several options. This is where `if-elsif-else` statements come into play. Here's a quick example to illustrate:

```Ruby
age = 25

if age < 18
    puts "You are eligible for the youth adventure package."
elsif age < 60
    puts "You are eligible for the adult adventure package."
else
    puts "You are eligible for the senior adventure package."
end
```

In this code, we determine the appropriate travel package based on the traveler's age. Notice how we use elsif to add additional conditions.

## Using `<=` Operator
When working with conditions, you may also need to check if one value is less than or equal to another. The `<=` operator helps you accomplish this. For example:

```Ruby
score = 80

if score <= 60
    puts "You need to improve."
elsif score <= 80
    puts "Good job!"
else
    puts "Excellent work!"
end
```

In this code, the program evaluates the test score and prints a message based on the range in which the score falls. The use of `<=` allows the program to include the boundary value in the condition.

Similarly, we can use the greater than and greater than or equal to operators (`>` and `>=`) to compare values.

## Why It Matters
Mastering `if-elsif-else` statements is crucial as they allow your programs to make more nuanced decisions. Instead of stopping after the first condition, you can continue evaluating further conditions until the appropriate one is met. This is vital for creating sophisticated, adaptive applications that can handle a wide range of scenarios, much like deciding on different travel packages based on the age of a traveler.

By the end of this lesson, you'll be equipped to handle multiple conditions in your code, making your programs smarter and more responsive. Exciting, right? Let’s get started and deepen our understanding together.

As always, after going through this section, you'll get to practice what you've learned. Let's start coding!
