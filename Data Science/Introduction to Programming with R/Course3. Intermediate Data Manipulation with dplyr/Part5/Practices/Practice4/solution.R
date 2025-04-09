# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Character = c("Thor", "Loki", "Odin", "Hela", "Frigga"),
#   Age = c(1500, 1048, 5000, 3000, 4000),
#   Strength = c(100, 90, 99, 95, 80)
# )

# # Chaining multiple dplyr functions
# final_df <- sample_df %>%
#   # TODO: Add a new column Strength_Level which is 1.2 times the Strength
#   mutate(Strength_Level = Strength * ______) %>%
#   # TODO: Filter rows where Age is greater than 1000
#   filter(Age > ______) %>%
#   # TODO: Select specific columns: Character, Age, Strength, Strength_Level
#   ______(Character, Age, Strength, Strength_Level) %>%
#   # TODO: Arrange the rows by Strength in ascending order
#   arrange(________)

# print(final_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Character = c("Thor", "Loki", "Odin", "Hela", "Frigga"),
  Age = c(1500, 1048, 5000, 3000, 4000),
  Strength = c(100, 90, 99, 95, 80)
)

# Chaining multiple dplyr functions
final_df <- sample_df %>%
  # TODO: Add a new column Strength_Level which is 1.2 times the Strength
  mutate(Strength_Level = Strength * 1.2) %>%
  # TODO: Filter rows where Age is greater than 1000
  filter(Age > 1000) %>%
  # TODO: Select specific columns: Character, Age, Strength, Strength_Level
  select(Character, Age, Strength, Strength_Level) %>%
  # TODO: Arrange the rows by Strength in ascending order
  arrange(Strength)

print(final_df)

# A tibble: 5 × 4
#   Character   Age Strength Strength_Level
#   <chr>     <dbl>    <dbl>          <dbl>
# 1 Frigga     4000       80            96
# 2 Loki       1048       90           108
# 3 Hela       3000       95           114
# 4 Odin       5000       99           119.
# 5 Thor       1500      100           120