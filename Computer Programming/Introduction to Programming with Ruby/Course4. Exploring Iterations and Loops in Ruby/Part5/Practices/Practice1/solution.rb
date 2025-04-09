# Initialize a hash with countries and their respective visit durations
visit_durations = {
    "France" => 5,
    "Japan" => 7,
    "Australia" => 10
}

total_days = 0

# Iterate through the values of the hash and calculate the total days spent by incrementing the total_days variable by each value
visit_durations.each_value do |days|
    total_days += days
end

# Calculate the average stay by dividing the total days by the number of countries visited (size of the hash)
average_visit = total_days / visit_durations.size.to_f # to_f is used to convert to float

puts "Total days of travels: #{total_days}, with an average stay of: #{average_visit.round(2)} days." # round(2) is used to round to 2 decimal places