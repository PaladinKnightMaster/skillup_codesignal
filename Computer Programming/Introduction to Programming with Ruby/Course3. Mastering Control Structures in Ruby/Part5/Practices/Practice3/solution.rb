# # Handling a complex travel planning scenario involving multiple conditions
# traveler = {
#     "passport" => true,
#     "visa" => {"required" => true, "obtained" => false},
#     "tickets" => true
#     # TODO: Add health_certificate to the traveler hash with a value of false
# }

# # TODO: Modify the conditional statement below to check for the health_certificate in addition to the other criteria
# if traveler['passport'] && traveler['tickets']
#     if traveler['visa']['required'] && !traveler['visa']['obtained']
#         puts "You need to obtain a visa to continue with your travels."
#     else
#         puts "You are all set for your journey."
#     end
# else
#     # TODO: Update the message to include the health certificate as well.
#     puts "Checklist incomplete! Ensure passport and tickets are ready."
# end


# Handling a complex travel planning scenario involving multiple conditions
traveler = {
    "passport" => true,
    "visa" => {"required" => true, "obtained" => false},
    "tickets" => true,
    # TODO: Add health_certificate to the traveler hash with a value of false
    "health_certificate" => false
}

# TODO: Modify the conditional statement below to check for the health_certificate in addition to the other criteria
if traveler['passport'] && traveler['tickets'] && traveler['health_certificate']
    if traveler['visa']['required'] && !traveler['visa']['obtained']
        puts "You need to obtain a visa to continue with your travels."
    else
        puts "You are all set for your journey."
    end
else
    # TODO: Update the message to include the health certificate as well.
    puts "Checklist incomplete! Ensure passport, tickets, and health certificate are ready."
end