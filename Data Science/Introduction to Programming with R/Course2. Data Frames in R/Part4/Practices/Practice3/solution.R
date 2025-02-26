# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, 70000, 80000, 90000)
# )

# # Calculate mean age
# mean_age <- mean(df["Age"])
# print(mean_age)

# # Calculate median salary
# median_salary <- median(df$Salary)
# print(median_salary)

# # Calculate the number of names
# num_names <- count(df$Name)
# print(num_names)



# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Calculate mean age
mean_age <- mean(df$Age)
print(mean_age)

# Calculate median salary
median_salary <- median(df$Salary)
print(median_salary)

# Calculate the number of names
num_names <- length(df$Name)
print(num_names)