# TODO: Create a simple hash to hold country and its notable city with pairs (France, Paris) (Japan, Tokyo) and (India, Mumbai)

# TODO: Access and print the value for the key "France"

# TODO: Add a new key-value pair for "Australia" with the value "Sydney"

# TODO: Remove the key-value pair for "India"

# TODO: Update the value for the key "France" to "Lyon"

# TODO: Print the updated hash



# TODO: Create a simple hash to hold country and its notable city with pairs (France, Paris) (Japan, Tokyo) and (India, Mumbai)
notable_cities = {
    "France" => "Paris",
    "Japan" => "Tokyo",
    "India" => "Mumbai"
}

# TODO: Access and print the value for the key "France"
puts "The notable city in France is: #{notable_cities["France"]}"

# TODO: Add a new key-value pair for "Australia" with the value "Sydney"
notable_cities["Australia"] = "Sydney"

# TODO: Remove the key-value pair for "India"
notable_cities.delete("India")

# TODO: Update the value for the key "France" to "Lyon"
notable_cities["France"] = "Lyon"

# TODO: Print the updated hash
puts "Updated list of countries and their notable cities: #{notable_cities}"