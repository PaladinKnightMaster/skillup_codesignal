# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # Chaining multiple dplyr functions
# final_df <- sample_df %>%
#   mutate(Bonus = Salary * 0.1) %>%
#   filter(Age > 25) %>%
#   select(Name, Age, Salary, Bonus)
#   sort(Age)

# print(final_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Chaining multiple dplyr functions
final_df <- sample_df %>%
  mutate(Bonus = Salary * 0.1) %>%
  filter(Age > 25) %>%
  select(Name, Age, Salary, Bonus) %>%
  arrange(Age)

print(final_df)

# A tibble: 4 × 4
#   Name    Age Salary Bonus
#   <chr> <dbl>  <dbl> <dbl>
# 1 John     28  50000  5000
# 2 Emily    29  80000  8000
# 3 Alex     35  70000  7000
# 4 David    40  90000  9000