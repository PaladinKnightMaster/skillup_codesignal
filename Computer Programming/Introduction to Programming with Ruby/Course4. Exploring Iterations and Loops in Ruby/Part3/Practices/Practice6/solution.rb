# TODO: Initialize budget and spent variables to 1200 and 0 respectively

# TODO: Set the cost of each activity to 250

# TODO: Write a while loop to add the activity cost to spent until budget is reached
# Hint: spent + amount should be less than or equal to budget to be able to spend

# TODO: Print the amount spent in each iteration and final remaining budget

# Reset spent variable to 0 for the next loop

# TODO: Write an until loop to add the activity cost to spent until it exceeds the budget
# Hint: spent + amount should be greater than budget to stop spending

# TODO: Print the amount spent in each iteration and final remaining budget



# TODO: Initialize budget and spent variables to 1200 and 0 respectively
budget = 1200
spent = 0

# TODO: Set the cost of each activity to 250
amount = 250

# TODO: Write a while loop to add the activity cost to spent until budget is reached
# Hint: spent + amount should be less than or equal to budget to be able to spend
while spent + amount <= budget
    spent += amount

# TODO: Print the amount spent in each iteration and final remaining budget
    puts "Spent #{spent} so far"
    puts "Budget is now #{budget - spent}"
end

# Reset spent variable to 0 for the next loop
spent = 0

# TODO: Write an until loop to add the activity cost to spent until it exceeds the budget
# Hint: spent + amount should be greater than budget to stop spending
until spent + amount > budget
    spent += amount
    puts "Spent #{spent} so far"

# TODO: Print the amount spent in each iteration and final remaining budget
    puts "Budget is now #{budget - spent}"
end