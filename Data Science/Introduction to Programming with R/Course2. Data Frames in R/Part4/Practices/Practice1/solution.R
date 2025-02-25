# Define the data frame
df <- data.frame(
  Name = c("John", "Alice", "Bob", "Eve"),
  Age = c(27, 34, 22, 29),
  Salary = c(50000, 60000, 70000, 80000)
)

# Calculate the mean age
mean_age <- mean(df$Age)
print(mean_age)

# Calculate the maximum salary
max_salary <- max(df$Salary)
print(max_salary)

# Calculate the minimum salary
min_salary <- min(df$Salary)
print(min_salary)

# Calculate the median salary
median_salary <- median(df$Salary)
print(median_salary)

# Calculate the number of names
number_of_names <- length(df$Name)
print(number_of_names)