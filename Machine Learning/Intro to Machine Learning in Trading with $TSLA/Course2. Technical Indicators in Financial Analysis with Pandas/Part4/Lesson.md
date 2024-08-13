# Applying Technical Indicators to Identify Trends

## Lesson Overview
Hello and welcome! Today, we will explore **Applying Technical Indicators to Identify Trends** using Tesla's (**$TSLA**) stock data. You will revisit how to calculate Simple Moving Averages (SMAs), and learn how to identify trend signals like *Golden Cross and Death Cross*, and visualize these trends using `pandas` and `matplotlib`.

**Lesson Goal**: To understand and implement technical indicators (SMA) and identify trend signals (Golden Cross and Death Cross) in financial data using Python and Pandas.

**Lesson Plan**:

1. Loading and Preparing Tesla Stock Data
2. Calculating Simple Moving Averages (SMAs)
3. vIdentifying Golden Cross and Death Cross
4. Visualizing the Results

## Loading and Preparing Tesla Stock Data
As a reminder, we will use historical prices of Tesla stock for our analysis. Let's load the dataset and prepare it:

```python
import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert 'Date' column to datetime format and set it as the index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)
```
**Explanation**:

* **Import Libraries**: We import `pandas` for data manipulation, `matplotlib.pyplot` for plotting, and `load_dataset` to fetch our Tesla stock data.
* **Load Dataset**: We use `load_dataset` to fetch the dataset and convert it to a DataFrame.
* **Convert Date Column**: The `Date` column is converted to datetime format for easier manipulation.
* **Set Index**: We set the `Date` column as the index to efficiently perform time series operations.

## Calculating Simple Moving Averages (SMAs)
A Simple Moving Average (SMA) smooths out price data over a pre-defined time period to identify trends. Now, let's calculate the SMAs:

```python
# Calculate 50-day and 200-day SMAs
tesla_df['SMA_50'] = tesla_df['Close'].rolling(window=50).mean()
tesla_df['SMA_200'] = tesla_df['Close'].rolling(window=200).mean()
```
Explanation:

**SMA_50**: We calculate the 50-day SMA by using the `rolling` method with a window of 50 days on the 'Close' price and then applying the `mean` function.
**SMA_200**: Similarly, we calculate the 200-day SMA by using a rolling window of 200 days.

## Identifying Golden Cross and Death Cross
In trading, golden and death crosses are defined as follows:

* **Golden Cross**: Occurs when a short-term SMA (50-day) crosses above a long-term SMA (200-day), indicating a potential upward trend.
* **Death Cross**: Occurs when a short-term SMA (50-day) crosses below a long-term SMA (200-day), indicating a potential downward trend.
Now, let's create signals for these crossover points:

```python
# Identifying the "Golden Cross" and "Death Cross"
tesla_df['Signal'] = 0  # Default value
tesla_df.loc[tesla_df['SMA_50'] > tesla_df['SMA_200'], 'Signal'] = 1
tesla_df.loc[tesla_df['SMA_50'] < tesla_df['SMA_200'], 'Signal'] = -1

# Creating a column to mark crossover points
tesla_df['Crossover'] = tesla_df['Signal'].diff()
```
Explanation:

* **Signal Column**: We create a 'Signal' column to store initial values as 0.
* **Golden Cross Signal**: When the 50-day SMA crosses above the 200-day SMA, we set the 'Signal' to 1.
* **Death Cross Signal**: When the 50-day SMA crosses below the 200-day SMA, we set the 'Signal' to -1.
* **Crossover Column**: We create a 'Crossover' column to store the points where the signal changes (differs from the previous day), indicating a crossover event.

## Visualizing the Results
We will use a smaller date range for better visualization. In this example, let's visualize the `$TSLA` data for the year 2018.

```python
# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']
```
Next, we will plot the Close price, 50-day SMA, and 200-day SMA.

```python
# Plot with Golden Cross and Death Cross
fig, ax = plt.subplots(figsize=(12, 6))
tesla_df_small[['Close', 'SMA_50', 'SMA_200']].plot(ax=ax, title="TSLA with Golden Cross and Death Cross (2018)")
```
* **Smaller Date Range**: By focusing on a specific year ('2018'), we can more clearly see the trends and crossover points.
* **Plot Data**: We plot the 'Close' prices along with the 50-day and 200-day SMAs to visualize the trends.
Now, to highlight the crossover points, we loop through the 'Crossover' column in the DataFrame. We use green dots for the Golden Cross and red dots for the Death Cross.

```python
# Highlighting Golden Cross and Death Cross points
crosses = tesla_df_small[tesla_df_small['Crossover'] != 0]
for idx, row in crosses.iterrows():
    if row['Crossover'] == 2:
        plt.plot(idx, row['SMA_50'], 'go', markersize=10, label='Golden Cross' if 'Golden Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")
    elif row['Crossover'] == -2:
        plt.plot(idx, row['SMA_50'], 'ro', markersize=10, label='Death Cross' if 'Death Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")

plt.legend()
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_33.png)
* **Select Crossover Points**: We identify points where the 'Crossover' column is not zero, indicating a Golden Cross or Death Cross.
* **Plot Crossovers**: We loop through these points, plotting green dots for Golden Cross events and red dots for Death Cross events.
* **For Loop Explanation**:
    * **Crosses Variable**: We filter `tesla_df_small` to get rows where the 'Crossover' column is not zero.
    * **Loop Through Crosses**: For each index (`idx`) and row in the `crosses` DataFrame:
        * **Check for Golden Cross**: If the 'Crossover' value is 2, plot a green dot at the index on the 50-day SMA curve.
        * **Check for Death Cross**: If the 'Crossover' value is -2, plot a red dot at the index on the 50-day SMA curve.

## Lesson Summary
You have now learned how to apply and visualize technical indicators such as SMAs to identify trends in Tesla stock data. This lesson covered importing and preparing financial data, calculating SMAs, identifying trend signals, and visualizing the results. Practice exercises will reinforce these essential skills, allowing you to analyze and make informed trading decisions. Understanding stock movements and improving your trading strategies by leveraging Python and Pandas is crucial for success in the financial market.

Ready to take your skills to the next level? Let's dive into the practice exercises!
