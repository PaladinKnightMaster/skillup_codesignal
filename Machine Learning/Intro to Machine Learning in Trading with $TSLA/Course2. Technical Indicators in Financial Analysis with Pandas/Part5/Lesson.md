# Volume Weighted Average Price (VWAP): Calculation and Visualization Using Pandas

## Lesson Overview
Welcome to our final lesson in this course, Explorer! In this lesson, we will delve into the concept and calculation of **Volume Weighted Average Price (VWAP)** specifically for Tesla (`$TSLA`) stock data using `Pandas`. VWAP is a crucial indicator in trading that helps by providing the average price a security has traded at during the day, weighted by volume. By the end of this lesson, you'll be able to calculate VWAP and visualize it alongside the closing prices of Tesla stock data.

## Introduction to VWAP
Volume Weighted Average Price (VWAP) is a trading benchmark that gives traders insight into both the price and volume of trades for a particular stock. It represents the average price a stock has traded at throughout the day, weighted by volume.

VWAP is used by traders to identify the average price at which a stock was traded over a given period, reflecting both the price and the traded volume. It helps in determining the efficiency of stock execution by comparing it against the market's average.

The VWAP is calculated using the cumulative sum (the running total) of the volume and the volume-weighted prices:
\[
VWAP = \frac{\sum_{i=1}^{n}(P_i \times V_i)}{\sum_{i=1}^{n} V_i}
\]

where \( P_i \) is the price of the stock, and \( V_i \) is the volume of trades at each \( i \)-th period.

## Loading and Preprocessing Tesla Stock Data
Let's start by importing the necessary libraries and loading the Tesla (`$TSLA`) stock data. We'll use the `load_dataset` function from the `datasets` library.

```Python
import pandas as pd
import numpy as np
from datasets import load_dataset

# Load Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])
```
Next, we'll preprocess the data by converting the 'Date' column to datetime format and setting it as the index.

```Python
# Convert Date column to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)
```
For better visualization, we'll filter the data to focus on the year 2018.

```Python
# Filter data for the year 2018
tesla_df_small = tesla_df.loc['2018'].copy()
```

## Calculating the VWAP
Now that we have our data preprocessed, we can calculate the VWAP. We'll use the cumulative sum (the running total, where each value is added to the sum of previous values) of the product of volume and close price and then divide it by the cumulative sum of the volume.

```Python
# Calculate VWAP
tesla_df_small['VWAP'] = (np.cumsum(tesla_df_small['Volume'] * tesla_df_small['Close']) /
                          np.cumsum(tesla_df_small['Volume']))
```

## Visualizing VWAP with Closing Prices
Visualization helps in interpreting the financial data more effectively. We'll use `Matplotlib` to plot the VWAP alongside the closing prices.

```Python
import matplotlib.pyplot as plt

# Visualize VWAP with Close Price
tesla_df_small[['Close', 'VWAP']].plot(figsize=(12, 6), title="TSLA Close Price and VWAP (2018)")
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_34.png)
The output of the above code will be a plot that visually compares the closing prices and the VWAP of the Tesla stock during the year 2018. This plot helps in understanding the relationship between the price movements and the volume-weighted average price, giving insights into potential buying or selling pressures.

This visualization provides a clear comparison between the VWAP and the closing prices over the year 2018, helping traders identify trends and make more informed trading decisions.

## Lesson Summary
In this lesson, you learned how to calculate and visualize the Volume Weighted Average Price (VWAP) for Tesla stock data using `Pandas`. We covered the importance of VWAP, loaded and preprocessed the data, performed the VWAP calculation, and created a visualization.

Practice these steps on different date ranges or with different stocks to solidify your understanding. Mastering these techniques will enhance your ability to analyze financial data and make effective trading decisions based on volume-weighted trends. Keep practicing!
