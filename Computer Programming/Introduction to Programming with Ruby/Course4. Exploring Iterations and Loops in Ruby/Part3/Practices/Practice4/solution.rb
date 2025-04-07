# booking_budget = 1200
# total_spent = 0
# activity_cost = 250

# while total_spent + activity_cost > booking_budget
#   total_spent = activity_cost
#   puts "Spent #{total_spent} so far"
# end

# puts "Budget is now $#{booking_budget - total_spent}"



booking_budget = 1200
total_spent = 0
activity_cost = 250

while total_spent + activity_cost <= booking_budget
  total_spent += activity_cost
  puts "Spent #{total_spent} so far"
end

puts "Budget is now $#{booking_budget - total_spent}"