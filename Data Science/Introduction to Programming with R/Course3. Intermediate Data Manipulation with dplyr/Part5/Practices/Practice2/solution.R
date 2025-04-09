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
#   # TODO: Modify the filter condition to select individuals with Salary greater than 60,000
#   filter(Age > 25) %>%
#   select(Name, Age, Salary, Bonus) %>%
#   # TODO: Modify the arrange function to order rows by Salary in ascending order
#   arrange(desc(Age))

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
  # TODO: Modify the filter condition to select individuals with Salary greater than 60,000
  filter(Salary > 60000) %>%
  select(Name, Age, Salary, Bonus) %>%
  # TODO: Modify the arrange function to order rows by Salary in ascending order
  arrange(Salary)

print(final_df)

# A tibble: 3 × 4
#   Name    Age Salary Bonus
#   <chr> <dbl>  <dbl> <dbl>
# 1 Alex     35  70000  7000
# 2 Emily    29  80000  8000
# 3 David    40  90000  9000