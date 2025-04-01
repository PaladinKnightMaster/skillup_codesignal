# todo_list = ["laundry", "dishes", "vacuum", "groceries", "clean windows"]

# todo_list.each do |task|
#     if task = "groceries"
#         puts "Found groceries. Will do it later: skipping the task."
#         next
#     end
#     puts "Doing: #{task}"
# end


todo_list = ["laundry", "dishes", "vacuum", "groceries", "clean windows"]

todo_list.each do |task|
    if task == "groceries"
        puts "Found groceries. Will do it later: skipping the task."
        next
    end
    puts "Doing: #{task}"
end