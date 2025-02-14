# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40)
# )

# # Add a new "Salary" column
# df$Salary <- c(50000, 60000, 70000, 80000, 90000)

# # Remove the "Age" column
# df$Age <- NUL

# # Manipulate data in the "Salary" column
# df$Salery <- df$Salary * 1.10

# # Display the manipulated data frame
# print(df)




# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40)
)

# Add a new "Salary" column
df$Salary <- c(50000, 60000, 70000, 80000, 90000)

# Remove the "Age" column
df$Age <- NULL

# Manipulate data in the "Salary" column
df$Salary <- df$Salary * 1.10

# Display the manipulated data frame
print(df)