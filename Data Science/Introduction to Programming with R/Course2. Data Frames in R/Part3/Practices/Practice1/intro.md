# Data Frame Operations in R

Great job on learning how to manipulate data frames by adding and removing columns! Before running the code, let's understand the specific data frame operations we will be performing.

We will:

1. Filter rows based on a condition.

    - We use the syntax `df[df$ColumnName > value, ]` to filter rows.
    For example, `df[df$Age > 30, ]` filters the rows where the Age column has values greater than 30. The result is a subset of the data frame containing only those rows that meet the condition.

2. Summarize the data frame.

    - We use the `summary()` function to get statistical summaries of each column.
    For example, `summary(df)` will provide the minimum, 1st quartile, median, mean, 3rd quartile, and maximum values for each numeric column in the data frame.

3. Sort the data frame by a specific column.

    - We use the `order()` function inside the square brackets to sort the data frame by a specific column.
    For example, `df[order(df$Age), ]` sorts the entire data frame by the Age column (by default in ascending order). The `order()` function returns the indices of the data frame in sorted order, and using these indices inside the square brackets reorders the rows accordingly.

Running this code will help you see how these operations are performed and understand the resulting output. Let's get started!