# budget = 1200
# spent = 0
# amount = 250

# while spent + amount <= budget
#   spent += amount
#   puts "Spent #{spent} so far"

#   # TODO: Add a condition to break the loop if the spent amount exceeds 500
# end

# puts "Budget is now #{budget - spent}"


budget = 1200
spent = 0
amount = 250

while spent + amount <= budget
  spent += amount
  puts "Spent #{spent} so far"

  # TODO: Add a condition to break the loop if the spent amount exceeds 500
    if spent > 500
        puts "Spent limit exceeded, breaking the loop."
        break
    end
end

puts "Budget is now #{budget - spent}"