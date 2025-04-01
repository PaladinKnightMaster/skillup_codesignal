# daily_agenda = ["emails", "meeting", "lunch", "report", "call", "exercise"]
# max_tasks = 4
# tasks_processed = 0

# daily_agenda.each do |task|
#     # TODO: Update the block below so that besides printing the message, it also breaks the loop
#     if tasks_processed == max_tasks
#         puts "Max tasks processed. Exiting loop."
#     end

#     tasks_processed += 1

#     # TODO: Update the block below so that it skips the task if it's "lunch" or "exercise" besides printing the message
#     if task == "lunch" || task == "exercise"
#         puts "No preparation needed."
#     end

#     puts "Preparing for task: #{task}"
# end


daily_agenda = ["emails", "meeting", "lunch", "report", "call", "exercise"]
max_tasks = 4
tasks_processed = 0

daily_agenda.each do |task|
    # TODO: Update the block below so that besides printing the message, it also breaks the loop
    if tasks_processed == max_tasks
        puts "Max tasks processed. Exiting loop."
        break
    end

    tasks_processed += 1

    # TODO: Update the block below so that it skips the task if it's "lunch" or "exercise" besides printing the message
    if task == "lunch" || task == "exercise"
        puts "No preparation needed."
        next
    end

    puts "Preparing for task: #{task}"
end