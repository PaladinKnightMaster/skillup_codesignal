# # Planning a trip based on destinations hash and visited status
# destinations = {
#     "Nepal" => {"must_see" => "Mount Everest", "visited" => false},
#     "Italy" => {"must_see" => "Colosseum", "visited" => true},
#     "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false}
# }

# # TODO: Change the value of `destination` to "Australia"
# destination = "Nepal"

# if destinations[destination]["visited"]
#     puts "You have already visited #{destination}, remember visiting #{destinations[destination]['must_see']}?"
# else
#     puts "You have not yet visited #{destination}. Don't miss #{destinations[destination]['must_see']}!"
# end

# # Check if favorite fruits list contains certain fruits
# favorite_fruits = ["apple", "banana", "mango"]

# # TODO: Change the value of `fruit_to_check` to "pineapple"
# fruit_to_check = "apple"

# if favorite_fruits.include?(fruit_to_check)
#     puts "#{fruit_to_check.capitalize} is one of your favorite fruits!"
# else
#     puts "#{fruit_to_check.capitalize} is not in your list of favorite fruits."
# end


# Planning a trip based on destinations hash and visited status
destinations = {
    "Nepal" => {"must_see" => "Mount Everest", "visited" => false},
    "Italy" => {"must_see" => "Colosseum", "visited" => true},
    "Australia" => {"must_see" => "Great Barrier Reef", "visited" => false}
}

# TODO: Change the value of `destination` to "Australia"
destination = "Australia"

if destinations[destination]["visited"]
    puts "You have already visited #{destination}, remember visiting #{destinations[destination]['must_see']}?"
else
    puts "You have not yet visited #{destination}. Don't miss #{destinations[destination]['must_see']}!"
end

# Check if favorite fruits list contains certain fruits
favorite_fruits = ["apple", "banana", "mango"]

# TODO: Change the value of `fruit_to_check` to "pineapple"
fruit_to_check = "pineapple"

if favorite_fruits.include?(fruit_to_check)
    puts "#{fruit_to_check.capitalize} is one of your favorite fruits!"
else
    puts "#{fruit_to_check.capitalize} is not in your list of favorite fruits."
end