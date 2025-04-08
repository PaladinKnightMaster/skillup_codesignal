# suppressPackageStartupMessages(library(dplyr))

# # Superheroes dataframe
# hero_df <- tibble(
#   HeroID = 1:5,
#   HeroName = c("Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"),
#   Age = c(30, 35, 28, 25, 40),
#   PowerLevel = c(9000, 8500, 8800, 7000, 7500)
# )

# # Summarize the data to get the maximum power level
# # TODO: Fill in the missing function to summarize the maximum power level
# max_power <- hero_df %>% summarise(MaxPower = ________(PowerLevel))
# print("Maximum power level of the superheroes:")
# print(max_power)

# # Group by age > 30 and summarise the average power level within each group
# # TODO: Fill in the missing parts to group by age and summarize the average power level
# grouped_summary <- hero_df %>% ________(Age > 30) %>% summarise(AvgPower = ________(PowerLevel))
# print("Average power level grouped by Age > 30:")
# print(grouped_summary)


suppressPackageStartupMessages(library(dplyr))

# Superheroes dataframe
hero_df <- tibble(
  HeroID = 1:5,
  HeroName = c("Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"),
  Age = c(30, 35, 28, 25, 40),
  PowerLevel = c(9000, 8500, 8800, 7000, 7500)
)

# Summarize the data to get the maximum power level
# TODO: Fill in the missing function to summarize the maximum power level
max_power <- hero_df %>% summarise(MaxPower = max(PowerLevel))
print("Maximum power level of the superheroes:")
print(max_power)

# Group by age > 30 and summarise the average power level within each group
# TODO: Fill in the missing parts to group by age and summarize the average power level
grouped_summary <- hero_df %>% group_by(Age > 30) %>% summarise(AvgPower = mean(PowerLevel))
print("Average power level grouped by Age > 30:")
print(grouped_summary)