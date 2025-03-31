# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("Peter", "Tony", "Steve", "Bruce", "Natasha"),
#   Strength = c(80, 85, NA, 75, 90)
# )

# # Check for NA values
# print(is.na(df))

# # TODO: Remove rows with NA values
# clean_df <- __________(df)
# print(clean_df)

# # TODO: Replace NA values with the mean of the column
# df$Strength[is.na(df$Strength)] <- __________(_________, na.rm=TRUE)
# print(df)


# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("Peter", "Tony", "Steve", "Bruce", "Natasha"),
  Strength = c(80, 85, NA, 75, 90)
)

# Check for NA values
print(is.na(df))

# TODO: Remove rows with NA values
clean_df <- na.omit(df)
print(clean_df)

# TODO: Replace NA values with the mean of the column
df$Strength[is.na(df$Strength)] <- mean(df$Strength, na.rm=TRUE)
print(df)