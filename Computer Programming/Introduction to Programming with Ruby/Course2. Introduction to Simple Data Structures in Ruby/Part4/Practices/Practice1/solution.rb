# Assume we are developing a travel application with a feature for airport codes
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "USA"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}

# Retrieve city and country from a specific airport code
puts "#{airport_codes["LHR"]["city"]}, #{airport_codes["LHR"]["country"]}"

# Adding a new airport with nested hash
airport_codes["BOM"] = {"city" => "Mumbai", "country" => "India", "rating" => "5.0"}
puts airport_codes

# Updating an existing nested hash
airport_codes["LAX"]["country"] = "United States"
puts airport_codes

# Deleting an element
airport_codes.delete("HND")
puts airport_codes