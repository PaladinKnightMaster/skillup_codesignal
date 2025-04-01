# # Real-life example: Checking items in a packing list
# packing_list = ["t-shirt", "pants", "socks", "hat", "sunscreen", "snacks"]
# max_items = 4
# items_packed = 0

# packing_list.each do |item|
#     # TODO: Add condition to break the loop if items_packed equals max_items
#         # TODO: Print message "Max items packed. Exiting loop."

#     items_packed += 1

#     if item == "hat"
#         puts "Found hat. No need to check size."
#         next
#     end
#     puts "Packing: #{item}"
# end


# Real-life example: Checking items in a packing list
packing_list = ["t-shirt", "pants", "socks", "hat", "sunscreen", "snacks"]
max_items = 4
items_packed = 0

packing_list.each do |item|
    # TODO: Add condition to break the loop if items_packed equals max_items
        # TODO: Print message "Max items packed. Exiting loop."
    if items_packed == max_items
        puts "Max items packed. Exiting loop."
        break
    end

    items_packed += 1

    if item == "hat"
        puts "Found hat. No need to check size."
        next
    end
    puts "Packing: #{item}"
end