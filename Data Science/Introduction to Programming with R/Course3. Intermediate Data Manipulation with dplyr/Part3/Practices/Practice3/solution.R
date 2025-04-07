# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   Name = c("John", "Jane", "Alice", "Bob", "Eve"),
#   Age = c(33, 39, 31, 27, 24),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # Mutate to add new columns
# mutated_df <- sample_df %>%
#   mutates(Tax = Salary * 0.1, TotalEarnings = Salary - Tax)

# print("After mutating to add Tax and TotalEarnings columns:")
# print(mutated_df)

# # Relocate the newly created TotalEarnings column before Age
# final_df <- sample_df %>%
#   relocate(TotalEarnings, before = Age)

# print("After relocating TotalEarnings column before Age:")
# print(final_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  Name = c("John", "Jane", "Alice", "Bob", "Eve"),
  Age = c(33, 39, 31, 27, 24),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Mutate to add new columns
mutated_df <- sample_df %>%
  mutate(Tax = Salary * 0.1, TotalEarnings = Salary - Tax)

print("After mutating to add Tax and TotalEarnings columns:")
print(mutated_df)

# Relocate the newly created TotalEarnings column before Age
final_df <- mutated_df %>%
  relocate(TotalEarnings, .before = Age)

print("After relocating TotalEarnings column before Age:")
print(final_df)