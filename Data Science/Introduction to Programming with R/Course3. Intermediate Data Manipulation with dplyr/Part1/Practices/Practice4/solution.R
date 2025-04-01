# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   HeroName = c("Spider-Man", "Iron Man", "Black Widow", "Captain America", "Hulk"),
#   Age = c(18, 48, 32, 101, 49),
#   Strength = c(90, 85, 80, 95, 100)
# )

# # TODO: Fill in the placeholders to rename the columns
# renamed_df <- sample_df %>% rename(________ = Age, HeroStrength = ________)
# print("Dataframe after renaming 'Age' to 'HeroAge' and 'Strength' to 'HeroStrength':")
# print(renamed_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  HeroName = c("Spider-Man", "Iron Man", "Black Widow", "Captain America", "Hulk"),
  Age = c(18, 48, 32, 101, 49),
  Strength = c(90, 85, 80, 95, 100)
)

# TODO: Fill in the placeholders to rename the columns
renamed_df <- sample_df %>% rename(HeroAge = Age, HeroStrength = Strength)
print("Dataframe after renaming 'Age' to 'HeroAge' and 'Strength' to 'HeroStrength':")
print(renamed_df)