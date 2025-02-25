# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # TODO: Modify this calculation to find the maximum value for the Salary column
# salary <- min(df$Salary)

# # TODO: Modify this calculation to find the minimum value for the Age column
# age <- max(df$Age)

# print(salary)
# print(age)



# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# TODO: Modify this calculation to find the maximum value for the Salary column
salary <- max(df$Salary)

# TODO: Modify this calculation to find the minimum value for the Age column
age <- min(df$Age)

print(salary)
print(age)