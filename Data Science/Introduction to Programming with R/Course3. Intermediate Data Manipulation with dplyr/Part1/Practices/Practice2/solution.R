# suppressPackageStartupMessages(library(dplyr))

# # Sample dataframe
# sample_df <- tibble(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # TODO: Change the code to select columns from 'ID' to 'Age' instead of 'Name' to 'Salary'
# selected_df <- sample_df %>% select(Name:Salary)
# print("Dataframe after selecting columns from 'ID' to 'Age':")
# print(selected_df)


suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# TODO: Change the code to select columns from 'ID' to 'Age' instead of 'Name' to 'Salary'
selected_df <- sample_df %>% select(ID:Age)
print("Dataframe after selecting columns from 'ID' to 'Age':")
print(selected_df)