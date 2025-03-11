# Iterate through a collection of countries
countries = ["Japan", "France", "Brazil", "Egypt"]

for country in countries
    puts "Processing travel itinerary for #{country}."
end

puts "" # Empty line for separation
# Using each loop for clean syntax
countries.each do |country|
    puts "Reviewing adventure options in #{country}."
end