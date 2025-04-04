# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(tibble(
#   ID = 1:5,
#   Name = c("Bruce", "Clark", "Diana", "Barry", "Arthur"),
#   Age = c(30, 35, 28, 25, 32),
#   Salary = c(60000, 75000, 82000, 54000, 96000)
# )

# # Filter rows based on a condition
# filtered_df <- sample_df %>% filter(Age > 30)
# print("Filtered DataFrame:")
# print(filtered_df)

# # Select rows by position
# sliced_df <- sample_df %>% sliced(1:2)
# print("Sliced DataFrame:")
# print(sliced_df)

suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(tibble(
  ID = 1:5,
  Name = c("Bruce", "Clark", "Diana", "Barry", "Arthur"),
  Age = c(30, 35, 28, 25, 32),
  Salary = c(60000, 75000, 82000, 54000, 96000)
))

# Filter rows based on a condition
filtered_df <- sample_df %>% filter(Age > 30)
print("Filtered DataFrame:")
print(filtered_df)

# Select rows by position
sliced_df <- sample_df %>% slice(1:2)
print("Sliced DataFrame:")
print(sliced_df)