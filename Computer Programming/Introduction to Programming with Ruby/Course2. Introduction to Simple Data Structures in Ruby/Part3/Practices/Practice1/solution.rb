# Create a simple hash to hold country and its notable city
notable_cities = {
    "France" => "Paris",
    "Japan" => "Tokyo",
    "India" => "Mumbai"
}

# Accessing a value in the hash
puts "The notable city in France is: #{notable_cities["France"]}"

# Adding a new key-value pair
notable_cities["Australia"] = "Sydney"

# Removing a key-value pair
notable_cities.delete("India")

# Updating an existing key-value pair
notable_cities["France"] = "Lyon"

# Displaying the updated hash
puts "Updated list of countries and their notable cities: #{notable_cities}"