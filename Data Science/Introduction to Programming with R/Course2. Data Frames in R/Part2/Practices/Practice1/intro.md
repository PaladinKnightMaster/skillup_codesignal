# Manipulate Data Frames Effectively

Great job on understanding how to create and inspect data frames!

Now, let's reinforce what you've learned by running some code that demonstrates how to manipulate data frames. This will help you see the practical application of these skills.

In this exercise, you will:

1. **Create a Data Frame**: Start with a basic data frame that includes the columns `ID`, `Name`, and `Age`.

2. **Add a New Column**: Add a new `Salary` column to your data frame.
    - Use the dollar sign `$` to add a new column: `df$ColumnName <- values`

3. **Remove a Column**: Remove the `Age` column from your data frame.
    - Set the column to `NULL` to remove it: `df$ColumnName <- NULL`

4. **Manipulate Data**: Increase each value in the `Salary` column by 10%.
    - Use vectorized operations (applying an operation to an entire column) to manipulate columns: `df$ColumnName <- df$ColumnName * 1.10`
    - You can use a different `ColumnName` to create a new column instead of updating an existing one as well!

Running this code will help solidify your understanding of how to manipulate data frames.