# suppressPackageStartupMessages(library(dplyr))

# # Creating a sample dataframe with the given columns: ID, Name, Age, Salary
# sample_df <- tibble(
#   ID = 1:6,
#   Name = c("Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern"),
#   Age = c(35, 40, 29, 25, 32, 28),
#   Salary = c(75000, 80000, 72000, 65000, 70000, 72000)
# )

# # TODO: Filter the dataframe to include rows where Age is less than 40

# # TODO: Slice the dataframe to include the last three rows

# # TODO: Print the filtered dataframe

# # TODO: Print the sliced dataframe


suppressPackageStartupMessages(library(dplyr))

# Creating a sample dataframe with the given columns: ID, Name, Age, Salary
sample_df <- tibble(
  ID = 1:6,
  Name = c("Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern"),
  Age = c(35, 40, 29, 25, 32, 28),
  Salary = c(75000, 80000, 72000, 65000, 70000, 72000)
)

# TODO: Filter the dataframe to include rows where Age is less than 40
filtered_df <- sample_df %>% filter(Age < 40)

# TODO: Slice the dataframe to include the last three rows
sliced_df <- sample_df %>% slice(4:6)

# TODO: Print the filtered dataframe
print("Filtered DataFrame:")
print(filtered_df)

# TODO: Print the sliced dataframe
print("Sliced DataFrame:")
print(sliced_df)