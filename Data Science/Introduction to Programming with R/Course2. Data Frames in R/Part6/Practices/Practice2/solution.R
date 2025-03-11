# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40),
#   Salary = c(50000, 60000, NA, 80000, 90000)
# )

# # Check for NA values
# print(is.na(df))

# # TODO: Replace NA values in the Salary column with the median of the column instead.
# df$Salary[is.na(df$Salary)] <- mean(df$Salary, na.rm=TRUE)
# print(df)


# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, NA, 80000, 90000)
)

# Check for NA values
print(is.na(df))

# TODO: Replace NA values in the Salary column with the median of the column instead.
df$Salary[is.na(df$Salary)] <- median(df$Salary, na.rm=TRUE)
print(df)
