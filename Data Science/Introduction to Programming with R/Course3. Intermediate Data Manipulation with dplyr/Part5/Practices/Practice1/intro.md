# Chaining for Data Transformation

Great job so far!

Now, let's practice chaining multiple `dplyr` functions together using the `%>%` operator. As mentioned before, this operator allows you to pass the output of one function directly into the next function, enabling you to create a pipeline of data transformations!

In this practice, we'll explore how to efficiently manipulate data frames by combining functions like `mutate`, `filter`, `select`, and `arrange` using the `%>%` operator.

The code on the right does the following:

1. **Mutate**: Adds a new column `Power_Level`, which is 1.5 times the `Strength`.
2. **Filter**: Keeps only the rows where `Age` is less than 1000.
3. **Select**: Returns specific columns: `Character`, `Age`, `Strength`, and `Power_Level`.
4. **Arrange**: Orders the rows by `Power_Level` in descending order.

The `arrange()` function sorts data frame rows in either ascending or descending order, similar to the `order()` function in base R. By default, `arrange()` sorts in ascending order. To sort in descending order, you can use the `desc()` function!

Here's the general syntax:

- Ascending order: `arrange(column_name)`
- Descending order: `arrange(desc(column_name))`

Run the code to see it in action and observe the output.