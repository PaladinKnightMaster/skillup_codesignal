# # TODO: Create a data frame with superhero stats
# df <- __________(
#   ID = 1:5,
#   Superhero = c("Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"),
#   PowerLevel = c(85, 95, 90, 88, 80)
# )

# # Print the data frame
# print(df)

# # TODO: Access specific column and row (Superhero column and 3rd row)
# print(__________)
# print(__________)

# # TODO: Filter superheroes with PowerLevel greater than 85
# powerful_heroes <- df[__________, ]
# print(powerful_heroes)

# # TODO: Summarize the data frame and print the summary
# summary <- __________(df)
# print(summary)

# # TODO: Sort data frame by PowerLevel in descending order
# sorted_df <- df[__________(-df$PowerLevel), ]
# print(sorted_df)



# TODO: Create a data frame with superhero stats
df <- data.frame(
  ID = 1:5,
  Superhero = c("Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"),
  PowerLevel = c(85, 95, 90, 88, 80)
)

# Print the data frame
print(df)

# TODO: Access specific column and row (Superhero column and 3rd row)
print(df$Superhero)
print(df[3, ])

# TODO: Filter superheroes with PowerLevel greater than 85
powerful_heroes <- df[df$PowerLevel > 85, ]
print(powerful_heroes)

# TODO: Summarize the data frame and print the summary
summary <- summary(df)
print(summary)

# TODO: Sort data frame by PowerLevel in descending order
sorted_df <- df[order(-df$PowerLevel), ]
print(sorted_df)