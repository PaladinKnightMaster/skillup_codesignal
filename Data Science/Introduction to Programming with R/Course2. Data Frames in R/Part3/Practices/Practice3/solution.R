# # Create a data frame
# df <- data.frame(
#   ID = 1:5,
#   Name = c("John", "Jane", "Alex", "Emily", "David"),
#   Age = c(28, 22, 35, 29, 40)
# )

# # Display the data frame
# print(df)

# # Access columns and rows
# print(df$Name)
# print(df[2, ])

# # Filter rows where Age is greater than 30
# older_than_30 <- df[df > 30, ]

# # Summarize data frame
# summary <- summary(df)
# print(summary)

# # Sort data frame by Age
# sorted_df <- df[age(df$Age), ]
# print(sorted_df)



# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40)
)

# Display the data frame
print(df)

# Access columns and rows
print(df$Name)
print(df[2, ])

# Filter rows where Age is greater than 30
older_than_30 <- df[df$Age > 30, ]

# Summarize data frame
summary <- summary(df)
print(summary)

# Sort data frame by Age
sorted_df <- df[order(df$Age), ]
print(sorted_df)