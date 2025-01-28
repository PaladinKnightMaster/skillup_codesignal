# # Create a simple hash to hold country and its famous dishes
# famous_dishes = {
#     "Italy" => "Pizza",
#     "Japan" => "Sushi",
#     "Mexico" => "Tacos"
# }

# # TODO: Add the key-value pair for "China" with the value "Dumplings"

# # TODO: Update the value for the key "Japan" with the value "Ramen"

# # TODO: Remove the key-value pair for "Mexico"

# # Displaying the updated hash
# puts "Updated list of countries and their famous dishes: #{famous_dishes}"


# Create a simple hash to hold country and its famous dishes
famous_dishes = {
    "Italy" => "Pizza",
    "Japan" => "Sushi",
    "Mexico" => "Tacos"
}

# TODO: Add the key-value pair for "China" with the value "Dumplings"
famous_dishes["China"] = "Dumplings"

# TODO: Update the value for the key "Japan" with the value "Ramen"
famous_dishes["Japan"] = "Ramen"

# TODO: Remove the key-value pair for "Mexico"
famous_dishes.delete("Mexico")

# Displaying the updated hash
puts "Updated list of countries and their famous dishes: #{famous_dishes}"