# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe with employee data
# employee_df <- tibble(
#   EmployeeID = 1:5,
#   Name = c("Ryan", "Rachel", "Tom", "Harry", "Olivia"),
#   Age = c(32, 28, 40, 36, 31),
#   HoursWorked = c(160, 120, 175, 140, 185),
#   Salary = c(60000, 50000, 70000, 55000, 75000)
# )

# # TODO: Summarize the data to get the average hours worked

# # TODO: Print the average hours worked

# # TODO: Group by hours worked > 150 and summarise

# # TODO: Print the average hours worked and average salary grouped by HoursWorked > 150



suppressPackageStartupMessages(library(dplyr))

# Sample dataframe with employee data
employee_df <- tibble(
  EmployeeID = 1:5,
  Name = c("Ryan", "Rachel", "Tom", "Harry", "Olivia"),
  Age = c(32, 28, 40, 36, 31),
  HoursWorked = c(160, 120, 175, 140, 185),
  Salary = c(60000, 50000, 70000, 55000, 75000)
)

# TODO: Summarize the data to get the average hours worked
avg_hours_worked <- employee_df %>% summarize(AvgHoursWorked = mean(HoursWorked))

# TODO: Print the average hours worked
print("Average hours worked:")
print(avg_hours_worked)

# TODO: Group by hours worked > 150 and summarise
grouped_summary <- employee_df %>% group_by(HoursWorked > 150) %>% summarize(AvgHoursWorked = mean(HoursWorked), AvgSalary = mean(Salary))

# TODO: Print the average hours worked and average salary grouped by HoursWorked > 150
print("Average hours worked and average salary grouped by HoursWorked > 150:")
print(grouped_summary)