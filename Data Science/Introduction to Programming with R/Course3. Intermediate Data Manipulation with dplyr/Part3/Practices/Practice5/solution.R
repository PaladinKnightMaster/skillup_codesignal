# TODO: Load the dplyr library
# TODO: Create a tibble named scientist_df with columns ID, Name, Age, and Salary

# TODO: Use the mutate function to add two new columns:
#       - ResearchGrant which is 20% of the Salary
#       - NetWorth which is the sum of Salary and ResearchGrant

# TODO: Print the mutated_scientist_df to check the new columns

# TODO: Use the relocate function to move the NetWorth column before the Salary column using .before

# TODO: Print the final_scientist_df to check the repositioned columns



# TODO: Load the dplyr library
suppressPackageStartupMessages(library(dplyr))
# TODO: Create a tibble named scientist_df with columns ID, Name, Age, and Salary
scientist_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# TODO: Use the mutate function to add two new columns:
#       - ResearchGrant which is 20% of the Salary
#       - NetWorth which is the sum of Salary and ResearchGrant
mutated_scientist_df <- scientist_df %>%
  mutate(
    ResearchGrant = Salary * 0.2,
    NetWorth = Salary + ResearchGrant
  )

# TODO: Print the mutated_scientist_df to check the new columns
print("Mutated Scientist DataFrame:")
print(mutated_scientist_df)

# TODO: Use the relocate function to move the NetWorth column before the Salary column using .before
final_scientist_df <- mutated_scientist_df %>%
  relocate(NetWorth, .before = Salary)

# TODO: Print the final_scientist_df to check the repositioned columns
print("Final Scientist DataFrame:")
print(final_scientist_df)