budget = 1200
spent = 0

amount = 250

# The condition checks if we can spend the amount without exceeding the budget limit
# The loop will run as long as the spent amount plus the new amount is less than or equal to the budget
while spent + amount <= budget
    # If the condition is true, we update the spent amount and print the total spent so far
    spent += amount
    puts "Spent #{spent} so far"
end

puts "Budget is now #{budget - spent}"

spent = 0

# The condition checks if we can spend the amount without exceeding the budget limit
# The loop will run until the spent amount plus the new amount exceeds the budget
until spent + amount > budget
    # If the condition is false, we update the spent amount and print the total spent so far
    spent += amount
    puts "Spent #{spent} so far"
end

puts "Budget is now #{budget - spent}"