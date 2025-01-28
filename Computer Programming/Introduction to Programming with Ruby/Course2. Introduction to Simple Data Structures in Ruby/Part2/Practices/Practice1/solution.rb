# Planning an extended trip with mutable destinations
trip_destinations = ["Brazil", "USA"]
puts "Destinations in the beginning: #{trip_destinations}"

# Adding new destinations to the existing list
trip_destinations.push("Spain", "Portugal")
puts "Destinations after addition: #{trip_destinations}"

# Removing destinations from the list
trip_destinations.delete("USA")
puts "Destinations after deletion: #{trip_destinations}"

# Insert a new destination at a specific position
trip_destinations.insert(2, "Japan")
puts "Destinations after insertion: #{trip_destinations}"

trip_destinations.delete_at(1)
puts "Destinations after index-deletion: #{trip_destinations}"