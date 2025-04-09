suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Character = c("Ironman", "Captain", "Thor", "Hulk", "Spiderman"),
  Age = c(35, 100, 1500, 45, 21),
  Strength = c(85, 75, 99, 90, 70)
)

# Chaining multiple dplyr functions
final_df <- sample_df %>%
  # Add new column Power_Level
  mutate(Power_Level = Strength * 1.5) %>%
  # Filter rows where Age is less than 1000
  filter(Age < 1000) %>%
  # Select specific columns
  select(Character, Age, Strength, Power_Level) %>%
  # Arrange rows by Power_Level in descending order
  arrange(desc(Power_Level))

print(final_df)


# A tibble: 4 × 4
#   Character   Age Strength Power_Level
#   <chr>     <dbl>    <dbl>       <dbl>
# 1 Hulk         45       90        135
# 2 Ironman      35       85        128.
# 3 Captain     100       75        112.
# 4 Spiderman    21       70        105