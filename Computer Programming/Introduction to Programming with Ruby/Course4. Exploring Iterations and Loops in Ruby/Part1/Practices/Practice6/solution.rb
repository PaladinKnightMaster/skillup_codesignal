# TODO: Define a collection of famous landmarks: ["Eiffel Tower", "Great Wall of China", "Machu Picchu", "Pyramids of Giza"]

# TODO: Use a for loop to iterate through each landmark
# and print a message in the format: "Taking photos at [landmark]."

# TODO: Use an each loop to iterate through each landmark
# and print a message in the format: "Learning history of [landmark]."


# TODO: Define a collection of famous landmarks: ["Eiffel Tower", "Great Wall of China", "Machu Picchu", "Pyramids of Giza"]

# TODO: Use a for loop to iterate through each landmark
# and print a message in the format: "Taking photos at [landmark]."

# TODO: Use an each loop to iterate through each landmark
# and print a message in the format: "Learning history of [landmark]."
landmarks = ["Eiffel Tower", "Great Wall of China", "Machu Picchu", "Pyramids of Giza"]

for landmark in landmarks
  puts "Taking photos at #{landmark}."
end

puts "" # Empty line for separation

landmarks.each do |landmark|
  puts "Learning history of #{landmark}."
end