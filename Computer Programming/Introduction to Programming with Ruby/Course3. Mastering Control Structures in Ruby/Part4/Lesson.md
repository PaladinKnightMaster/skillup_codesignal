# Combining Conditionals with Arrays and Hashes

## Combining Conditionals with Arrays and Hashes
Welcome back! Having learned about `if-else` statements and `case` expressions, you’re now equipped with essential tools for making decisions in your code. In this lesson, we will take your skills a notch higher by combining conditionals with arrays and hashes. This will allow you to manage more complex scenarios, particularly those involving collections of data.

## What You'll Learn
Arrays and hashes are powerful data structures in Ruby, and when combined with conditionals, they open up extensive possibilities. In this lesson, you'll learn how to:

- Access elements within arrays and hashes.
- Use conditional statements to make decisions based on array or hash values.

Consider the following example:

```Ruby
# Planning a trip based on destinations hash and visited status
destinations = {
    "Nepal" => {"must_see" => "Mount Everest", "visited" => false},
    "Italy" => {"must_see" => "Colosseum", "visited" => true},
    "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false}
}

destination = "Nepal"

if destinations[destination]["visited"]
    puts "You have already visited #{destination}. Remember visiting #{destinations[destination]['must_see']}?"
else
    puts "You have not yet visited #{destination}. Don't miss #{destinations[destination]['must_see']}!"
end
```

In this example, we access a nested hash to check whether a destination has been visited and respond accordingly. This technique enhances your ability to write dynamic and data-driven programs.

Now, let's look at an example using arrays:

```Ruby
# Check if favorite fruits list contains certain fruits
favorite_fruits = ["apple", "banana", "mango"]

fruit_to_check = "apple"

if favorite_fruits.include?(fruit_to_check)
    puts "#{fruit_to_check.capitalize} is one of your favorite fruits!" # The capitalize method capitalizes the first letter of the string
else
    puts "#{fruit_to_check.capitalize} is not in your list of favorite fruits."
end
```

In this example, we check if a specific fruit is within the array of `favorite_fruits` and print a message based on the result. This demonstrates how you can use arrays combined with conditionals to make decisions based on the presence or absence of elements. Notice that in Ruby, you can use the `include?` method to check if an array contains a specific element or not. The question mark at the end of the method name is a common convention in Ruby to indicate that the method returns a boolean value.

Notice, that we use the `capitalize` method to capitalize the first letter of the fruit name. This is a built-in method in Ruby that capitalizes the first letter of a string.

## Why It Matters
Mastering how to combine conditionals with arrays and hashes is crucial because most real-world applications involve data that comes in collections. Whether you're building a web application, a data analysis tool, or a game, you'll need to manage and manipulate data effectively. By combining conditionals with arrays or hashes, you can:

- Dynamically interact with data collections.
- Make more nuanced decisions based on complex data structures.
Furthermore, getting comfortable with this concept will make your code more robust and scalable, simplifying future modifications and improvements.

Excited to dive in? Let’s move to the practice section and start honing your skills with combined conditionals and arrays!
