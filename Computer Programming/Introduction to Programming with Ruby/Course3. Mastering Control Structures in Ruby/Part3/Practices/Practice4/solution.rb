# # Case statement for choosing transport based on the region
# region = "mountains"

# case region
# # TODO: Check the case for the desert region
#     puts "Travel by camels recommended."
# when "mountains"
#     puts "Travel by mountain bikes is advisable."
# when "urban"
#     puts "Use public transport or taxis."
# # TODO: Check the case for all the other regions
#     # TODO: If none of the cases match, print "No specific travel advice available."
# end




# Case statement for choosing transport based on the region
region = "mountains"

case region
# TODO: Check the case for the desert region
when "desert"
    puts "Travel by camels recommended."
when "mountains"
    puts "Travel by mountain bikes is advisable."
when "urban"
    puts "Use public transport or taxis."
# TODO: Check the case for all the other regions
    # TODO: If none of the cases match, print "No specific travel advice available."
else
    puts "No specific travel advice available."
end