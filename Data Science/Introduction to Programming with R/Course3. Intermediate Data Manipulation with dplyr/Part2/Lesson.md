# Filter and Slice

## Welcome to Filtering and Slicing Functions
Welcome back! We're continuing our journey through the powerful dplyr package in R. Previously, you learned how to select and rename columns in a dataframe. These are essential skills for cleaning and organizing your data. Now, let's take it a step further and focus on filtering and slicing rows. This will allow you to shape your data even more precisely.

## What You'll Learn
In this section, you'll be introduced to two key functions in `dplyr`: `filter` and `slice`. These functions help you narrow down your dataset to include only the rows you’re interested in. We'll use the same sample dataframe as before:

```R
suppressPackageStartupMessages(library(dplyr))

sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Filter rows where Age is greater than 30
filtered_df <- sample_df %>% filter(Age > 30)

# Slice the first three rows
sliced_df <- sample_df %>% slice(1:3)
```

You'll learn how to:

- Filter rows based on specific conditions.
- Slice rows by their position in the dataframe.

For example, in the snippet above, we filter for rows where the age is greater than 30 and slice the first three rows. As always, we'll cover these commands in detail in the upcoming practice session!

## Why It Matters
Filtering and slicing are crucial tools for data analysis. They enable you to focus on relevant subgroups of your data, making your analysis more targeted and efficient. You can quickly isolate the data that meets your criteria, which is invaluable for deeper insights and decision-making.

By mastering these functions, you'll be better equipped to handle large datasets and perform more complex analyses. It's an exciting step forward in your data manipulation journey!

Ready to put these concepts into practice? Let's get started with the practice section.
