# Establish traveler's age to decide appropriate travel package
age = 25

if age < 18
    puts "You are eligible for the youth adventure package."
elsif age < 60
    puts "You are eligible for the adult adventure package."
else
    puts "You are eligible for the senior adventure package."
end