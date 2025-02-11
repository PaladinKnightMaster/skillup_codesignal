# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David")
# )

# # Add a new column
# df$Salary <- c(50000, 60000, 70000, 80000, 90000)

# # TODO: Add a $20,000 bonus to each value in the Salary column instead
# df$Salary <- df$Salary * 1.10

# # Display the manipulated data frame
# print(df)



# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David")
)

# Add a new column
df$Salary <- c(50000, 60000, 70000, 80000, 90000)

# TODO: Add a $20,000 bonus to each value in the Salary column instead
df$Salary <- df$Salary + 20000

# Display the manipulated data frame
print(df)