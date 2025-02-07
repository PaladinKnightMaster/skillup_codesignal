# Creating and Inspecting Data Frames

Great job on understanding the lesson!

This exercise will help you understand the output of the code, making it easier to grasp these concepts.

Here's a rundown of what the code does:

1. **Create a Data Frame**: A data frame named `df` is created with three columns: `ID`, `Name`, and `Age`. It includes information about five individuals.

    - The `data.frame()` function is used to create a data frame. This function takes named vectors as arguments, where each name corresponds to a column name in the data frame.
    - The `1:5` syntax is used to create a sequence of numbers from 1 to 5, representing the `ID` column for each individual in the data frame.
    - The `c()` function creates vectors in R. It forms the `Name` column with character data and the `Age` column with numeric data.

2. **Display the Data Frame**: The `print(df)` function displays the entire data frame.

3. **Access a Column**: The following code demonstrates different ways to access and display the `Name` column from the data frame:

    - `print(df$Name)`: The `$` operator is used to access a specific column from the data frame by its name.
        - For example, `df$Name` will retrieve the `Name` column from the `df` data frame.
    - `print(df[, 2])`: The bracket notation `df[, column_index]` is used to access a column by its index, where the second argument specifies the column number.
        - For example, `df[, 2]` will retrieve the second column (`Name`) from the `df` data frame.

4. **Access a Row**: The `print(df[2, ])` function accesses and displays the second row of the data frame.

    - The bracket notation `df[2, ]` is used, where the first argument specifies the row number and the second argument is left blank to select all columns.
    - For example, `df[2, ]` will retrieve the entire second row from the `df` data frame.

Now, let's run the code to see how creating and inspecting data frames works in practice!