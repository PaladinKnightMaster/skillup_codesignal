# Running Mutate and Relocate Functions

Great job so far! Let's run the code you saw in the lesson and pay careful attention to the output. This will help you better understand the `mutate` and `relocate` functions in `dplyr`.

The `mutate` function allows you to add new columns or modify existing ones based on some calculations or conditions. It takes a dataframe and new column definitions as arguments:

```R
# Mutate to add new columns or modify existing ones
mutated_df <- dataframe %>% mutate(column_definitions)

# You can also use mutate to delete a column by assigning it to NULL
mutated_df <- mutated_df %>% mutate(column_to_delete = NULL)
```

The `relocate` function is used to change the position of columns within a dataframe. It takes a dataframe and the column position (`.after` or `.before`) specifications as arguments:

```R
# Relocate columns to new positions
relocated_df <- dataframe %>% relocate(column_name, .after = another_column)

# Alternatively, you can use .before to place the column before another column
relocated_df <- dataframe %>% relocate(column_name, .before = another_column)
```

In this code, we will:

- Create a sample data frame with columns `ID`, `Name`, `Age`, and `Salary`.
- Use `mutate` to add new columns: `Bonus` (10% of the `Salary`) and `TotalCompensation` (the sum of `Salary` and `Bonus`).
- Use `relocate` to position the `TotalCompensation` column right after the `Salary` column.

Simply run the code and observe the output!