# # Assume we are developing a travel application with a feature for airport codes
# airport_codes = {
#     "JFK" => {"city" => "New York", "country" => "USA"},
#     "LAX" => {"city" => "Los Angeles", "country" => "USA"},
#     "LHR" => {"city" => "London", "country" => "UK"},
#     "HND" => {"city" => "Tokyo", "country" => "Japan"}
# }

# airport_codes["JFK"]["country"] = "United States"

# # TODO: Change the initial "city" value for the "JFK" key to "Brooklyn"

# puts airport_codes["JFK"]

# Assume we are developing a travel application with a feature for airport codes
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "USA"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}

airport_codes["JFK"]["country"] = "United States"

# TODO: Change the initial "city" value for the "JFK" key to "Brooklyn"
airport_codes["JFK"]["city"] = "Brooklyn"

puts airport_codes["JFK"]