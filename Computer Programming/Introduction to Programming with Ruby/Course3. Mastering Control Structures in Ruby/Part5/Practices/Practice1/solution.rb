# Handling a complex travel planning scenario involving multiple conditions
traveler = {
    "passport" => true,
    "visa" => {"required" => true, "obtained" => false},
    "tickets" => true
}

if traveler['passport'] && traveler['tickets']
    if traveler['visa']['required'] && !traveler['visa']['obtained']
        puts "You need to obtain a visa to continue with your travels."
    else
        puts "You are all set for your journey."
    end
else
    puts "Checklist incomplete! Ensure passport and tickets are ready."
end