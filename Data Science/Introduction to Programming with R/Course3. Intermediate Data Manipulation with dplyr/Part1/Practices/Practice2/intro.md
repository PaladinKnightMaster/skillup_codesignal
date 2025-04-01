# Change Dataframe Columns and Rename

Great job so far! Before modifying the existing code, let's learn a powerful new dataframe technique!

In `dplyr`, you can select a range of columns using the `:` operator. For example:

`select(col1:col2)` will select all columns from `col1` through `col2`.

In the given code, you have a `select` function that selects columns from `Name` to `Salary` using the `:` operator. Let's change the code so that it selects columns from `ID` to `Age` instead!