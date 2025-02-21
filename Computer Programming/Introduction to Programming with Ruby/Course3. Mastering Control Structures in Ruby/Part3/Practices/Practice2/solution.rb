# # Case statement for choosing transport based on the region
# region = "forest"

# case region
# when "desert"
#     puts "Travel by camels recommended."
# when "mountains"
#     puts "Travel by mountain bikes is advisable."
# when "urban"
#     puts "Use public transport or taxis."
# else
#     puts "No specific travel advice available."
# end




# Case statement for choosing transport based on the region
region = "forest"

case region
when "desert"
    puts "Travel by camels recommended."
when "mountains"
    puts "Travel by mountain bikes is advisable."
when "urban"
    puts "Use public transport or taxis."
when "forest"
    puts "Travel by hiking is advisable."
else
    puts "No specific travel advice available."
end