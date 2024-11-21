# Detecting Missing Data and Understanding Data Types in NLP

## Introduction
Welcome back! In this lesson, we will continue using the SMS Spam Collection dataset and deepen our understanding of text datasets by jumping into a key preparatory step in **Natural Language Processing** (NLP): detecting missing data and identifying data types. Real-world text datasets usually entail imperfections like missing values that could affect our analysis and outcomes if untreated. They can also be composed of different data types that need to be properly handled for precise and efficient processing. Our exemplary solution code provides you a practical approach to address these steps using Python and pandas.

## Understanding Missing Data
Missing data is essentially the absence of data where there should be data. In other words, an entry in a column (field) is missing if no data is stored for that entry in our dataset. Missing data can be a nuisance for statisticians and data analysts since it can severely skew results and lead to biased models.

To detect missing data, we commonly use the `isnull()` function from the pandas library, which returns a DataFrame where all cells are either True (if the original cell value is missing) or False (if the original cell value is not missing). To get a summation of missing values in each column, we can use the `sum()` function.

```Python
print(df.isnull().sum())
```

The output of the above code will be:

```Plain text
label    0
message  0
dtype: int64
```

This output indicates there are no missing records in the `sms` and `label` columns of our DataFrame.

## Identifying Data Types
It's vital to know what types of data are stored in our columns (or variables) because they dictate the operations we can perform and the techniques for data cleaning and wrangling we should employ. For instance, text must be processed differently from numerical or categorical data.

Common data types used in Python include:

* Boolean types: `bool`
* Integer types: `int`
* Float types: `float`
* Text string: `str`
* Timestamps: `datetime`

We use the pandas dtypes attribute to determine the data types of each column in our DataFrame.

```Python
print(df.dtypes)
```

The output of the above code will be:

```Plain text
label      object
message    object
dtype: object
```

This output illustrates that the `message` and `label` columns are of type `object`, which is typically used for text or mixed types of data in pandas.

## Lesson Summary and Upcoming Practice
Congratulations! You've added another layer to your data handling toolkit by learning how to detect missing data and identify data types. By implementing these techniques, you will be able to prepare your dataset more effectively for subsequent NLP tasks.

Remember, practice is essential for retaining new knowledge and enhancing your skills. The exercises which follow offer practical implementations of the concepts we covered in this lesson.

In the upcoming lessons, we'll delve deeper into text data preprocessing, so stay tuned!
