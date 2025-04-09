# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# superheroes_df <- tibble(
#   ID = 1:5,
#   HeroName = c("Black Panther", "Doctor Strange", "Captain Marvel", "Ant-Man", "Falcon"),
#   Age = c(30, 45, 35, 31, 40),
#   Strength = c(90, 95, 80, 85, 88)
# )

# # Chaining multiple dplyr functions
# final_df <- superheroes_df %>%
#   # TODO: Add a new column PowerIndex which is Strength multiplied by 1.2
#   # TODO: Filter rows where Age is less than 40
#   # TODO: Select the columns HeroName, Age, Strength, and PowerIndex
#   # TODO: Arrange the rows by Age in ascending order
#   # TODO: Slice the first 3 rows

# print(final_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
superheroes_df <- tibble(
  ID = 1:5,
  HeroName = c("Black Panther", "Doctor Strange", "Captain Marvel", "Ant-Man", "Falcon"),
  Age = c(30, 45, 35, 31, 40),
  Strength = c(90, 95, 80, 85, 88)
)

# Chaining multiple dplyr functions
final_df <- superheroes_df %>%
  # TODO: Add a new column PowerIndex which is Strength multiplied by 1.2
  # TODO: Filter rows where Age is less than 40
  # TODO: Select the columns HeroName, Age, Strength, and PowerIndex
  # TODO: Arrange the rows by Age in ascending order
  # TODO: Slice the first 3 rows

  mutate(PowerIndex = Strength * 1.2) %>%
  filter(Age < 40) %>%
  select(HeroName, Age, Strength, PowerIndex) %>%
  arrange(Age) %>%
  slice(1:3)

print(final_df)

# A tibble: 3 × 4
#   HeroName         Age Strength PowerIndex
#   <chr>          <dbl>    <dbl>      <dbl>
# 1 Black Panther     30       90        108
# 2 Ant-Man           31       85        102
# 3 Captain Marvel    35       80         96