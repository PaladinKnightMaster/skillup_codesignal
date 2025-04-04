# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Hero = c("Spiderman", "Ironman", "Thor", "Hulk", "Black Widow"),
#   Age = c(18, 35, 1500, 40, 34),
#   Power_Level = c(85, 90, 95, 88, 80)
# )

# # TODO: Filter rows where Power_Level is greater than 85
# filtered_df <- sample_df %>% filter(________)
# print("Filtered DataFrame:")
# print(filtered_df)

# # TODO: Select the last two rows
# sliced_df <- sample_df %>% slice(________)
# print("Sliced DataFrame:")
# print(sliced_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Hero = c("Spiderman", "Ironman", "Thor", "Hulk", "Black Widow"),
  Age = c(18, 35, 1500, 40, 34),
  Power_Level = c(85, 90, 95, 88, 80)
)

# TODO: Filter rows where Power_Level is greater than 85
filtered_df <- sample_df %>% filter(Power_Level > 85)
print("Filtered DataFrame:")
print(filtered_df)

# TODO: Select the last two rows
sliced_df <- sample_df %>% slice(4:5)
print("Sliced DataFrame:")
print(sliced_df)