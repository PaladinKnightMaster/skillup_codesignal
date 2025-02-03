# # Assume we are developing a travel application with a feature for airport codes
# airport_codes = [
#     "JFK" => {"city" => "New York", "country" => "USA"},
#     "LAX" => {"city" => "Los Angeles", "country" => "United States"},
#     "LHR" => {"city" => "London", "country" => "UK"},
#     "HND" => {"city" => "Tokyo", "country" => "Japan"}
# ]

# # Adding a new airport with nested hash
# airport_codes["BOM"] = {"city" => "Mumbai", "country" => "India"}

# # Display the newly added airport city and country
# puts "#{airport_codes["BOM"]["city"]}, #{airport_codes["BOM"]["country"]}"

# Assume we are developing a travel application with a feature for airport codes
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "United States"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}

# Adding a new airport with nested hash
airport_codes["BOM"] = {"city" => "Mumbai", "country" => "India"}

# Display the newly added airport city and country
puts "#{airport_codes["BOM"]["city"]}, #{airport_codes["BOM"]["country"]}"