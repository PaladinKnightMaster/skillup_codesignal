# Loop Controls - break, next

## Dive into Loop Controls
Welcome back! You've already learned the basics of loops in Ruby and how to iterate through collections using `for` and `each` loops. Now, let's take it one step further. In this lesson, we'll explore loop controls, specifically `break` and `next`. These powerful tools give you finer control over your loops, making your code even more efficient and flexible.

## What You'll Learn
In this lesson, you'll discover how to use `break` to exit a loop early and `next` to skip to the next iteration in a loop. These controls can make your loops more sophisticated and adaptable to different scenarios.

Here's a sneak peek at what we'll cover:

```Ruby
shopping_list = ["milk", "eggs", "honey", "bread", "butter", "chocolate"]
max_items = 4
items_processed = 0

# Loop through each item in the shopping list
shopping_list.each do |item|
    # Check if the maximum number of items has been processed
    if items_processed == max_items
        # If the maximum is reached, exit the loop early using 'break'
        puts "Max items processed. Exiting loop."
        break
    end
    # Increment the number of processed items
    items_processed += 1

    # Check if the item is honey, and skip expiration date check using 'next' if true
    if item == "honey"
        puts "Found honey. Honey never expires – skipping Expiration Date check."
        next
    end
    puts "Checking Expiration Date: #{item}"
end
```

Let's break down the code for better understanding:

1. **Initialization**:

- We create an array called `shopping_list` containing several items.
- We set a variable `max_items` to 4, indicating the maximum number of items we want to process.
- We initialize `items_processed` to 0 to keep track of how many items have been processed.

2. **Loop Through Items**:

- The `each` method begins to iterate over each item in the `shopping_list`.

3. **Break Condition**:

- The loop checks if `items_processed` equals `max_items`.
- If true, it prints a message and uses break to exit the loop early.

4. **Increment Processed Items**:

- `items_processed` is incremented by 1 on each iteration, keeping track of the number of processed items.

5. **Next Condition**:

- If the current item is "honey", it prints a message and uses `next` to skip the expiration date check for this iteration, continuing to the next item.

6. **Expiration Date Check**:

- If the current item is not "honey", it prints a message checking the expiration date of the item.

## Why It Matters
Understanding how to control loops with `break` and `next` is vital for writing more effective and readable code. These commands empower you to:

- **Exit loops early**: Using `break`, you can stop a loop when a condition is met, saving time and resources.
- **Skip iterations**: With `next`, you can bypass specific cases within a loop, making your code cleaner and more efficient.

By mastering these loop controls, you'll be able to handle complex looping scenarios with ease, making your programs more robust and dynamic.

Ready to enhance your loop skills? Let's go to the practice section and put `break` and `next` to work!
