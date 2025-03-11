# Data Cleaning in R

You've done a great job so far. Let's run the code you saw in the lesson and focus on the output to better understand data cleaning.

We will:

- Create a data frame with some missing (`NA`) values: `NA` denotes missing or undefined data in R, which is common in real-world datasets.
- Use `is.na()` to identify where the `NA` values are located: This function returns a logical matrix indicating if each value is `NA`. A TRUE in the matrix indicates that the corresponding value is `NA` (missing), while a FALSE indicates that the value is present!
- Use `na.omit()` to remove rows that contain `NA` values: This function removes any rows with `NA` values, giving us a data frame with only complete cases.
- Calculate the mean of the column and replace the `NA` values with this mean using the syntax `df$column[is.na(df$column)] <- mean(df$column, na.rm=TRUE)`: By replacing `NA` values with the column mean, we can retain all rows while imputing the missing data with a sensible value. The `na.rm=TRUE` parameter in the `mean()` function tells R to remove `NA` values before calculating the mean.

Running this code will show how these steps affect the data frame.