# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000),
#   Bonus = c(5000, 6000, 7000, 8000, 9000)
# )

# print("Before relocating Bonus column:")
# print(sample_df)

# # TODO: Relocate the Bonus column before Name instead using .before
# final_df <- sample_df %>%
#   relocate(Bonus, .after = Name)

# print("After relocating Bonus column after Name:")
# print(final_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000),
  Bonus = c(5000, 6000, 7000, 8000, 9000)
)

print("Before relocating Bonus column:")
print(sample_df)

# TODO: Relocate the Bonus column before Name instead using .before
final_df <- sample_df %>%
  relocate(Bonus, before = Name)

print("After relocating Bonus column before Name:")
print(final_df)