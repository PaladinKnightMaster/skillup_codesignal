budget = 500

if budget >= 1000
    puts "You can go on an international trip."
elsif budget >= 500
    puts "You can go on a domestic trip."
else
    puts "You might consider a local trip."
end

days_left = 3

if days_left > 5
    puts "You have plenty of time to prepare."
elsif days_left >= 3
    puts "Start preparing your travel itinerary."
else
    puts "You need to hurry with your preparations."
end