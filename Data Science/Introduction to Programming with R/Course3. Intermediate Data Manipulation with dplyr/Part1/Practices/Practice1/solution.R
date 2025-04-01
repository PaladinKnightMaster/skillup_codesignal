# Load the dplyr package
suppressPackageStartupMessages(library(dplyr))

# Define the data frame using tibble
df <- tibble(
  Name = c("John", "Alice", "Bob", "Eve"),
  Age = c(27, 34, 22, 29),
  Salary = c(50000, 60000, 70000, 80000)
)

# Select the Name and Age columns
selected_df <- df %>% select(Name, Age)

# Rename the Salary column to Earnings
renamed_df <- df %>% rename(Earnings = Salary)

# Print the resulting dataframes for verification
print(selected_df)
print(renamed_df)