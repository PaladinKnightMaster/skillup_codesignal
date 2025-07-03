# Reshape Data with tidyr
Great job reaching the practice session!

Before running the code, let's reinforce your understanding of both of these functions:

The `pivot_longer()` function helps you convert data from wide to long format (gathers). It generally takes the following arguments:

- `data`: The original dataframe.
- `cols`: Specifies the columns to be pivoted from wide to long format.
- `names_to`: Defines the new column that will contain the names of the pivoted columns.
- `values_to`: Defines the new column that will contain the values of the pivoted columns.
In the following example:

```R
# Gather into long format
long_data <- data %>% pivot_longer(cols = Math:Science, names_to = "Subject", values_to = "Score")
```

- `data`: The original dataframe.
- `cols = Math:Science`: Specifies the columns to be pivoted from wide to long format.
- `names_to = "Subject"`: Defines the new column that will contain the names of the pivoted columns.
- `values_to = "Score"`: Defines the new column that will contain the values of the pivoted columns.
The `pivot_wider()` function helps you convert data back from long to wide format (spreads). It generally takes the following arguments:

- `data`: The dataframe in long format.
- `names_from`: Specifies the column that contains the names to be used as new column headers in wide format.
- `values_from`: Specifies the column that contains the values to fill the new columns in wide format.
In the following example:

```R
# Spread back to wide format
wide_data <- long_data %>% pivot_wider(names_from = Subject, values_from = Score)
```

- `data`: The dataframe in long format.
- `names_from` = Subject: Specifies the column that contains the names to be used as new column headers in wide format.
- `values_from` = Score: Specifies the column that contains the values to fill the new columns in wide format.

In this practice, you will:

1. `Pivot longer`: Convert the dataframe from wide to long format.
2. `Pivot wider`: Convert the dataframe back from long to wide format.

Simply run the code and observe the output!