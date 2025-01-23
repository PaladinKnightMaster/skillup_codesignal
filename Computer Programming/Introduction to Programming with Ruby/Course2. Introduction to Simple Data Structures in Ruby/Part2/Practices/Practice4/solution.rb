# # Planning an extended trip with mutable destinations
# trip_destinations = ["Brazil", "USA"]
# puts "Destinations in the beginning: #{trip_destinations}"

# # Adding new destinations to the existing list
# trip_destinations.push("Spain", "Portugal")

# # TODO: Remove the element "USA" from the list

# # TODO: Insert a new destination "Japan" at the 3rd position

# puts "Destinations after insertion: #{trip_destinations}"


# Planning an extended trip with mutable destinations
trip_destinations = ["Brazil", "USA"]
puts "Destinations in the beginning: #{trip_destinations}"

# Adding new destinations to the existing list
trip_destinations.push("Spain", "Portugal")

# TODO: Remove the element "USA" from the list
trip_destinations.delete("USA")

# TODO: Insert a new destination "Japan" at the 3rd position
trip_destinations.insert(2, "Japan")

puts "Destinations after insertion: #{trip_destinations}"