# Data Frame Calculations

## Ready for Data Frame Calculations?
Hello again! Welcome to another crucial part of mastering data frames in R. You've already learned how to create, inspect, and manipulate data frames. Now, it's time to elevate your skills by diving into data frame calculations. This lesson will be a significant step in your data analysis journey.

## What You'll Learn
In this lesson, you'll discover how to perform essential calculations on data frames, such as:

- **Calculating Mean Age**: Find the average age in your dataset.
- **Determining Maximum and Minimum Salary**: Identify the highest and lowest salaries.
- **Finding the Median Salary**: Know the middle value of the salary column.
- **Counting Names**: Count the total number of names in your dataset.

Here's a glimpse of everything we'll be doing in this lesson:

```R
# Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("John", "Jane", "Alex", "Emily", "David"),
  Age = c(28, 22, 35, 29, 40),
  Salary = c(50000, 60000, 70000, 80000, 90000)
)

# Calculate mean age
mean_age <- mean(df$Age)
print(mean_age)

# Calculate maximum and minimum salary
max_salary <- max(df$Salary)
min_salary <- min(df$Salary)

print(max_salary)
print(min_salary)

# Calculate median salary
median_salary <- median(df$Salary)
print(median_salary)

# Calculate the number of names
num_names <- length(df$Name)
print(num_names)
```

As you can see, these calculations will help you gain deeper insights from your data frames.

## Why This Matters
Understanding data frame calculations is vital for several reasons:

- **Data Insights**: Calculating key statistics helps you understand data trends and distributions.
- **Informed Decisions**: With precise calculations, you can make more informed and data-driven decisions.
- **Data Integrity**: Regularly calculating and reviewing statistics can help ensure the integrity and consistency of your datasets.

By mastering these calculations, you'll not only enhance your ability to analyze data, but you'll also be able to present your findings more effectively. Ready to dive in? Let’s begin the practice section and boost your data analysis skills!
