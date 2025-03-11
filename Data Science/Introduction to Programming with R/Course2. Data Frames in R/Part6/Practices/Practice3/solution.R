# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Game = c("The Legend of Zelda", "Super Mario", "Minecraft", "Fortnite", "Skyrim"),
#   Rating = c(9.5, 9.3, NA, 8.7, 9.0),
#   Sales = c(28.5, 40.2, 70.0, 1.2, NA)
# )

# # Check for NA values
# print(is.null(df))

# # Remove rows with NA values
# clean_df <- na_omit(df)
# print(clean_df)


# Create a data frame
df <- data.frame(
  ID = 1:5,
  Game = c("The Legend of Zelda", "Super Mario", "Minecraft", "Fortnite", "Skyrim"),
  Rating = c(9.5, 9.3, NA, 8.7, 9.0),
  Sales = c(28.5, 40.2, 70.0, 1.2, NA)
)

# Check for NA values
print(is.na(df))

# Remove rows with NA values
clean_df <- na.omit(df)
print(clean_df)