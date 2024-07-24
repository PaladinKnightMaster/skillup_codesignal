# Loading Data with Pandas

## Introduction to Pandas and Financial Data Handling
Hello and welcome! In today's lesson, you'll learn how to handle basic financial data using the **Pandas** library. Specifically, we'll focus on loading and displaying Tesla's (`$TSLA`) stock data. Understanding how to manipulate data using Pandas is an essential skill in data analysis and can significantly improve your machine-learning models.

**Pandas** is a powerful Python library that provides data structures and data analysis tools. It's particularly useful for managing time series data, like stock prices, transaction records, and more.

Understanding how to use Pandas in the context of financial data is vital. It helps in pre-processing data, making trading decisions, and even predicting market trends. Let's dive into this by starting with how to load financial data.

## Loading Data using the 'datasets' Library
We'll start by loading the Tesla (`$TSLA`) dataset using the `datasets` library - a library that's already built in the CodeSignal IDE. This library simplifies the process of fetching well-known datasets, so you can focus on analyzing and manipulating the data rather than spending time gathering it.

Here’s how you can load the TSLA dataset:

```python
import datasets

# Load the TSLA dataset using the datasets library
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
```
In this code, we import the `datasets` library and use its `load_dataset` function to fetch the Tesla stock prices. The argument `'codesignal/tsla-historic-prices'` tells the datasets library exactly which dataset to load.

## Creating a DataFrame in Pandas
Once we have our data, the next step is to create a DataFrame using Pandas. A DataFrame is a two-dimensional, size-mutable, and heterogeneous tabular data structure with labeled axes (rows and columns). Think of it as an Excel spreadsheet or a SQL table but with much more functionality.

Here’s how you can create a DataFrame using Pandas:

```python
import pandas as pd

# Create DataFrame from the dataset
tesla_df = pd.DataFrame(tesla_data['train'])
```
In this snippet, we import the Pandas library and create a DataFrame called `tesla_df` using the data we loaded previously. The `tesla_data['train']` part extracts the training data from the dataset.

## Displaying Data from a DataFrame: The Head
Now that we have our DataFrame, it's crucial to know how to display its contents. Displaying data helps us understand its structure and the kind of information it holds.

To display the first few rows of our DataFrame, we can use the `head()` method. This method is handy when you want to quickly check the beginning of your DataFrame:

```python
# Display the first few rows of the DataFrame
print(tesla_df.head())
```
The output of the above code will be:

```
         Date      Open      High       Low     Close  Adj Close     Volume
0  2010-06-29  1.266667  1.666667  1.169333  1.592667   1.592667  281494500
1  2010-06-30  1.719333  2.028000  1.553333  1.588667   1.588667  257806500
2  2010-07-01  1.666667  1.728000  1.351333  1.464000   1.464000  123282000
3  2010-07-02  1.533333  1.540000  1.247333  1.280000   1.280000   77097000
4  2010-07-06  1.333333  1.333333  1.055333  1.074000   1.074000  103003500
```
This output shows a truncated view of Tesla stock prices starting from its initial public offering (IPO). Each row represents a day with columns for the date, opening price, highest price of the day, lowest price of the day, closing price, adjusted closing price, and the volume of stocks traded.

## Displaying Data from a DataFrame: The Tail
You can also use the `tail()` method to view the last few rows of the DataFrame. This can be helpful in different scenarios, such as when checking the most recent stock prices:

```python
# Display the last few rows of the DataFrame
print(tesla_df.tail())
```
The output of the above code will be:

```
            Date        Open        High  ...       Close   Adj Close     Volume
3342  2023-10-09  255.309998  261.359985  ...  259.670013  259.670013  101377900
3343  2023-10-10  257.750000  268.940002  ...  263.619995  263.619995  122656000
3344  2023-10-11  266.200012  268.600006  ...  262.989990  262.989990  103706300
3345  2023-10-12  262.920013  265.410004  ...  258.869995  258.869995  111508100
3346  2023-10-13  258.899994  259.600006  ...  251.119995  251.119995  102073800

[5 rows x 7 columns]
```
This output demonstrates the structure of the dataset showing recent trading days. It provides insights into the latest trends, including closing and opening prices, for Tesla stock. Such information is crucial for making informed investment decisions.

By mastering these functions, you will be able to quickly inspect and understand any dataset you work with, which is a foundational skill in data manipulation and analysis.

## Lesson Summary and Practice
Great job! You have now learned the basics of loading datasets, creating DataFrames, and displaying data using the Panda's library. These skills are crucial for any financial data analysis and will serve as a foundation for more advanced data manipulation tasks.

In this lesson, you specifically covered:

* What Pandas is and its importance in financial data analysis
* How to load a dataset using the `datasets` library
* How to create a DataFrame in **Pandas**
* How to display data from a DataFrame using `head()` and `tail()`
* Next, we will move on to practice exercises where you can solidify these concepts. Practice is essential for improving your skills, ensuring you can confidently manipulate and interpret financial data. Let's get started with some hands-on tasks!
