# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# superhero_df <- tibble(
#   Name = c("Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"),
#   Strength = c(70, 95, 85, 60, 80),
#   Agility = c(85, 80, 90, 95, 75)
# )

# # TODO: Add the new column TotalStrength based on AgilityBoost and Strength (TotalStrength = Strength + AgilityBoost)
# mutated_superhero_df <- superhero_df %>%
#   mutate(AgilityBoost = Agility * 1.2, TotalStrength = ____________)

# print("After mutating to add AgilityBoost and TotalStrength columns:")
# print(mutated_superhero_df)

# # TODO: Relocate TotalStrength column after Name using .after
# final_superhero_df <- mutated_superhero_df %>%
#   relocate(TotalStrength, ____________)

# print("After relocating TotalStrength column after Name:")
# print(final_superhero_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
superhero_df <- tibble(
  Name = c("Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"),
  Strength = c(70, 95, 85, 60, 80),
  Agility = c(85, 80, 90, 95, 75)
)

# TODO: Add the new column TotalStrength based on AgilityBoost and Strength (TotalStrength = Strength + AgilityBoost)
mutated_superhero_df <- superhero_df %>%
  mutate(AgilityBoost = Agility * 1.2, TotalStrength = Strength + AgilityBoost)

print("After mutating to add AgilityBoost and TotalStrength columns:")
print(mutated_superhero_df)

# TODO: Relocate TotalStrength column after Name using .after
final_superhero_df <- mutated_superhero_df %>%
  relocate(TotalStrength, .after = Name)

print("After relocating TotalStrength column after Name:")
print(final_superhero_df)