# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # TODO: Change the grouping column from Age to Salary
# # TODO: Change the summarization function from mean to median
# grouped_summary <- sample_df %>% group_by(Age > 30) %>% summarise(MedianSalary = mean(Salary))
# print("Median salary grouped by Salary > 70000:")
# print(grouped_summary)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# TODO: Change the grouping column from Age to Salary
# TODO: Change the summarization function from mean to median
grouped_summary <- sample_df %>% group_by(Salary > 70000) %>% summarise(MedianSalary = median(Salary))
print("Median salary grouped by Salary > 70000:")
print(grouped_summary)