# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40)
)

# Display the data frame
print(df)

# Access the 'Name' column
print(df$Name)
print(df[, 2])

# Access the second row
print(df[2, ])