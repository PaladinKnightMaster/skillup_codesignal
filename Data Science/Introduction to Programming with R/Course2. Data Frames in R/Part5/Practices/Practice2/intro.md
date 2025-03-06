# Grouping Data into New Categories

Great job following along so far! Let's make a slight adjustment to our current practice.

Before making the change however, let's understand what the current code does:

- In the given code, the `aggregate` function is used to summarize data.
- The expression `ID ~ AgeGroup` specifies that we are summarizing the `ID` column by the `AgeGroup` column.
- The parameter `data=df` indicates that the data frame being used is `df`.
- The parameter `FUN=length` specifies that the length function should be applied to count the number of IDs in each age group.

We are currently grouping ages into `[20, 30)`, `[30, 40)`, and `[40, 50)`.

Now, change the code to group ages differently into `[20, 25)`, `[25, 35)`, and `[35, 45)`.