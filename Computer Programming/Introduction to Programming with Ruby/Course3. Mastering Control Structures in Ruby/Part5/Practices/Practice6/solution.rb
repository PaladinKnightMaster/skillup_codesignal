# project = {
#     "days_before_deadline" => 5,
#     "stats" => { "completed" => 80, "completion_percentage_per_day" => 2 }
# }

# # TODO: Check if the project is already completed. Use the "completed" key in the "stats" hash to check if it is equal to 100%.
#     # If it is, print "The project is already completed"

# # TODO: Otherwise, calculate how much work the team can do with the given completion percentage per day by multiplying it by the days before the deadline.
#     # If the work that can be done is less than the remaining work (100 - project["stats"]["completed"]), print "You have to work hard to complete the project"
#     # Otherwise, print "You are on track to complete the project"



project = {
    "days_before_deadline" => 5,
    "stats" => { "completed" => 80, "completion_percentage_per_day" => 2 }
}

# TODO: Check if the project is already completed. Use the "completed" key in the "stats" hash to check if it is equal to 100%.
    # If it is, print "The project is already completed"
if project["stats"]["completed"] == 100
    puts "The project is already completed"

# TODO: Otherwise, calculate how much work the team can do with the given completion percentage per day by multiplying it by the days before the deadline.
    # If the work that can be done is less than the remaining work (100 - project["stats"]["completed"]), print "You have to work hard to complete the project"
    # Otherwise, print "You are on track to complete the project"
else
    work_done = project["stats"]["completion_percentage_per_day"] * project["days_before_deadline"]
    remaining_work = 100 - project["stats"]["completed"]
    if work_done < remaining_work
        puts "You have to work hard to complete the project"
    else
        puts "You are on track to complete the project"
    end
end