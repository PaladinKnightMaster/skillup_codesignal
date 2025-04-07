suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Mutate to add new columns
mutated_df <- sample_df %>%
  mutate(Bonus = Salary * 0.1, TotalCompensation = Salary + Bonus)

print("After mutating to add Bonus and TotalCompensation columns:")
print(mutated_df)

# Relocate the newly created TotalCompensation column after Salary using .after
final_df <- mutated_df %>%
  relocate(TotalCompensation, .after = Salary)

print("After relocating TotalCompensation column after Salary:")
print(final_df)