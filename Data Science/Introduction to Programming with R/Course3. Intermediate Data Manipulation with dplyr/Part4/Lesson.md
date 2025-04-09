# Summarize and Group By

## Welcome to Summarize and Group By Functions
Welcome back! In the previous lessons, we've explored how to select, rename, filter, slice, mutate, and relocate columns and rows in your data using the `dplyr` package. These techniques have provided you with a solid foundation for data manipulation. In this lesson, we will extend that knowledge by delving into two more powerful functions: summarize and group_by.

## What You'll Learn
In this lesson, you will learn about the `summarize` and `group_by` functions in `dplyr`. These tools enable you to transform your data into meaningful summaries and analyze trends within subgroups.

Here’s a taste of what you’ll be working with, using a sample data frame similar to past examples:

```R
suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Summarize to get average salary
avg_salary <- sample_df %>% summarize(AvgSalary = mean(Salary))
print("Average salary of the dataframe:")
print(avg_salary)

# Group by age > 30 and summarize average salary
grouped_summary <- sample_df %>% group_by(Age > 30) %>% summarize(AvgSalary = mean(Salary))
print("Average salary grouped by Age > 30:")
print(grouped_summary)
```

Note: Using multiple `%>%` operators is called "chaining" and we'll explore this concept in more detail in the next unit.

You will learn how to:

- **Summarize**: Create summary statistics for your entire data frame or subgroups within it.
- **Group By**: Divide your data into groups based on certain conditions before applying summary functions to each group.

## Why It Matters
Being able to summarize and group data is fundamental for deriving insights and making data-driven decisions. By combining these functions, you can transform raw data into insightful summaries that are crucial for any data analysis task. These skills will be invaluable whether you’re working with small datasets or large-scale data projects.

Excited to dive into summarizing and grouping data? Let’s start the practice section and put these powerful tools to work!
