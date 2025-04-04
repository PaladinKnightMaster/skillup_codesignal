# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(tibble(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# ))

# # TODO: Change the following filter condition to filter rows where Salary is greater than 70,000
# filtered_df <- sample_df %>% filter(Age > 30)
# print("Filtered DataFrame:")
# print(filtered_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
))

# TODO: Change the following filter condition to filter rows where Salary is greater than 70,000
filtered_df <- sample_df %>% filter(Salary > 70000)
print("Filtered DataFrame:")
print(filtered_df)