# TODO: Create a data frame with columns ID, Product, and Quantity. Use the following:
# ID: 1, 2, 3, 4, 5
# Product: "Apples", "Oranges", "Bananas", "Grapes", "Pineapples"
# Quantity: 10, 20, 15, 18, 12

# TODO: Add a new column Price with values 3.00, 1.50, 2.00, 2.50, and 3.50.

# TODO: Remove the Quantity column from the data frame.

# TODO: Decrease each value in the Price column by 5%.

# TODO: Print the manipulated data frame.




# TODO: Create a data frame with columns ID, Product, and Quantity. Use the following:
# ID: 1, 2, 3, 4, 5
# Product: "Apples", "Oranges", "Bananas", "Grapes", "Pineapples"
# Quantity: 10, 20, 15, 18, 12
df <- data.frame(
  ID = 1:5,
  Product = c("Apples", "Oranges", "Bananas", "Grapes", "Pineapples"),
  Quantity = c(10, 20, 15, 18, 12)
)

# TODO: Add a new column Price with values 3.00, 1.50, 2.00, 2.50, and 3.50.
df$Price <- c(3.00, 1.50, 2.00, 2.50, 3.50)

# TODO: Remove the Quantity column from the data frame.
df$Quantity <- NULL

# TODO: Decrease each value in the Price column by 5%.
df$Price <- df$Price * 0.95

# TODO: Print the manipulated data frame.
print(df)