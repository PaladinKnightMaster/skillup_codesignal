# age = 25

# # TODO: Use if-else statements to determine and print the travel package:
# # - "You are eligible for the youth adventure package." if age is below 18.
# # - "You are eligible for the student adventure package." if age is between 18 and 24 inclusive.
# # - "You are eligible for the adult adventure package." if age is between 25 and 59 inclusive.
# # - "You are eligible for the senior adventure package." if age is 60 and above.




age = 25

# TODO: Use if-else statements to determine and print the travel package:
# - "You are eligible for the youth adventure package." if age is below 18.
# - "You are eligible for the student adventure package." if age is between 18 and 24 inclusive.
# - "You are eligible for the adult adventure package." if age is between 25 and 59 inclusive.
# - "You are eligible for the senior adventure package." if age is 60 and above.

if age < 18
    puts "You are eligible for the youth adventure package."
elsif age >= 18 && age <= 24
    puts "You are eligible for the student adventure package."
elsif age >= 25 && age <= 59
    puts "You are eligible for the adult adventure package."
else
    puts "You are eligible for the senior adventure package."
end