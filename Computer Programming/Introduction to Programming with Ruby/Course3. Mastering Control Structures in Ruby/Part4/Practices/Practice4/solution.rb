# # Planning a trip based on destinations hash and visited status
# destinations = {
#     "Nepal" => {"must_see" => "Mount Everest", "visited" => false},
#     # TODO: Add another entry for Italy, with the must-see location as "Colosseum" and visited status as true
#     "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false}
# }

# # TODO: Check if Italy has been visited, and print the appropriate message
#     puts "You've already visited Italy, let's try another destination!"
# else
#     puts "You haven't visited Italy yet. Don't miss the Colosseum!"
# end


# Planning a trip based on destinations hash and visited status
destinations = {
    "Nepal" => {"must_see" => "Mount Everest", "visited" => false},
    # TODO: Add another entry for Italy, with the must-see location as "Colosseum" and visited status as true
    "Italy" => {"must_see" => "Colosseum", "visited" => true},
    "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false}
}

# TODO: Check if Italy has been visited, and print the appropriate message
if destinations["Italy"]["visited"]
    puts "You've already visited Italy, let's try another destination!"
else
    puts "You haven't visited Italy yet. Don't miss the Colosseum!"
end