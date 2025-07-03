# suppressPackageStartupMessages(library(tidyr))
# suppressPackageStartupMessages(library(dplyr))

# # Sample tibble
# data <- tibble(
#   PlayerID = c(1, 2, 3, 4),
#   Goals = c(5, 7, 4, 8),
#   Assists = c(3, 5, 2, 6)
# )

# # Gather into long format
# long_data <- data %>% pivot_longer(cols = Goals:Assists, name_to = "Stat", value_to = "Count")
# print("Data in long format:")
# print(long_data)

# # Spread back to wide format
# wide_data <- long_data %>% pivot_wide(names_from = Stat, values_from = Count)
# print("Data in wide format:")
# print(wide_data)


suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(dplyr))

# Sample tibble
data <- tibble(
  PlayerID = c(1, 2, 3, 4),
  Goals = c(5, 7, 4, 8),
  Assists = c(3, 5, 2, 6)
)

# Gather into long format
long_data <- data %>% pivot_longer(cols = Goals:Assists, names_to = "Stat", values_to = "Count")
print("Data in long format:")
print(long_data)

# Spread back to wide format
wide_data <- long_data %>% pivot_wider(names_from = Stat, values_from = Count)
print("Data in wide format:")
print(wide_data)
