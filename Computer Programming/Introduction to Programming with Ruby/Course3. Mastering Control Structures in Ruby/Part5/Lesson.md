# Practicing Conditional Logic: Complex Scenarios

## Welcome to Practicing Conditional Logic: Complex Scenarios
In the previous lesson, we combined conditionals with arrays and hashes and explored how to manage more complex data structures in **Ruby**. This set the stage for writing more dynamic and efficient code. Now, let's push the boundaries further by delving into complex scenarios that require sophisticated decision-making with nested conditions.

## What You'll Learn
In this lesson, you'll learn how to handle intricate real-world scenarios involving multiple conditions. We will cover:

1. **Nested Conditionals**: Understanding how to nest `if` statements effectively.
2. **Complex Data Structures**: Utilizing hashes with nested conditionals to solve more complicated problems.
3. **Real-World Applications**: Applying this knowledge to a real-world example — planning a trip with various requirements.

Here's a preview of the type of problem we'll tackle:

```Ruby
# Handling a complex travel planning scenario involving multiple conditions
traveler = {
    "passport" => true,
    "visa" => {"required" => true, "obtained" => false},
    "tickets" => true
}

if traveler['passport'] && traveler['tickets'] # The && operator checks if both conditions are true
    if traveler['visa']['required'] && !traveler['visa']['obtained']
        puts "You need to obtain a visa to continue with your travels."
    else
        puts "You are all set for your journey."
    end
else
    puts "Checklist incomplete! Ensure passport and tickets are ready."
end
```

In this example, you can see how nested conditionals help make decisions based on multiple criteria, making it possible to handle complex scenarios efficiently.

Note, that the `&&` operator is used to check if both conditions are true. In the example above, the traveler must have both a passport and tickets to proceed. If the traveler meets these conditions, the program checks if a visa is required and obtained. Based on these conditions, it provides the traveler with the necessary information to continue their journey.

Similarly, we can use the `||` operator to check if at least one of the conditions is true. For example:

```Ruby
if traveler['passport'] || traveler['tickets'] || traveler['visa']['obtained']
    puts "You have at least one of the required documents."
else
    puts "Checklist incomplete! Ensure passport, tickets, and visa are ready."
end
```

In this case, if one of the conditions is met, the message "You have at least one of the required documents." is displayed. Otherwise if all conditions are false, the message "Checklist incomplete! Ensure passport, tickets, and visa are ready." is displayed.

## Why It Matters
Mastering complex conditional logic is crucial for several reasons:

- **Real-World Complexity**: In many real-world applications, decisions are not always straightforward. They often require checking multiple conditions nested within one another.
- **Robust Programs**: Writing efficient nested conditionals makes your programs robust, reducing the risk of errors and ensuring all necessary conditions are met before proceeding.
- **Informed Decision-Making**: By correctly implementing nested conditionals, your programs can handle various scenarios and make informed decisions based on multiple inputs.

Exciting, right? By the end of this lesson, you'll be able to handle complex travel planning scenarios or any other scenarios involving multiple conditions confidently. Let's dive into the practice section and build on what you've learned so far!
