# # Discovering cuisines on a culinary tour
# cuisines_to_try = {
#     "Japan" => ["Sushi", "Ramen"],
#     "Mexico" => ["Tacos", "Enchiladas"]
# }

# cuisines_to_try.each do |country, dishes|
#     puts "In #{country}, try the following dishes:"

#     # TODO: Iterate over each dish in the 'dishes' array and print it out with dashes

# end


# Discovering cuisines on a culinary tour
cuisines_to_try = {
    "Japan" => ["Sushi", "Ramen"],
    "Mexico" => ["Tacos", "Enchiladas"]
}

cuisines_to_try.each do |country, dishes|
    puts "In #{country}, try the following dishes:"

    # TODO: Iterate over each dish in the 'dishes' array and print it out with dashes
    dishes.each do |dish|
        puts "- #{dish}"
    end

end