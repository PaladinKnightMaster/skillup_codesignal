# experience_in_sports = {
#   "swimming" => 3,
#   "cycling" => 2,
#   "running" => 5,
#   "triathlon" => 1
# }

# # TODO: Define a variable favorite_sport and assign it to your favorite sport

# # TODO: Write a conditional statement that checks the experience in your favorite sport
# # and prints out a message based on the experience level

# # If the experience is greater than 3, print "You are an expert in #{favorite_sport}"
# # If the experience is greater than 2, print "You are good in #{favorite_sport}"
# # Otherwise, print "You are a beginner in #{favorite_sport}"



experience_in_sports = {
  "swimming" => 3,
  "cycling" => 2,
  "running" => 5,
  "triathlon" => 1
}

# TODO: Define a variable favorite_sport and assign it to your favorite sport
favorite_sport = "running"

# TODO: Write a conditional statement that checks the experience in your favorite sport
# and prints out a message based on the experience level

# If the experience is greater than 3, print "You are an expert in #{favorite_sport}"
# If the experience is greater than 2, print "You are good in #{favorite_sport}"
# Otherwise, print "You are a beginner in #{favorite_sport}"

if experience_in_sports[favorite_sport] > 3
  puts "You are an expert in #{favorite_sport}"
elsif experience_in_sports[favorite_sport] > 2
  puts "You are good in #{favorite_sport}"
else
  puts "You are a beginner in #{favorite_sport}"
end