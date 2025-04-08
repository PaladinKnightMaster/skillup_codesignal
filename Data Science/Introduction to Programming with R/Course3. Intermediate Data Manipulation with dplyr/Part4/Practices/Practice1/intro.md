# Group and Summarize Data

Great progress so far! Before running the code let's understand how each of these functions work!

The `summarize` function creates summary statistics for your data, such as calculating the average or total. It takes a dataframe and summary function definitions as arguments:

- `mean()`: Calculate the average value
- `sum()`: Calculate the total sum
- `n()`: Count the number of rows
- `min()`: Find the minimum value
- `max()`: Find the maximum value
- `median()`: Calculate the median value

In the code, `mean()` is used to calculate the average salary.

```R
# Summarize to create summary statistics
summarized_df <- dataframe %>% summarize(summary_definitions)

# Note: summarize() and summarise() are synonyms and can be used interchangeably.
summarised_df <- dataframe %>% summarise(summary_definitions)
```

The `group_by` function groups your data based on certain conditions, enabling you to apply summary functions to each group separately. It takes a dataframe and grouping column definitions as arguments:

```R
# Group by to create groups and then summarize
grouped_df <- dataframe %>% group_by(grouping_column) %>% summarize(summary_definitions)
```

In the code, the `group_by` groups the dataframe based on whether the Age is greater than 30, allowing for summary statistics like the average salary to be calculated within each age group separately. The `summarize` function is then used to perform these calculations within each group.

The output of the grouped summary will have `TRUE` for the group where age is above 30 and `FALSE` for the group where age is 30 or below.

In this practice, we will:

- Summarize the data to get the average salary.
- Group by whether the age is above 30 and summarize the average salary within each group.

Now, let's run the code you saw in the lesson to better understand the `summarize` and `group_by` functions in dplyr!