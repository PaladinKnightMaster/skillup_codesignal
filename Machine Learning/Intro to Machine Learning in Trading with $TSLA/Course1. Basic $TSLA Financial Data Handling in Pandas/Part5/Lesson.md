# Filtering Data by Date Range in Pandas

## Introduction to Date Filtering
In this lesson, we'll explore how to filter time series financial data by date range using the Pandas library. Filtering data by specific date ranges is vital in financial analysis, allowing us to focus on periods of interest, such as a particular year or month. This skill is essential for traders and analysts who need to examine stock performance during specific periods, such as economic crises or fiscal quarters.

## Converting Date Columns to Datetime Objects
The first step in filtering data by date is to ensure that the date column is in a suitable format. Let's start by loading the Tesla (`$TSLA`) stock dataset and converting the "Date" column to datetime objects using `pd.to_datetime()`.

```python
import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert the Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Display initial rows to inspect the format
print(tesla_df.head())
```
The output of the above code confirms that the 'Date' column is now in datetime format, which is crucial for time series analysis:

```
        Date      Open      High       Low     Close  Adj Close     Volume
0 2010-06-29  1.266667  1.666667  1.169333  1.592667   1.592667  281494500
1 2010-06-30  1.719333  2.028000  1.553333  1.588667   1.588667  257806500
2 2010-07-01  1.666667  1.728000  1.351333  1.464000   1.464000  123282000
3 2010-07-02  1.533333  1.540000  1.247333  1.280000   1.280000   77097000
4 2010-07-06  1.333333  1.333333  1.055333  1.074000   1.074000  103003500
```

## Setting the Date Column as Index
Setting the date column as the index of the DataFrame and sorting it simplifies the process of slicing and filtering data based on dates. It also enhances performance during such operations.

Here’s how to set the "Date" column as the index and sort it:

```python
# Set the Date column as the index
tesla_df.set_index('Date', inplace=True)

# Sort the DataFrame based on the index
tesla_df.sort_index(inplace=True)
print(tesla_df.head())
```
The output of the above code will be:

```
                Open      High       Low     Close  Adj Close     Volume
Date
2010-06-29  1.266667  1.666667  1.169333  1.592667   1.592667  281494500
2010-06-30  1.719333  2.028000  1.553333  1.588667   1.588667  257806500
2010-07-01  1.666667  1.728000  1.351333  1.464000   1.464000  123282000
2010-07-02  1.533333  1.540000  1.247333  1.280000   1.280000   77097000
2010-07-06  1.333333  1.333333  1.055333  1.074000   1.074000  103003500
```
This output confirms that the Date column has successfully been set as the index of the DataFrame and successfully sorted in chronological order based on this index, ensuring an accurate timeline for subsequent analysis.

## Filtering Data by Specific Date Range
With the date column converted to `datetime` objects, set as the index, and sorted, we can now filter the DataFrame by a specific date range. This technique is particularly useful when you need to analyze data for a specific year, month, or any custom date range.

Let’s filter the dataset for the year 2020:

```python
# Filtering the dataset for the year 2020
tesla_2020 = tesla_df.loc['2020']
print(tesla_2020.head())
```
In this code, `loc` is a Pandas method used for label-based indexing. It allows you to select rows and columns based on labels, such as dates in this case. Here, we use loc to filter the DataFrame based on the date labels, extracting all rows corresponding to the year 2020.

The output of the above code will be:

```
                 Open       High        Low      Close  Adj Close     Volume
Date
2020-01-02  28.299999  28.713333  28.114000  28.684000  28.684000  142981500
2020-01-03  29.366667  30.266666  29.128000  29.534000  29.534000  266677500
2020-01-06  29.364668  30.104000  29.333332  30.102667  30.102667  151995000
2020-01-07  30.760000  31.441999  30.224001  31.270666  31.270666  268231500
2020-01-08  31.580000  33.232666  31.215334  32.809334  32.809334  467164500
```
This output demonstrates the successful filtering of the DataFrame to show stock prices for the start of 2020. The simplified view focuses on the 'Open' column to display the opening stock prices at the beginning of the year, providing a quick insight into Tesla's stock performance during this period.

## Other Ways to Filter by Date
We can also filter for more specific date ranges, such as a particular month or quarter:

```python
# Filtering data for January 2020
tesla_jan_2020 = tesla_df.loc['2020-01']
print(tesla_jan_2020.head())
```
The output of the above code will be:

```
                 Open       High        Low      Close  Adj Close     Volume
Date
2020-01-02  28.299999  28.713333  28.114000  28.684000  28.684000  142981500
2020-01-03  29.366667  30.266666  29.128000  29.534000  29.534000  266677500
2020-01-06  29.364668  30.104000  29.333332  30.102667  30.102667  151995000
2020-01-07  30.760000  31.441999  30.224001  31.270666  31.270666  268231500
2020-01-08  31.580000  33.232666  31.215334  32.809334  32.809334  467164500
```
To filter a quarter, the code will look like this:

```python
# Filtering data from January 2020 to March 2020 (Q1)
# Unlike the common Python slicing operator, here, March 2020 (2020-03) is inclusive
tesla_q1_2020 = tesla_df.loc['2020-01':'2020-03']
print(tesla_q1_2020.tail())
```
The output of the above code will be:

```
                 Open       High        Low      Close  Adj Close     Volume
Date
2020-03-25  36.349998  37.133331  34.074001  35.950001  35.950001  318340500
2020-03-26  36.492668  37.333332  34.150002  35.210667  35.210667  260710500
2020-03-27  33.666668  35.053333  32.935333  34.290668  34.290668  215661000
2020-03-30  34.017334  34.443333  32.748669  33.475334  33.475334  179971500
2020-03-31  33.416668  36.197334  33.133331  34.933334  34.933334  266572500
```

## Plotting the Filtered Data
After filtering the data, visualizing it can help identify patterns and trends over the specified date range. We will use **Matplotlib**, a popular plotting library in Python, to create a time series plot.

Let's visualize the January 2020 data and the Q1 2020 data for Tesla stock:

```python
import matplotlib.pyplot as plt

# Plotting the filtered data for Q1 2020
tesla_q1_2020 = tesla_df.loc['2020-01':'2020-03']

plt.figure(figsize=(10, 5))
plt.plot(tesla_q1_2020.index, tesla_q1_2020['Close'], marker='o', linestyle='-')
plt.title('Tesla Stock Prices in Q1 2020')
plt.xlabel('Date')
plt.ylabel('Closing Price')
plt.grid(True)
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_23.png)

By visualizing the data, you can gain insights into stock performance and identify trends over the specified periods, thereby enhancing your financial analysis capabilities.

## Lesson Summary
In this lesson, you learned how to filter time series financial data by date ranges using the Pandas library. We covered converting date columns to `datetime` objects, setting the date column as the index, sorting the DataFrame chronologically, and filtering data by specific date ranges. These techniques are essential for focusing on specific periods relevant to your financial analysis or trading strategy.

Next, we will have some practice exercises to reinforce these concepts, making sure you are comfortable with filtering financial data by date. This practice will enhance your data manipulation skills, which are crucial for efficient time series analysis in trading and financial contexts. Let's get started!
