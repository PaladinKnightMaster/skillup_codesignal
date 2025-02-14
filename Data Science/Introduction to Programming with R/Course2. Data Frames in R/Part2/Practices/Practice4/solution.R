# # Create a data frame
# characters_df <- data.frame(
#   ID = 1:3,
#   Character = c("Spiderman", "Batman", "Superman"),
#   Popularity = c(85, 90, 95)
# )

# # Add a new column
# characters_df$MovieCount <- c(7, 9, 6)

# # TODO: Remove the 'Popularity' column
# characters_df$________ <- ________

# # TODO: Increase each value in the 'MovieCount' column by 3
# characters_df$MovieCount <- characters_df$MovieCount ________

# # Display the manipulated data frame
# print(characters_df)


# Create a data frame
characters_df <- data.frame(
  ID = 1:3,
  Character = c("Spiderman", "Batman", "Superman"),
  Popularity = c(85, 90, 95)
)

# Add a new column
characters_df$MovieCount <- c(7, 9, 6)

# TODO: Remove the 'Popularity' column
characters_df$Popularity <- NULL

# TODO: Increase each value in the 'MovieCount' column by 3
characters_df$MovieCount <- characters_df$MovieCount + 3

# Display the manipulated data frame
print(characters_df)