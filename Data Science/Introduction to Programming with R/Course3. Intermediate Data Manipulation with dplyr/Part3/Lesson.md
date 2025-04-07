# Mutate and Relocate

## Welcome to Mutate and Relocate Functions
Welcome back! So far, you’ve learned how to select, rename, filter, and slice columns and rows using the powerful `dplyr` package in R. These skills help you clean and organize your data effectively. In this lesson, we’ll build on those skills by focusing on two more essential functions: mutate and relocate.

## What You'll Learn
In this lesson, you’ll dive into the `mutate` and `relocate` functions in `dplyr`. These functions allow you to add new columns based on existing data and change the order of columns in your data frame. These capabilities are essential for enhancing and organizing your data for analysis.

We’ll use a sample data frame similar to what you’ve seen before:

```R
suppressPackageStartupMessages(library(dplyr))

# Sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Mutate to add new columns
mutated_df <- sample_df %>%
  mutate(Bonus = Salary * 0.1, TotalCompensation = Salary + Bonus)

# Relocate the newly created TotalCompensation column after Salary
final_df <- mutated_df %>%
  relocate(TotalCompensation, .after = Salary)
```

You’ll learn how to:

- **Mutate**: Add new columns based on existing data.
- **Relocate**: Change the position of columns within your data frame.

## Why It Matters
Manipulating data is a critical skill in data analysis and preparation. With these tools, you’ll be able to handle your data more flexibly and prepare it thoroughly for any analytical task. This step is crucial to making your data analysis as efficient and insightful as possible.

Ready to enhance your data manipulation skills even further? Let’s start the practice section and get hands-on with `mutate` and `relocate`.
