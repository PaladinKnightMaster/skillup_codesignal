# # Calculate total and average number of cultural events attended in different countries
# event_counts = {
#     "Mexico" => 5,
#     "Ireland" => 4,
#     "Japan" => 6
# }

# total_events = 0
# # TODO: Iterate through each value in the event_counts hash
#     # TODO: Sum the total number of events

# # TODO: Calculate the average number of events per country

# puts "Total cultural events attended: #{total_events}, with an average of: #{average_events.round(2)} per country."


# Calculate total and average number of cultural events attended in different countries
event_counts = {
    "Mexico" => 5,
    "Ireland" => 4,
    "Japan" => 6
}

total_events = 0
# TODO: Iterate through each value in the event_counts hash
    # TODO: Sum the total number of events
event_counts.each_value do |events|
    total_events += events
end

# TODO: Calculate the average number of events per country
average_events = total_events / event_counts.size.to_f

puts "Total cultural events attended: #{total_events}, with an average of: #{average_events.round(2)} per country."