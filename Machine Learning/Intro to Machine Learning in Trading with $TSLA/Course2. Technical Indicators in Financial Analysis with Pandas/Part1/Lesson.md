# Calculating Simple Moving Average (SMA) for Tesla Stock Using Pandas

## Lesson Overview
Hello and welcome to the Technical Indicators in Financial Analysis course! In today's lesson, we'll explore how to calculate and visualize the Simple Moving Average (SMA) for Tesla (`$TSLA`) stock prices using `Pandas` in Python. The goal is to help you understand how to handle stock price data, compute a key technical indicator (SMA), and interpret the results visually. Here is the lesson plan:

* Introduction to Financial Data Handling.
* Loading and Preprocessing `$TSLA` Data.
* Calculating the 20-day Simple Moving Average (SMA).
* Visualizing SMA with Stock Prices.
* Summary and Next Steps.

## Introduction to Financial Data Handling
Before diving into the code, it's essential to understand why financial data handling is crucial. Financial data analysis allows traders and analysts to interpret market trends, predict future stock movements, and make informed decisions.

We'll be using `Pandas`, a powerful Python library for data manipulation and analysis. Pandas mainly operates with `DataFrames` and `Series`, making it excellent for time series data like stock prices.

Time series data involves data points indexed in time order. In the context of stock prices, each data point corresponds to the stock price at a specific date and time.

## Loading and Preprocessing $TSLA Data
First, let's load the `$TSLA` dataset. We'll use the `datasets` library to fetch this data. After loading, we'll review the columns and convert the 'Date' column to `datetime` format, as it's crucial for time series processing.

```python
import pandas as pd
import datasets
import datetime as dt

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])
```
The output of the above code will be a `DataFrame` `tesla_df` containing historical price data for Tesla stock, sourced from the `codesignal/tsla-historic-prices` dataset. This data includes columns for open, close, high, low stock prices, and volume for each trading day.

Next, we need to ensure the 'Date' column is in `datetime` format and set it as the `DataFrame` index. This will help us handle the data more efficiently for time series analysis.

```python
# Convert 'Date' to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Sort the dataset by date
tesla_df.sort_index(inplace=True)
```
The preprocessing steps ensure that our data is in the correct format and order for further analysis.

## Calculating the 20-day Simple Moving Average (SMA)
The **Simple Moving Average** (SMA) is a widely-used technical indicator in financial analysis. It helps to smooth out price data by calculating the average stock price over a specific number of periods. This technique allows traders to easily identify the trend direction and filter out noise from random short-term price fluctuations.

The SMA is calculated by taking the arithmetic mean of the closing prices over a defined number of periods. For example, a 20-day SMA is the average closing price over the last 20 trading days.

We'll calculate the 20-day SMA for the closing price of the `$TSLA` stock. Pandas makes this task straightforward by providing the `rolling` method, which we can use to compute the moving average.

```python
# Calculate the 20-day Simple Moving Average for the Close Price
tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()
```
By adding the new 'SMA_20' column to our `DataFrame`, we can easily compare the SMA with the actual closing prices. This comparison will help us analyze the trends in Tesla's stock over the specified period.

## Visualizing SMA with Stock Prices
Visualization helps us interpret the data more intuitively. We'll use `Matplotlib`, a popular Python library for plotting, to visualize the `$TSLA` closing prices along with the calculated 20-day SMA.

First, we'll subset the data to a smaller range (e.g., the year 2018) for better visualization.

```python
import matplotlib.pyplot as plt

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']
```
Next, we'll plot the 'Close' price and 'SMA_20' on the same chart.

```python
# Plotting
tesla_df_small[['Close', 'SMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day SMA (2018)")
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_28.png)

The output of the above code is a plot showing Tesla's closing prices and the 20-day SMA for the year 2018. This visualization is key for analyzing the trend and volatility of Tesla's stock, demonstrating how the SMA provides a smoothed average of the closing prices over the specified period.

## Lesson Summary
In this lesson, we covered how to load and preprocess `$TSLA` stock price data, calculate the 20-day **Simple Moving Average** (SMA), and visualize it alongside the stock prices. These are foundational skills that will be essential as we move forward to more advanced technical indicators.

Practice these steps with different date ranges or other stocks to reinforce your learning. In the upcoming lessons, we will explore more advanced indicators, such as the Exponential Moving Average (EMA).

Keep practicing, and you'll steadily build a robust toolkit for making informed trading decisions using machine learning and financial analysis!
