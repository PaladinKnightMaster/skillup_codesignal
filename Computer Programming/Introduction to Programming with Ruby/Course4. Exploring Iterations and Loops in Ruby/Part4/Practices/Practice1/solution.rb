# Planning sightseeing on a multi-country tour
places_to_visit = {
    "India" => ["Taj Mahal", "Red Fort"],
    "Italy" => ["Leaning Tower of Pisa", "Venice Canal"]
}

# Outer loop iterates over each country in the hash, taking the country name and places to visit with variables country and places
places_to_visit.each do |country, places|
    puts "In #{country}, plan to visit:"
    # Inner loop iterates over each place in the country array, taking the place name with the variable place and printing it
    places.each do |place|
        puts "- #{place}"
    end
end