# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe with company's employee data
# employee_df <- tibble(
#   ID = 1:5,
#   Name = c("Sarah", "Tom", "Michael", "Anna", "James"),
#   Age = c(45, 34, 27, 30, 39),
#   Experience = c(20, 12, 5, 8, 15),
#   Salary = c(90000, 70000, 40000, 60000, 80000)
# )

# # Summarize the data to get sum of the salaries
# total_salary <- employee_df %>% sum(TotalSalary = sum(Salary))
# print("Total salary of the employees:")
# print(total_salary)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe with company's employee data
employee_df <- tibble(
  ID = 1:5,
  Name = c("Sarah", "Tom", "Michael", "Anna", "James"),
  Age = c(45, 34, 27, 30, 39),
  Experience = c(20, 12, 5, 8, 15),
  Salary = c(90000, 70000, 40000, 60000, 80000)
)

# Summarize the data to get sum of the salaries
total_salary <- employee_df %>% summarize(TotalSalary = sum(Salary))
print("Total salary of the employees:")
print(total_salary)