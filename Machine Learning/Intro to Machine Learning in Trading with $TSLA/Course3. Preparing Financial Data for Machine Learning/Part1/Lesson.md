# Feature Engineering for ML

## Topic Overview
Hello and welcome! In today's lesson, we will explore **Feature Engineering for Machine Learning** using Tesla ($TSLA) stock data. Feature engineering is a crucial step in preparing financial data to build effective machine-learning models. We'll go through how to create new features from existing stock data using Python and `Pandas` to enhance our predictive capabilities.

## Introduction to Feature Engineering
*Feature engineering* involves creating new input variables (features) from raw data to improve the performance of machine learning models. This process is especially vital in financial markets, where capturing the correct patterns and relationships can significantly impact trading decisions.

For example, features like price differences, volatility, and moving averages can reveal underlying patterns in stock movements, aiding in more accurate predictions.

By the end of this lesson, you will understand how to generate meaningful features from stock data, setting a strong foundation for more advanced machine-learning techniques in trading.

## Loading Financial Data using Pandas
First, let's load our Tesla stock dataset using `Pandas`. Using `Pandas` is essential for handling financial data efficiently, enabling us to load, manipulate, and analyze large datasets with ease.

We'll be using the `datasets` library to import our dataset. Here's how you can load the dataset and convert it into a `Pandas` DataFrame:

```Python
import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])
print(tesla_df.head())
```
Executing the above code will load the Tesla stock data into a DataFrame called `tesla_df`. The DataFrame looks like this:

```
         Date      Open      High       Low     Close  Adj Close     Volume
0  2010-06-29  1.266667  1.666667  1.169333  1.592667   1.592667  281494500
1  2010-06-30  1.719333  2.028000  1.553333  1.588667   1.588667  257806500
2  2010-07-01  1.666667  1.728000  1.351333  1.464000   1.464000  123282000
3  2010-07-02  1.533333  1.540000  1.247333  1.280000   1.280000   77097000
4  2010-07-06  1.333333  1.333333  1.055333  1.074000   1.074000  103003500
```
Our dataset includes columns like `'Open'`, `'High'`, `'Low'`, and `'Close'`, representing the stock's opening, highest, lowest, and closing prices for each day. Here’s a brief description:

* **Open**: The price at which the stock opened.
* **High**: The highest price reached during the trading day.
* **Low**: The lowest price reached during the trading day.
* **Close**: The price at which the stock closed.

## Creating New Features
Now, let's create new features from our existing data. We'll generate two new features: `High-Low` and `Price-Open`.

The `High-Low` feature represents the price range of the stock for each day. It is calculated as the difference between the highest and lowest prices. This feature can be useful to gauge the daily volatility of the stock.

```Python
# Creating the High-Low feature
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
```
The `Price-Open` feature represents the difference between the closing and opening prices of the stock for each day. This feature indicates how much the price has moved from the start to the end of the trading day, which is another valuable indicator.

```Python
# Creating the Price-Open feature
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']
```

## Inspecting and Verifying Features
Let’s inspect the new features we’ve created to ensure they are correct and understand their potential usefulness.

We can use the `Pandas` `head()` function to display the first few rows of our newly created features:

```Python
# Displaying the new features
print(tesla_df[['High-Low', 'Price-Open']].head())
```
The output of the above code will be:

```
   High-Low  Price-Open
0  0.497334    0.326000
1  0.474667   -0.130666
2  0.376667   -0.202667
3  0.292667   -0.253333
4  0.278000   -0.259333
```
This output demonstrates our newly calculated features for the Tesla stock data. The `High-Low` column indicates the range between the highest and lowest stock prices each day, serving as a measure of volatility. The `Price-Open` column shows the difference between the closing and opening prices, providing insight into daily price movement.

* **High-Low**: A value of 4.50 means the highest price was $4.50 more than the lowest price for that day, indicating the daily range.
* **Price-Open**: A value of 0.30 means the closing price was $0.30 higher than the opening price, showing how much the stock rose during that day.

## Lesson Summary
In this lesson, we covered the basics of feature engineering and its importance in machine learning. Specifically, we:

* Learned what feature engineering is and its role in financial data analysis.
* Loaded Tesla stock data using `Pandas`.
* Created new features (`High-Low` and `Price-Open`) to enhance our dataset.
Mastering feature engineering is crucial for building robust and accurate predictive models. In the upcoming practice exercises, you'll reinforce these concepts by applying them to create more complex and insightful features from financial data. Let's get started!
