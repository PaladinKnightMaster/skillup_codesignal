# Intialize hash with countries and days spent in each
visit_durations = {
    "France" => 5,
    "Japan" => 7,
    "Australia" => 10
}

total_days = 0

# Iterate over the hash keys and add the value to the total days
visit_durations.each_key do |country|
    # For each country as the key, add the value is retrieved by using the [] operator
    # And the value is added to the total_days
    total_days += visit_durations[country]
end

# Calculate the average visit duration by dividing the total days by the number of countries visited - remember we convert the size to a float to get a decimal result using to_f
average_visit = total_days / visit_durations.size.to_f

puts "Total days of travels: #{total_days}, with an average stay of: #{average_visit.round(2)} days."