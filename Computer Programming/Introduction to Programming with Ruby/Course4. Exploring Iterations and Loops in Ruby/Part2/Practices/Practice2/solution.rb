# shopping_list = ["milk", "eggs", "chocolate", "honey", "bread", "butter"]

# shopping_list.each do |item|
#     # TODO: Modify the condition below to check for "chocolate" instead of "honey" - remember to update the output message as well
#     if item == "honey"
#         puts "Found honey. Honey never expires - skipping Expiration Date check."
#         next
#     end
#     puts "Checking Expiration Date: #{item}"
# end

shopping_list = ["milk", "eggs", "chocolate", "honey", "bread", "butter"]

shopping_list.each do |item|
    # TODO: Modify the condition below to check for "chocolate" instead of "honey" - remember to update the output message as well
    if item == "chocolate"
        puts "Found chocolate. Chocolate never expires - skipping Expiration Date check."
        next
    end
    puts "Checking Expiration Date: #{item}"
end