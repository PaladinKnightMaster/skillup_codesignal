# # Planning a trip based on destinations hash and visited status
# destinations = {
#     "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false},
#     "France" => {"must_see" => "Eiffel Tower", "visited" => false}
# }

# destination = "France"

# # TODO: Modify the code to check if the destination has not been visited using the negation operator
# # The output should be "Not yet visited France." if the destination has not been visited and "Already visited France." otherwise
# if destinations[destination]["visited"]
#     puts "Already visited #{destination}."
# else
#     puts "Not yet visited #{destination}."
# end



# Planning a trip based on destinations hash and visited status
destinations = {
    "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false},
    "France" => {"must_see" => "Eiffel Tower", "visited" => false}
}

destination = "France"

# TODO: Modify the code to check if the destination has not been visited using the negation operator
# The output should be "Not yet visited France." if the destination has not been visited and "Already visited France." otherwise
if !destinations[destination]["visited"]
    puts "Not yet visited #{destination}."
else
    puts "Already visited #{destination}."
end