# Filter and Slice Mastery

Good job on reaching the practice session! Before running the code that you saw in this lesson, let's understand how each of these functions works to filter and slice rows.

The filter function helps you isolate rows that meet certain conditions. It takes in a dataframe and a condition as arguments:

```R
# Filter rows based on a condition
filtered_df <- dataframe %>% filter(condition)
```

The slice function allows you to select rows by their position in the dataframe. It takes in a dataframe and row positions as arguments:

```R
# Slice rows by their position
sliced_df <- dataframe %>% slice(row_positions)
```

In this practice, you will:
1. Filter the rows where `Age` is greater than 30 (`Age > 30`).
2. Slice the first three rows from the dataframe (`1:3`).

Run the code and observe the output to see how these functions work!