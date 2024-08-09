# Comparing SMA and EMA with Tesla Stock Data

## Lesson Overview
Hello and welcome! In today's lesson, we will be comparing Simple Moving Average (SMA) and **Exponential Moving Average** (EMA) using Tesla (`$TSLA`) stock data. This lesson will help you revise how to handle financial data with `Pandas`, calculate both `SMA` and `EMA`, and create visualizations to understand and compare these technical indicators.

**Goal**: By the end of this lesson, you will be able to load financial data, compute `SMA` and `EMA`, and visualize these indicators to make informed trading decisions.

**Lesson Plan**:

1. Loading and Preparing the Dataset
2. Calculating and Comparing SMA and EMA
3. Subsetting the Data for Visualization
4. Plotting SMA and EMA for Comparison

## Loading and Preparing the Dataset
Let's start by loading the Tesla dataset and preparing it for analysis. We will convert the 'Date' column to `datetime` format and set it as the index.

```python
import pandas as pd
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')

# Convert the dataset into a DataFrame
tesla_df = pd.DataFrame(dataset['train'])

# Convert the 'Date' column to datetime format
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set the 'Date' column as the index
tesla_df.set_index('Date', inplace=True)
```

## Calculating and Comparing SMA and EMA
We'll calculate the 20-day Simple Moving Average (`SMA`) and Exponential Moving Average (`EMA`) of the closing prices.

```python
# Calculate the 20-day Simple Moving Average
tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()

# Calculate the 20-day Exponential Moving Average
tesla_df['EMA_20'] = tesla_df['Close'].ewm(span=20, adjust=False).mean()
```
To make the visualization clearer, we'll focus on the year 2018.

```python
# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']
```

## Plotting SMA and EMA for Comparison
Finally, we will plot the closing prices along with the `SMA` and `EMA` to visualize and compare these indicators using Matplotlib.

```python
import matplotlib.pyplot as plt

# Plotting
tesla_df_small[['Close', 'SMA_20', 'EMA_20']].plot(figsize=(12, 6), title="TSLA Close Price, SMA 20, and EMA 20 (2018)")
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_32.png)

The output of the above code will be a visual line graph showing TSLA's closing price, along with the 20-day `SMA` and `EMA` values for the year 2018. This graphical representation allows us to visually compare the `SMA` and `EMA` against the actual closing prices, thus demonstrating their utility in trend analysis and trading decision-making.

## Lesson Summary
In this lesson, you revised how to load and preprocess financial data, compute both Simple Moving Average (`SMA`) and Exponential Moving Average (`EMA`), and visualize the results to compare these technical indicators. Practice exercises will follow, which will solidify your understanding and help you to apply these concepts to make informed trading decisions. The exercises will enhance your skills in handling real-world financial data and in implementing financial analyses effectively.
