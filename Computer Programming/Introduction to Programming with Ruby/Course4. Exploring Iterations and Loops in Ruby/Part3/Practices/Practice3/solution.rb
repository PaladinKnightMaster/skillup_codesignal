# budget = 1000
# spent = 0

# # TODO: Modify the amount spent on each activity to 300 to see how it affects the loop.
# amount = 200

# while spent + amount <= budget
#   spent += amount
#   puts "Booking activities with $#{amount}."
# end

# puts "Budget depleted with $#{spent} spent on activities."


budget = 1000
spent = 0

# TODO: Modify the amount spent on each activity to 300 to see how it affects the loop.
amount = 300

while spent + amount <= budget
  spent += amount
  puts "Booking activities with $#{amount}."
end

puts "Budget depleted with $#{spent} spent on activities."