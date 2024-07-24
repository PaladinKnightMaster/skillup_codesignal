# Basic Data Inspection in Pandas

## Introduction to Data Inspection

Hello! In this lesson, we will explore the fundamental techniques for inspecting **financial data** using the `Pandas` library in Python. Our goal is to enable you to load financial data, inspect its structure, and perform basic data analysis. Let's get started!

## Loading and Displaying Data
First, let's recap how to import the necessary libraries and load the dataset. In this scenario, we'll use **Tesla (TSLA)** historical stock prices.

1. **Import Libraries**: We need to import `pandas` for data manipulation and the `datasets` library to load our data.
2. **Load the Dataset**: We use the `load_dataset` function from the `datasets` library to load the Tesla dataset.
3. **Convert to DataFrame**: We convert the loaded dataset into a `Pandas` DataFrame.
4. **Display Data**: Using the `head()` and `tail()` methods, we can view the first few and last few rows of the dataset, respectively.

Here's the code to achieve this:

```python
import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Display first 5 rows of the DataFrame
print(tesla_df.head())
```
This code snippet loads the TSLA dataset and displays the first 5 rows to help us get a quick look at the data.

## Inspecting Data Structure
Next, we want to understand the structure of our dataset. This involves examining the columns, data types, and the number of non-null entries. The `info()` method of a `Pandas` DataFrame provides a concise summary of these details.

* **Data Structure Information**: The `info()` method reveals important aspects such as:
    * Column names and data types
    * Non-null counts for each column
Here's the code to inspect the data structure:

```python
# Print basic information about the dataset
print(tesla_df.info())
```
The output will be:

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 3347 entries, 0 to 3346
Data columns (total 7 columns):
 #   Column     Non-Null Count  Dtype
---  ------     --------------  -----
 0   Date       3347 non-null   object
 1   Open       3347 non-null   float64
 2   High       3347 non-null   float64
 3   Low        3347 non-null   float64
 4   Close      3347 non-null   float64
 5   Adj Close  3347 non-null   float64
 6   Volume     3347 non-null   int64
dtypes: float64(5), int64(1), object(1)
memory usage: 183.2+ KB
None
```
This output summarizes the dataset structure, showing that it consists of 3347 entries with 7 different columns. It also highlights that there are no missing values in the dataset, and it provides the data type of each column, which is essential to understand before performing any data manipulation or analysis.

## Summary Statistics
To gain preliminary insights into our data, we can use the `describe()` method, which provides summary statistics such as mean, standard deviation, minimum, and maximum values, and quartiles.

* **Descriptive Statistics**: The `describe()` method presents these key statistics for all numerical columns in the DataFrame, helping us understand data distribution and identify any anomalies.
Here's the code to generate summary statistics:

```python
# Display summary statistics
print(tesla_df.describe())
```
The output will be:

```
              Open         High  ...    Adj Close        Volume
count  3347.000000  3347.000000  ...  3347.000000  3.347000e+03
mean     67.901248    69.413435  ...    67.886520  9.643192e+07
std     100.209872   102.472746  ...   100.136888  8.058132e+07
min       1.076000     1.108667  ...     1.053333  1.777500e+06
25%      10.152000    10.432000  ...    10.081333  4.540425e+07
50%      16.793333    17.000000  ...    16.771334  8.011650e+07
75%      66.069336    67.129334  ...    65.896000  1.230548e+08
max     411.470001   414.496674  ...   409.970001  9.140820e+08

[8 rows x 6 columns]
```
This concise summary details the distribution of Tesla's stock prices, including the mean, standard deviation, minimum, and maximum values across various metrics such as opening price, high, low, close, adjusted close, and volume. It provides a snapshot of the stock's volatility and trading volume, which are critical for financial analysis.

## Conclusion and Summary
In this lesson, you have learned the basics of data inspection using `Pandas`. We have covered how to:

* Load a dataset and convert it into a DataFrame.
* Display the data using the `head()` method.
* Inspect the data structure using the `info()` method.
* Generate summary statistics using the `describe()` method.
These fundamental skills are crucial for analyzing financial data and making informed trading decisions. Practice exercises will follow to reinforce your understanding and improve your data handling proficiency. Let's keep up the momentum and continue mastering financial data handling in `Pandas`!
