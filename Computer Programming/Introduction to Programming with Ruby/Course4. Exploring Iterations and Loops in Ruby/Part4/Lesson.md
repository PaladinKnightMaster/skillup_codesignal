# Nested Loops - Operating Over Multiple Sequential Collections

## Introduction to Nested Loops
Welcome back! You've explored the essentials of `for`, `each`, `while`, and `until` loops in Ruby. These loops are powerful tools for handling repetitive tasks efficiently. In this lesson, we're going to dive deeper into nested loops — loops within loops. Nested loops enable you to work with more complex data structures and scenarios, where a single loop wouldn't suffice.

## What You'll Learn
In this lesson, you'll learn how to use nested loops to operate over multiple sequential collections. This technique is useful when dealing with multi-dimensional data or when tasks require multiple levels of iteration. Let's consider this code example:

```Ruby
# Planning sightseeing on a multi-country tour
places_to_visit = {
    "India" => ["Taj Mahal", "Red Fort"],
    "Italy" => ["Leaning Tower of Pisa", "Venice Canal"]
}

# Outer loop iterates over each country in the hash, taking the country name and places to visit with variables country and places
places_to_visit.each do |country, places|
    puts "In #{country}, plan to visit:"
    # Inner loop iterates over each place in the country array, taking the place name with the variable place and printing it
    places.each do |place|
        puts "- #{place}"
    end
end
```

Here, we have a hash of countries paired with arrays representing places to visit in each country. Using a nested loop, we can iterate through each country and its corresponding places, displaying a well-structured sightseeing plan.

Let's understand how the loops work in this example:

1. **Outer Loop**: The `each` method on the hash iterates through each key-value pair. For each iteration:

- `country` represents the key (the country name).
- `places` represents the value (an array of places to visit in that country).

2. **Inner Loop**: Within the outer loop, another `each` method is called on the array `places`. For each place in the array:

- The inner loop prints the place prefixed with a hyphen.

## Why It Matters
Understanding and mastering nested loops is crucial for several reasons:

1. **Handling Complex Data**: Many real-world problems involve multi-layered data. For instance, you might have data stored in matrices, lists of lists, or hashes of arrays. Nested loops help process these complex data structures efficiently.

2. **Multi-step Iterations**: Certain tasks require iterating through multiple layers of data. For example, if you're generating invoices for multiple customers, where each customer has multiple orders, nested loops can systematically handle such multi-step processes.

3. **Enhanced Problem-Solving**: Mastering nested loops enhances your ability to tackle more sophisticated programming challenges. It prepares you for scenarios where simple loops fall short, empowering you to write robust and efficient code.

By the end of this lesson, you'll be well-equipped to manage scenarios requiring multiple levels of iteration. Sound exciting? Let's get ready to start the practice section and put nested loops to work!