suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Filter rows based on a condition
filtered_df <- sample_df %>% filter(Age > 30)
print("Filtered DataFrame:")
print(filtered_df)

# Select rows by position
sliced_df <- sample_df %>% slice(1:3)
print("Sliced DataFrame:")
print(sliced_df)