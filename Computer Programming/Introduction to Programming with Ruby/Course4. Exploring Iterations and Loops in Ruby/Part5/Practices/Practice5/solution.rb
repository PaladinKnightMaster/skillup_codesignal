# accommodation_costs = {
#     "India" => 400,
#     "Germany" => 700,
#     "Canada" => 600
# }

# # TODO: Initialize a variable to store the total cost

# # TODO: Iterate through each value in the accommodation_costs hash, summing the total cost

# # TODO: Calculate the average cost by dividing the total cost by the number of countries

# # TODO: Print the total and average costs, rounding the average to two decimal places



accommodation_costs = {
    "India" => 400,
    "Germany" => 700,
    "Canada" => 600
}

# TODO: Initialize a variable to store the total cost
total_cost = 0

# TODO: Iterate through each value in the accommodation_costs hash, summing the total cost
accommodation_costs.each_value do |cost|
    total_cost += cost
end

# TODO: Calculate the average cost by dividing the total cost by the number of countries
average_cost = total_cost / accommodation_costs.size.to_f

# TODO: Print the total and average costs, rounding the average to two decimal places
puts "Total accommodation costs: #{total_cost}, with an average of: #{average_cost.round(2)} per country."