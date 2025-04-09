suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Summarize the data to get average salary
avg_salary <- sample_df %>% summarize(AvgSalary = mean(Salary))
print("Average salary of the dataframe:")
print(avg_salary)

# Group by a column and summarize
grouped_summary <- sample_df %>% group_by(Age > 30) %>% summarize(AvgSalary = mean(Salary))
print("Average salary grouped by Age > 30:")
print(grouped_summary)