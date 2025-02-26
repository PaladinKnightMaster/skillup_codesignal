# Data Frame Calculations in Action

Great progress so far! You've learned the basics of creating, inspecting, and manipulating data frames. Now, let's focus on performing some fundamental calculations.

In this exercise, you'll run the code to calculate the mean age, maximum and minimum salary, median salary, and the number of names from a data frame.

Here's a quick reminder on what each of these functions does and what syntax to use:

- `mean()`: Calculates the mean (average) of a numeric vector. We use this to find the mean age (`mean(df$Age)`).
- `max()`: Determines the maximum value of a numeric vector. We use this to find the maximum salary (`max(df$Salary)`).
- `min()`: Determines the minimum value of a numeric vector. We use this to find the minimum salary (`min(df$Salary)`).
- `median()`: Computes the median (middle) value of a numeric vector. We use this to find the median salary (`median(df$Salary)`).
- `length()`: Returns the number of elements in a vector. We use this to count the number of names (`length(df$Name)`).

Running this code will help you understand how these calculations are performed in practice.