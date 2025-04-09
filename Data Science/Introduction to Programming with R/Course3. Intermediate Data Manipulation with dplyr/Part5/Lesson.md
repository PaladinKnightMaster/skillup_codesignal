# Chain and Arrange

## Welcome to Chaining dplyr Functions
Welcome back! You've already built a strong foundation with `dplyr` by learning how to select, rename, filter, slice, mutate, and relocate data. Now, let’s take those skills a step further. In this lesson, we will learn about chaining multiple `dplyr` functions for powerful and efficient data manipulation. We will also introduce the `arrange` function to help you sort your data for better insights.

## What You'll Learn
In this lesson, you will learn how to chain multiple `dplyr` functions together to perform complex data manipulations in a concise and readable manner. Here is a glimpse of what you will achieve:

```R
suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Chaining multiple dplyr functions
final_df <- sample_df %>%
  mutate(Bonus = Salary * 0.1) %>%
  filter(Age > 25) %>%
  select(Name, Age, Salary, Bonus) %>%
  arrange(desc(Age))

print(final_df)
```

For example, in the code above, you can see how we:

1. **Mutate**: Create a new column called `Bonus` that calculates 10% of the `Salary`.
2. **Filter**: Keep only the rows where `Age` is greater than 25.
3. **Select**: Choose the `Name`, `Age`, `Salary`, and `Bonus` columns.
4. **Arrange**: Sort the data by `Age` in descending order using `arrange()` (the `dplyr` equivalent of the `order` function we used in the previous course)

We'll be using the %>% operator to chain these functions together, making the code more readable and efficient!

## Why It Matters
Chaining functions streamlines your data manipulation tasks, making your code more efficient and easier to read. By mastering these techniques, you can build robust data pipelines that are essential for data analysis and reporting. This skill is particularly useful when dealing with large datasets, enabling you to perform complex operations with simple, readable code.

Ready to unlock the full potential of `dplyr`? Let’s start the practice section and harness the power of chaining functions together!
