# suppressPackageStartupMessages(library(tidyr))
# suppressPackageStartupMessages(library(dplyr))

# # Sample tibble
# data <- tibble(
#   StudentID = c(1, 2, 3, 4),
#   Math = c(80, 85, 78, 92),
#   Science = c(75, 88, 82, 95),
#   History = c(70, 89, 90, 85)  
# )

# # Gather into long format
# # TODO: Modify the range to include the History column
# long_data <- data %>% pivot_longer(cols = Math:Science, names_to = "Subject", values_to = "Score")
# print("Data in long format:")
# print(long_data)

# # Spread back to wide format
# wide_data <- long_data %>% pivot_wider(names_from = Subject, values_from = Score)
# print("Data in wide format:")
# print(wide_data)


suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(dplyr))

# Sample tibble
data <- tibble(
  StudentID = c(1, 2, 3, 4),
  Math = c(80, 85, 78, 92),
  Science = c(75, 88, 82, 95),
  History = c(70, 89, 90, 85)  
)

# Gather into long format
# TODO: Modify the range to include the History column
long_data <- data %>% pivot_longer(cols = Math:History, names_to = "Subject", values_to = "Score")
print("Data in long format:")
print(long_data)

# Spread back to wide format
wide_data <- long_data %>% pivot_wider(names_from = Subject, values_from = Score)
print("Data in wide format:")
print(wide_data)