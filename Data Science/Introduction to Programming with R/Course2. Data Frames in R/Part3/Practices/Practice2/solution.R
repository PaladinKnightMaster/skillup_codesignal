# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("Harry Potter", "Frodo Baggins", "Hermione Granger", "Luke Skywalker", "Aragorn"),
#   Age = c(17, 33, 18, 20, 87)
# )

# # Display the data frame
# print(df)

# # TODO: Modify the code to order data frame by Age in descending order
# sorted_df <- df[order(df$Age), ]

# # Print the sorted data frame
# print(sorted_df)


# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("Harry Potter", "Frodo Baggins", "Hermione Granger", "Luke Skywalker", "Aragorn"),
  Age = c(17, 33, 18, 20, 87)
)

# Display the data frame
print(df)

# TODO: Modify the code to order data frame by Age in descending order
sorted_df <- df[order(df$Age, decreasing = TRUE),]

# Print the sorted data frame
print(sorted_df)