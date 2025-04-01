# suppressPackageStartupMessages(library(dplyr))

# # TODO: Create a sample dataframe
# # Create a tibble dataframe with columns ID, CelebrityName, Age, and Earnings

# # TODO: Select specific columns
# # Select the columns CelebrityName and Earnings and print the result

# # TODO: Rename a column
# # Rename the column Age to AgeInYears and print the result



suppressPackageStartupMessages(library(dplyr))

# TODO: Create a sample dataframe
# Create a tibble dataframe with columns ID, CelebrityName, Age, and Earnings
celebrity_df <- tibble(
  ID = 1:5,
  CelebrityName = c("Tom Cruise", "Dwayne Johnson", "Taylor Swift", "Kylie Jenner", "Lionel Messi"),
  Age = c(58, 48, 31, 23, 33),
  Earnings = c(57000000, 87000000, 185000000, 170000000, 127000000)
)

# TODO: Select specific columns
# Select the columns CelebrityName and Earnings and print the result
selected_df <- celebrity_df %>% select(CelebrityName, Earnings)
print("Dataframe after selecting 'CelebrityName' and 'Earnings' columns:")
print(selected_df)

# TODO: Rename a column
# Rename the column Age to AgeInYears and print the result
renamed_df <- celebrity_df %>% rename(AgeInYears = Age)
print("Dataframe after renaming 'Age' to 'AgeInYears':")
print(renamed_df)