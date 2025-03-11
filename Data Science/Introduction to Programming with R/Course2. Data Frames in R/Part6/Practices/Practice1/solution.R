# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, NA, 80000, 90000)
)

# Check for NA values
print(is.na(df))

# Remove rows with NA values
clean_df <- na.omit(df)
print(clean_df)

# Replace NA values with the mean of the column
df$Salary[is.na(df$Salary)] <- mean(df$Salary, na.rm=TRUE)
print(df)