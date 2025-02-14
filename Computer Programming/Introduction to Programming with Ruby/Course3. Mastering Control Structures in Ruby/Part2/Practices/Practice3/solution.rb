# # Establish traveler's age to decide appropriate travel package
# age = 25

# if age < 18
#     puts "You are eligible for the youth adventure package."
# # TODO: Introduce a new category for "Student package" for ages between 18 and 24 both inclusive.
# # This age group should get message "You are eligible for the student adventure package."

# elsif age < 60
#     puts "You are eligible for the adult adventure package."
# else
#     puts "You are eligible for the senior adventure package."
# end




# Establish traveler's age to decide appropriate travel package
age = 25

if age < 18
    puts "You are eligible for the youth adventure package."
# TODO: Introduce a new category for "Student package" for ages between 18 and 24 both inclusive.
# This age group should get message "You are eligible for the student adventure package."
elsif age >= 18 && age <= 24
    puts "You are eligible for the student adventure package."

elsif age < 60
    puts "You are eligible for the adult adventure package."
else
    puts "You are eligible for the senior adventure package."
end