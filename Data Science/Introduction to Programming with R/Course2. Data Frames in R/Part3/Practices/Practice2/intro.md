# Filter Characters by Age

Great job learning about ordering data frames! Now let's focus on ordering the fictional characters by age in descending order.

Currently, the code orders the data frame by Age in ascending order. Your task is to modify it to order by Age in descending order.

To sort a data frame in R by a specific column in descending order, you can use the `order` function along with the `decreasing = TRUE` parameter, or by using the minus (`-`) sign before the column name.

Here's the general syntax:

```R
Copy to clipboard
# Using decreasing = TRUE
sorted_df <- df[order(df$column_name, decreasing = TRUE), ]

# Using the minus sign
sorted_df <- df[order(-df$column_name), ]
```

Feel free to use either of these methods to complete the task. Both approaches will give you the desired result. Happy coding!