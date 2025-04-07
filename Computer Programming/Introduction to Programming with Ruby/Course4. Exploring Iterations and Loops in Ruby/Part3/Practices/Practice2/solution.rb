fruits = ["apple", "banana", "grape", "mango", "pear", "orange"]

i = 0

# Loop through the fruits array and process each fruit
while i < fruits.length
    # Get the fruit at the current index `i`
    fruit = fruits[i]

    # Increment the index `i`
    i += 1

    # Skip the current fruit if it is a banana
    if fruit == "banana"
        puts "Skipping #{fruit}"
        next
    end

    # Stop the loop if the current fruit is a mango
    if fruit == "mango"
        puts "Found #{fruit}, stopping loop."
        break
    end

    puts "Processing #{fruit}"
end