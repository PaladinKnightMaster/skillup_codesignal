# Introduction to Loops - Basic for and each Loops

## Welcome to Loops in Ruby
Ready to dive into the powerful world of loops in Ruby? In this lesson, we're going to explore the foundational concepts of loops, focusing on `for` and `each` loops. Whether you're new to programming or just getting started with Ruby, mastering loops is essential. Loops allow us to repeat actions without writing repetitive code, making our programs more efficient and easier to read.

## What You'll Learn
In this lesson, you will learn how to use `for` and `each` loops to iterate through collections, such as arrays. Let's start with a quick look at an example.

Suppose you have a list of countries you plan to visit:

```Ruby
# Iterate through a collection of countries
countries = ["Japan", "France", "Brazil", "Egypt"]

for country in countries
    puts "Processing travel itinerary for #{country}."
end
```

The code above helps you process travel itineraries for each country in the list. Notice how the for loop makes it easy to handle each country one by one.

We also have another loop type called `each`, which provides a cleaner syntax:

```Ruby
# Using each loop for clean syntax
countries.each do |country|
    puts "Reviewing adventure options in #{country}."
end
```

In this code, the `each` loop does the same job as the `for` loop but in a more Ruby-like way – aligning better with Ruby's design philosophy. In addition, the `each` method creates a new scope for the block variables, preventing potential conflicts with variables outside the block - we will cover the concept of scope in more detail later.

## Why It's Important
Understanding loops is crucial because they handle repetitive tasks without needing to write the same code multiple times. Imagine having to manually type out actions for dozens or even thousands of items — loops save us from this tedious work. They enable us to perform consistent operations on collections, such as arrays or hashes, efficiently.

When you master loops, you'll be able to automate processes, making your code more effective and your development process faster. This will enhance your problem-solving skills and allow you to tackle more complex challenges with confidence.

Excited to get started? Let's head over to the practice section and put these new skills to work!
