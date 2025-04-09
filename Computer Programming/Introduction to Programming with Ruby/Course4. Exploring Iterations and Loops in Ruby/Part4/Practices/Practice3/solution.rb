# # Planning sightseeing on a multi-country tour
# places_to_visit = {
#     "India" => ["Taj Mahal", "Red Fort"],
#     "Italy" => ["Leaning Tower of Pisa", "Venice Canals", "Milan Cathedral", "Venice Beach"]
# }

# places_to_visit.each do |country, places|
#     puts "In #{country}, plan to visit:"
#     places.each do |place|
#         # TODO: Skip any places that have "Venice" in their name. Hint - use include? method to check if the place name includes "Venice"

#         puts "- #{place}"
#     end
# end


# Planning sightseeing on a multi-country tour
places_to_visit = {
    "India" => ["Taj Mahal", "Red Fort"],
    "Italy" => ["Leaning Tower of Pisa", "Venice Canals", "Milan Cathedral", "Venice Beach"]
}

places_to_visit.each do |country, places|
    puts "In #{country}, plan to visit:"
    places.each do |place|
        # TODO: Skip any places that have "Venice" in their name. Hint - use include? method to check if the place name includes "Venice"
        if place.include?("Venice")
            next
        end

        puts "- #{place}"
    end
end