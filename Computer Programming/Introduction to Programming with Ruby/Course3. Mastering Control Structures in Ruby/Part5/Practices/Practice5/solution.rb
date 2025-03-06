# traveler = {
#     "passport" => true,
#     "visa" => {"required" => true, "obtained" => false},
#     "tickets" => true
# }

# if traveler['passport'] && traveler['tickets']
#     # TODO: Check if visa is required and not obtained
#         # If visa is required and not obtained, print a message "You need to obtain a visa to continue with your travels."
#         # Otherwise, print a message "You are all set for your journey."
#     end
# else
#     puts "Checklist incomplete! Ensure passport and tickets are ready."
# end


traveler = {
    "passport" => true,
    "visa" => {"required" => true, "obtained" => false},
    "tickets" => true
}

if traveler['passport'] && traveler['tickets']
    # TODO: Check if visa is required and not obtained
        # If visa is required and not obtained, print a message "You need to obtain a visa to continue with your travels."
        # Otherwise, print a message "You are all set for your journey."
    if traveler['visa']['required'] && !traveler['visa']['obtained']
        puts "You need to obtain a visa to continue with your travels."
    else
        puts "You are all set for your journey."
    end
else
    puts "Checklist incomplete! Ensure passport and tickets are ready."
end