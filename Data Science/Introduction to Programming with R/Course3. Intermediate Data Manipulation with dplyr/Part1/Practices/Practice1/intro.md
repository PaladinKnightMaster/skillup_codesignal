# Tibbles, Select and Rename in Action

Great progress so far! Now, let's run some code to practice creating dataframes (tibbles), selecting and renaming columns in a dataframe using the dplyr package.

In this practice, we'll:

1. Create a dataframe using `tibble`.
2. Select the `Name` and `Age` columns from the given dataframe.
3. Rename the `Salary` column to `Earnings`.

The Pipe:

All `dplyr` functions take a data frame as their first argument. Instead of saving intermediate objects, `dplyr` uses the `%>%` operator to pipe the result of one function into the next. For example, `x %>% f(y)` becomes `f(x, y)`. This allows you to write readable, left-to-right operations, with the pipe operator acting as "then."

Here is the general syntax of:

Using `select()` to select specific columns:

```R
selected_df <- dataframe %>% select(column1, column2)
```

Using `rename()` to rename a column:

```R
renamed_df <- dataframe %>% rename(NewName = OldName)
```

Make sure to pay close attention to the syntax and run the code to see the output!