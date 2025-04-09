# landmarks = {
#     "Egypt" => ["Pyramids of Giza", "Sphinx"],
#     "Greece" => ["Parthenon", "Temple of Olympian Zeus"]
# }

# # TODO: Use nested loops to print each country and its landmarks
#     # Print "In [country], visit these landmarks:"

#     # TODO: Iterate through the landmarks and print each one.


landmarks = {
    "Egypt" => ["Pyramids of Giza", "Sphinx"],
    "Greece" => ["Parthenon", "Temple of Olympian Zeus"]
}

# TODO: Use nested loops to print each country and its landmarks
    # Print "In [country], visit these landmarks:"

    # TODO: Iterate through the landmarks and print each one.
landmarks.each do |country, landmarks|
    puts "In #{country}, visit these landmarks:"
    landmarks.each do |landmark|
        puts landmark
    end
end