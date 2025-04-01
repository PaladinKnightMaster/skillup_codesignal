# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Name = c("Peter", "Tony", "Natasha", "Steve", "Bruce"),
#   Age = c(24, 50, 34, 100, 45),
#   Salary = c(55000, 70000, 68000, 75000, 72000)
# )

# # Rename column
# renamed_df <- sample_df >%> rename(Hero_Name = Name)

# # Select specific columns
# selected_df <- renamed_df %>% select(Name, Age)
# print("Dataframe after renaming 'Name' to 'Hero_Name' and selecting 'Hero_Name' and 'Age' columns:")
# print(selected_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("Peter", "Tony", "Natasha", "Steve", "Bruce"),
  Age = c(24, 50, 34, 100, 45),
  Salary = c(55000, 70000, 68000, 75000, 72000)
)

# Rename column
renamed_df <- sample_df %>% rename(Hero_Name = Name)

# Select specific columns
selected_df <- renamed_df %>% select(Hero_Name, Age)
print("Dataframe after renaming 'Name' to 'Hero_Name' and selecting 'Hero_Name' and 'Age' columns:")
print(selected_df)