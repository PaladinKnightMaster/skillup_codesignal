# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Movie = c("Inception", "Titanic", "Avatar", "The Dark Knight", NA),
#   Duration = c(148, 195, 162, 152, NA),
#   Rating = c(8.8, 7.8, 7.9, 9.0, NA)
# )

# # TODO: Check for NA values and print the result.

# # TODO: Remove rows with NA values and print the cleaned data frame.

# # TODO: Replace NA values in the Rating column with the mean of the column, and print the updated data frame.

# # TODO: Replace NA values in the Duration column with the mean of the column, and print the updated data frame.



# Create a data frame
df <- data.frame(
  ID = 1:5,
  Movie = c("Inception", "Titanic", "Avatar", "The Dark Knight", NA),
  Duration = c(148, 195, 162, 152, NA),
  Rating = c(8.8, 7.8, 7.9, 9.0, NA)
)

# TODO: Check for NA values and print the result.
print(is.na(df))

# TODO: Remove rows with NA values and print the cleaned data frame.
clean_df <- na.omit(df)
print(clean_df)

# TODO: Replace NA values in the Rating column with the mean of the column, and print the updated data frame.
df$Rating[is.na(df$Rating)] <- mean(df$Rating, na.rm=TRUE)
print(df)

# TODO: Replace NA values in the Duration column with the mean of the column, and print the updated data frame.
df$Duration[is.na(df$Duration)] <- mean(df$Duration, na.rm=TRUE)
print(df)