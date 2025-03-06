# # Handling a complex travel planning scenario involving multiple conditions
# traveler = {
#     "passport" => true,
#     "visa" => false
# }

# if traveler['passport'] || traveler['visa']
#     puts "Checklist complete!"
# else
#     puts "Checklist incomplete! Ensure passport and tickets are ready."
# end

# Handling a complex travel planning scenario involving multiple conditions
traveler = {
    "passport" => true,
    "visa" => false
}

if traveler['passport'] && traveler['visa']
    puts "Checklist complete!"
else
    puts "Checklist incomplete! Ensure passport and tickets are ready."
end