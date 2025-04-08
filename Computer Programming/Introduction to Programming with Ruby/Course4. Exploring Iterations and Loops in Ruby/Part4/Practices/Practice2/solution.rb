# # Planning sightseeing on a multi-country tour with estimated visit times
# places_to_visit_with_times = {
#     "India" => { "Taj Mahal" => 3, "Red Fort" => 2 },
#     "Italy" => { "Leaning Tower of Pisa" => 1, "Venice Canal" => 4 }
# }

# places_to_visit_with_times.each do |country, places|
#     puts "In #{country}, plan to visit:"
#     # TODO: Besides the place name, also print the estimated visit time in the format " - #{place} (Estimated visit time: <time>)"
#     places.each do |place, _|
#         puts " - #{place}"
#     end
# end

# Planning sightseeing on a multi-country tour with estimated visit times
places_to_visit_with_times = {
    "India" => { "Taj Mahal" => 3, "Red Fort" => 2 },
    "Italy" => { "Leaning Tower of Pisa" => 1, "Venice Canal" => 4 }
}

places_to_visit_with_times.each do |country, places|
    puts "In #{country}, plan to visit:"
    # TODO: Besides the place name, also print the estimated visit time in the format " - #{place} (Estimated visit time: <time>)"
    places.each do |place, time|
        puts " - #{place} (Estimated visit time: #{time} hours)"
    end
end