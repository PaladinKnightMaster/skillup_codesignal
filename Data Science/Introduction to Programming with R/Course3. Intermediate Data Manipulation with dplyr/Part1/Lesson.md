# Select and Rename

## Welcome to Introduction to dplyr
Welcome back! Ready to elevate your data manipulation skills? In this unit, we'll dive into `dplyr`, an essential package in the R programming language for data manipulation.

The dplyr package provides a set of simple yet powerful “verbs” - functions that correspond to the most common data manipulation tasks. These verbs allow you to translate your thoughts and data manipulation goals directly into code, making your workflow more intuitive!

Additionally, it efficiently leverages optimized backends, minimizing the time you spend waiting for computations to finish!

## What You'll Learn
In this section, you'll learn the basics of the `dplyr` package. Specifically, we'll explore how to select specific columns from a dataframe and rename columns for better readability and usability.

We'll use a sample dataframe to demonstrate these concepts:

```R
# Note: We use `suppressPackageStartupMessages` to prevent startup messages
# from cluttering the output when loading the `dplyr` package.
suppressPackageStartupMessages(library(dplyr))

# Creating a sample dataframe
sample_df <- tibble(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Selecting the Name and Salary columns
selected_df <- sample_df %>%
  select(Name, Salary)

# Renaming columns for better readability
renamed_df <- sample_df %>%
  rename(EmployeeName = Name, EmployeeSalary = Salary)
```

The `library(dplyr)` command loads the dplyr package into your R environment, making its functions available for use!

Also notice how we use of `tibble()` for creating a data frame instead of `data.frame()` from the previous course. When working with `dplyr`, using tibbles is highly recommended as they provide a modern reimagining of data frames, however, everything covered here can also be used with regular `data.frame()`!

In the above example, we load the `dplyr` package and create a sample dataframe. We then select specific columns using `select()` and rename columns using `rename()`. These commands will be covered in detail in the upcoming practice session!

## Why It Matters
Understanding how to effectively manipulate data is critical for any data professional. The ability to select and rename columns allows you to tailor datasets to meet specific needs, making data easier to understand and analyze. These skills are foundational for more advanced data tasks you'll encounter later in this course and in real-world scenarios.

Excited to get hands-on with `dplyr`? Let's move on to the practice section and start honing your skills.
