# # Check for travel eligibility based on passport possession
# passport = true

# if passport
#     puts "You are eligible to travel."
# else
#     puts "You cannot travel without a passport."
# end

# destination = "Mars"

# # TODO: Change the if statement to use != operator to check if destination is not Mars
# # and print appropriate messages per the description - "Happy travel" or "Sorry, we don't have Mars travel yet. Come again later."
# if destination == "Mars"
#     puts "Sorry, we don't have Mars travel yet. Come again later."
# else
#     puts "Happy travel"
# end




# Check for travel eligibility based on passport possession
passport = true

if passport
    puts "You are eligible to travel."
else
    puts "You cannot travel without a passport."
end

destination = "Mars"

# TODO: Change the if statement to use != operator to check if destination is not Mars
# and print appropriate messages per the description - "Happy travel" or "Sorry, we don't have Mars travel yet. Come again later."
if destination != "Mars"
    puts "Happy travel"
else
    puts "Sorry, we don't have Mars travel yet. Come again later."
end