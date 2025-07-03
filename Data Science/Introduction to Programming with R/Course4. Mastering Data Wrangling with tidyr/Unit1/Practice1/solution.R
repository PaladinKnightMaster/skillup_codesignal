suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(dplyr))

# Sample tibble
data <- tibble(
  StudentID = c(1, 2, 3, 4),
  Math = c(80, 85, 78, 92),
  Science = c(75, 88, 82, 95)
)

# Gather into long format
long_data <- data %>% pivot_longer(cols = Math:Science, names_to = "Subject", values_to = "Score")
print("Data in long format:")
print(long_data)

# Spread back to wide format
wide_data <- long_data %>% pivot_wider(names_from = Subject, values_from = Score)
print("Data in wide format:")
print(wide_data)


# [1] "Data in long format:"
# # A tibble: 8 × 3
#   StudentID Subject Score
#       <dbl> <chr>   <dbl>
# 1         1 Math       80
# 2         1 Science    75
# 3         2 Math       85
# 4         2 Science    88
# 5         3 Math       78
# 6         3 Science    82
# 7         4 Math       92
# 8         4 Science    95
# [1] "Data in wide format:"
# # A tibble: 4 × 3
#   StudentID  Math Science
#       <dbl> <dbl>   <dbl>
# 1         1    80      75
# 2         2    85      88
# 3         3    78      82
# 4         4    92      95