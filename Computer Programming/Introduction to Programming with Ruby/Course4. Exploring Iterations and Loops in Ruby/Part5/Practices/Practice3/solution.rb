# visit_durations = {
#     "France" => 5,
#     "Japan" => 7,
#     "Australia" => 10
# }

# total_days = 0

# # TODO: Use the each_key method to iterate over the keys of the visit_durations hash and then calculate the total days
# visit_durations.each_value do |days|
#     total_days += days
# end

# average_visit = total_days / visit_durations.size.to_f

# puts "Total days of travels: #{total_days}, with an average stay of: #{average_visit.round(2)} days."


visit_durations = {
    "France" => 5,
    "Japan" => 7,
    "Australia" => 10
}

total_days = 0

# TODO: Use the each_key method to iterate over the keys of the visit_durations hash and then calculate the total days
visit_durations.each_key do |country|
    total_days += visit_durations[country]
end

average_visit = total_days / visit_durations.size.to_f

puts "Total days of travels: #{total_days}, with an average stay of: #{average_visit.round(2)} days."