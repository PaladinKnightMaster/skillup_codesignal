# # Create a simple hash to hold country and its notable cities
# notable_cities = {
#     "France" => "Paris",
#     "Japan" => "Tokyo",
#     "India" => "Mumbai"
# }

# # Accessing a value in the hash
# puts "The notable city in France is: #{notable_cities["France"]}"

# # Adding a new key-value pair
# notable_cities["Australia"] = "Sydney"

# # TODO: Change the following code to remove the key-value pair for France instead
# notable_cities.delete("India")

# # TODO: Change the following code to update an existing key-value pair for Australia instead with value "Canberra"
# notable_cities["France"] = "Lyon"

# # Displaying the updated hash
# puts "Updated list of countries and their notable cities: #{notable_cities}"

# Create a simple hash to hold country and its notable cities
notable_cities = {
    "France" => "Paris",
    "Japan" => "Tokyo",
    "India" => "Mumbai"
}

# Accessing a value in the hash
puts "The notable city in France is: #{notable_cities["France"]}"

# Adding a new key-value pair
notable_cities["Australia"] = "Sydney"

# TODO: Change the following code to remove the key-value pair for France instead
notable_cities.delete("France")

# TODO: Change the following code to update an existing key-value pair for Australia instead with value "Canberra"
notable_cities["Australia"] = "Canberra"

# Displaying the updated hash
puts "Updated list of countries and their notable cities: #{notable_cities}"