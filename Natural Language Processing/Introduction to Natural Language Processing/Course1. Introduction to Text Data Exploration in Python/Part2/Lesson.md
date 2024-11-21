# Exploring Text Data: Unveiling the Details of SMS Spam Collection

## Introduction and Overview
Welcome back! In this lesson, we're going to dig deeper and explore the SMS Spam Collection dataset. We'll learn how to find out more information about the data set like the unique counts, and some basic statistics. Understanding these details about the dataset is hugely important while working on Natural Language Processing (NLP) tasks, as they can drive the preprocessing and modeling steps.

## Exploring the Dataset
To get more details about the `DataFrame`, such as the datatypes of the columns and non-null counts, you can use the `info()` function. This method prints information about a `DataFrame` including the index dtype and columns, non-null values, and memory usage.

```Python
# Show detailed information about the dataset
print(df.info())
```

The output of the above code will be:

```Plain text
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5572 entries, 0 to 5571
Data columns (total 2 columns):
 #   Column   Non-Null Count  Dtype
---  ------   --------------  -----
 0   label    5572 non-null   object
 1   message  5572 non-null   object
dtypes: object(2)
memory usage: 87.2+ KB
```

This output shows the `DataFrame` structure detailing that it has two columns (`label` and `message`) with 5572 entries each. Both columns consist of objects (`dtype: object`), which means they are stored as strings in pandas, and there are no null values in either column, since the "Non-Null Count" is 5572 for both the `label` and `message` columns.

## Identifying Column Names
An essential preliminary step in data exploration is identifying the names of the columns in the DataFrame. Knowing the column names aids in efficiently accessing and manipulating data. Use the columns attribute to list all column names in the DataFrame:

```Python
# List all column names
print(df.columns)
```

This simple line of code will output the names of the columns in your dataset, making it easier for you to reference specific data points as you continue your analysis:

```Plain text
Index(['label', 'message'], dtype='object')
```

Understanding the column names in your dataset is crucial for applying specific data manipulation and analysis techniques effectively.

## Understanding Unique Values
Now that we have a basic understanding of the structure of the data, let's learn more about the content of the data. We can use the `nunique()` function to count the number of unique messages in the 'sms' column and the `unique()` function to find unique labels in the 'label' column.

```Python
# Count the number of unique messages and labels
print("Unique messages:", df['message'].nunique())
# Returns the unique labels
print("Labels:", df['label'].unique())
```

The output of the above code will be:

```Plain text
Unique messages: 5169
Labels: ['ham' 'spam']
```

This output indicates that there are 5169 unique messages in the dataset, and the 'label' column contains two unique values, 'ham' and 'spam', which represent non-spam and spam messages, respectively. This information is critical in understanding the diversity and distribution of the dataset.

## Descriptive Statistics
Finally, let's get some basic statistics about the data. Pandas provides the `describe()` function which, by default, provides a statistical summary of all numerical columns.

```Python
# Display basic statistics
print(df.describe())
```

The output of the above code will be:

```Plain text
       label                 message
count   5572                    5572
unique     2                    5169
top      ham  Sorry, I'll call later
freq    4825                      30
```

This output details the basic statistics for the 'message' column, signifying there are 5572 counts, with 5169 unique messages. The most common message is "Sorry, I'll call later" which appears 30 times. This summary gives insight into the repetitive nature of some messages in the dataset.

## Lesson Summary and Practice
In this lesson, we've taken a deeper look at our dataset using Python and pandas. We've learned how to use the pandas `info()`, `columns`, `nunique()`, `unique()`, and `describe()` functions to get more information on our dataset. Understanding the composition of the dataset is a very important step while working on NLP tasks. In our next exercises, we'll practice implementing these methods in order to reinforce what we've learned. Keep up the great work!
