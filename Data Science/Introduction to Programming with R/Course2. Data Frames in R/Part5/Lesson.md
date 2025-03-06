# Data Aggregation

## Intro to Data Aggregation
Great to see you back! You've previously learned how to create and manipulate data frames and perform essential calculations. This next step, data aggregation, will take your skills even further. You'll learn how to group data and perform operations on these groups, which is critical for summarizing and understanding large datasets.

## What You'll Learn
In this lesson, you'll discover how to:

- **Add an Age Group Column**: Categorize individuals based on their age.
- **Aggregate Data for Average Salary**: Calculate the average salary for different age groups.

In the practice section, we'll also learn how to count the number of people in each group!

Here's a sneak peek of what we'll be working on:

```R
# Create a data frame
df <- data.frame(
  ID = 1:10,
  Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
  Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
  Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000)
)

# Add an AgeGroup column
df$AgeGroup <- cut(df$Age, breaks=c(20, 30, 40, 50), right=FALSE)

# Aggregate data: calculate average salary by age group
avg_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=mean)
print(avg_salary_by_age_group)
```

By the end of this lesson, you'll have a strong grasp of how to summarize and interpret your data using aggregation techniques. More examples and practices will follow in the practice section to reinforce your learning.

## Why It Matters
Data aggregation is crucial in data analysis for several reasons:

- **Summarizing Data**: Aggregation helps you summarize large datasets into understandable chunks.
- **Identifying Patterns**: By grouping data, you can identify trends and patterns that aren't immediately visible.
- **Informed Decision-Making**: Aggregated data provides a higher-level view, aiding strategic decisions based on meaningful insights.
- **Efficiency**: It helps in transforming raw data into more useful information quickly.

With these skills, you'll be able to handle more complex data analysis tasks and present well-structured insights. Excited to dive deeper? Let's proceed to the practice section together!
