# Wrangling Missing Data: Techniques Applied to the Titanic Dataset

## Lesson Introduction
Welcome to an intriguing lesson on missing data handling! Today, we're diving into the Titanic dataset, a passage in time to the early 20th century. Our main aim? To wrangle missing data using Python and Pandas. Don't worry if you're unfamiliar with these terms yet, we'll break them down one by one!

- **Python**: A high-level, interpreted programming language that is easy to learn yet powerful. It has bundles of libraries, like Pandas, that make data manipulation a breeze.
- **Pandas**: A Python library providing high-performance, easy-to-use data structures and data analysis tools.
By the end of this lesson, you'll understand the basics of handling missing data, which is an essential step in preparing your data for machine learning models. So let's get started!

## Understanding Missing Data
As an analyst or data scientist, it's pivotal to understand why data might be missing, as it helps in choosing the best strategy to handle it. Missing data, which are like missing puzzle pieces, can occur due to several reasons, such as not being collected, being recorded incorrectly, or even being lost over time.

Furthermore, missing data can be categorised as:

* **Missing completely at random (MCAR)**: The missing data entries are random and don't correlate with any other data.
* **Missing at random (MAR)**: The missing values depend on the values of other variables.
* **Missing not at random (MNAR)**: The missing values have a particular pattern or logic.

## Identifying Missing Values in the Titanic Dataset
Before we can consider how to handle missing data, let's learn how to identify it. We'll use the isnull() and sum() functions from the Pandas library to find the number of missing values in our Titanic dataset:

```Python
import seaborn as sns
import pandas as pd

# Import Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Identify missing values
missing_values = titanic_df.isnull().sum()
print(missing_values)
```

The output from this code will be:

```Markdown
survived         0
pclass           0
sex              0
age            177
sibsp            0
parch            0
fare             0
embarked         2
class            0
who              0
adult_male       0
deck           688
embark_town      2
alive            0
alone            0
dtype: int64
```

In the output, you'll see each column name accompanied by a number that denotes the number of missing values in that column.

## Strategies to Handle Missing Data
Armed with the knowledge of missing data and its types, it's time to decide how to handle them. Broadly, you can consider three main strategies:

* **Deletion**: This involves removing the rows and columns containing missing data. However, this might lead to the loss of valuable information.
* **Imputation**: This includes filling missing values with substituted ones, like the mean, median, or mode (the most common value in the data frame).
* **Prediction**: This involves using a predictive model to estimate the missing values.

A balance of intuition, experience, and technical know-how usually dictates the best method to use.

## Handling Missing Data in the Titanic Dataset
Let's get our hands dirty and handle missing data firsthand in the Titanic dataset. For the “age” feature, we'll fill in missing entries with the median passenger age. And, for the “deck” feature, where most entries are missing, we'll delete the entire column.

```Python
# Dealing with missing values

# Dropping columns with excessive missing data
new_titanic_df = titanic_df.drop(columns=['deck'])

# Imputing median age for missing age data
new_titanic_df['age'].fillna(new_titanic_df['age'].median(), inplace=True)

# Display the number of missing values post-imputation
missing_values_updated = new_titanic_df.isnull().sum()
print(missing_values_updated)
```

The updated missing values count comes out to be:

```Markdown
survived       0
pclass         0
sex            0
age            0
sibsp          0
parch          0
fare           0
embarked       2
class          0
who            0
adult_male     0
embark_town    2
alive          0
alone          0
dtype: int64
```

As you can see from the updated missing values count, we have successfully handled the missing data! Note that we could also use the `dropna()` function to handle missing data by removing rows with missing values. However, we should be cautious, as this might remove a significant portion of our data. Here's how you can do it: `titanic_df.dropna()`.

## Lesson Summary and Practice
Well done! You have now explored the basics of handling missing data, an essential pre-processing step for any machine-learning model. The skill of dealing with missing data is a key arrow in any data scientist's quiver, ensuring that your data is clean and ready for modeling.

Get set for some upcoming practice sessions that will provide you with opportunities to apply and reinforce what you've learned today. Feel the thrill as we continue venturing deeper into the world of data processing! Nothing should be missing from your data now, so it's time to wield your new skills!
