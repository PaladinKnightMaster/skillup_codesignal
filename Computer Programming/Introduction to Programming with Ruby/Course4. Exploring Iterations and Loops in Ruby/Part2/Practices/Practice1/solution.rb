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
        puts "Found honey. Honey never expires: skipping Expiration Date check."
        next
    end
    puts "Checking Expiration Date: #{item}"
end