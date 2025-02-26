# # Create a data frame
# df <- data.frame(
#   ID = 1:6,
#   Name = c("Clark", "Bruce", "Diana", "Barry", "Hal", "Arthur"),
#   Age = c(35, 36, 30, 29, 31, 32),
#   Salary = c(90000, 85000, 95000, 70000, 72000, 76000)
# )

# # TODO: Calculate mean age
# mean_age <- mean(df$Age)
# print(mean_age)

# # TODO: Calculate maximum salary
# max_salary <- __________(df$__________)
# print(max_salary)

# # TODO: Calculate the number of names
# num_names <- length(df$__________)
# print(num_names)



# Create a data frame
df <- data.frame(
  ID = 1:6,
  Name = c("Clark", "Bruce", "Diana", "Barry", "Hal", "Arthur"),
  Age = c(35, 36, 30, 29, 31, 32),
  Salary = c(90000, 85000, 95000, 70000, 72000, 76000)
)

# TODO: Calculate mean age
mean_age <- mean(df$Age)
print(mean_age)

# TODO: Calculate maximum salary
max_salary <- max(df$Salary)
print(max_salary)

# TODO: Calculate the number of names
num_names <- length(df$Name)
print(num_names)