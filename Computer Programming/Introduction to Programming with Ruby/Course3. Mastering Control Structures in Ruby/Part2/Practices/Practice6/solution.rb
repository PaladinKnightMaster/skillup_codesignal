# days = 45

# # TODO: If the duration is 90 days or more, the traveler needs a long-term visa.
#     puts "You need a long-term visa."
# # TODO: If the duration is more than 30 days but less than 90, the traveler needs a short-term visa.
#     puts "You need a short-term visa."
# else
#     puts "No visa required."
# end



days = 45

# TODO: If the duration is 90 days or more, the traveler needs a long-term visa.
if days >= 90
    puts "You need a long-term visa."
# TODO: If the duration is more than 30 days but less than 90, the traveler needs a short-term visa.
elsif days > 30
    puts "You need a short-term visa."
else
    puts "No visa required."
end