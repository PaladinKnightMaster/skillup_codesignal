# Assume we are developing a travel application with a feature for airport codes
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "USA"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}

# TODO: Print city and country for airport "LHR"

# TODO: Adding a new airport with code "BOM" with nested values city: "Mumbai", country: "India", and an extra field rating: "5.0"

# TODO: Updating an existing nested hash for "LAX" by setting the country to "United States"

# TODO: Deleting an element with code "HND"

puts airport_codes


# Assume we are developing a travel application with a feature for airport codes
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "USA"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}

# TODO: Print city and country for airport "LHR"
puts "#{airport_codes["LHR"]["city"]}, #{airport_codes["LHR"]["country"]}"

# TODO: Adding a new airport with code "BOM" with nested values city: "Mumbai", country: "India", and an extra field rating: "5.0"
airport_codes["BOM"] = {"city" => "Mumbai", "country" => "India", "rating" => "5.0"}

# TODO: Updating an existing nested hash for "LAX" by setting the country to "United States"
airport_codes["LAX"]["country"] = "United States"

# TODO: Deleting an element with code "HND"
airport_codes.delete("HND")

puts airport_codes