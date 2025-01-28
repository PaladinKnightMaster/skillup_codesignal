# Feature Engineering: Enhancing the Titanic Dataset for Survival Predictions

## Lesson Launch: Feature Engineering for Survival Rate Predictors
Welcome back to our course - **Data Cleaning and Preprocessing in Machine Learning**. Today's mission revolves around Feature Engineering on the Titanic dataset. By the end of today's lesson, your toolkit will be loaded with skills that revolve around feature creation, modification, and encoding. Your expertise in Python and Pandas will also be put into practice, reinforcing your knowledge in the process.

## Introduction to Feature Engineering
Feature engineering is the process of creating optimized features that improve the effectiveness of machine learning algorithms. This process utilizes the data to create new features and modify existing ones. This might involve creating new features, transforming existing features, or identifying and removing irrelevant ones. For instance, in our Titanic dataset, we have properties or indicators like `age`, `sex`, `pclass`, etc., which might need some optimizing.

Let's take `sibsp` and `parch` as an example: `sibsp` shows the number of siblings/spouses aboard while `parch` shows the number of parents/children onboard. Because these features both indicate the number of family members onboard for each individual, one might see them as similar features or even overlapping. Hence, we can combine these two features to create a new feature: `family_size`.

## Creating New Features
To start creating new features, we need to have the Titanic dataset in our hands. This can be quickly done in Python using Seaborn, as shown below:

```Python
import seaborn as sns

titanic_df = sns.load_dataset("titanic")
```

With the dataset ready, let's compute the `family_size` feature using the number of siblings/spouses (`sibsp`) and parents/children (`parch`).

```Python
titanic_df['family_size'] = titanic_df['sibsp'] + titanic_df['parch'] + 1 # +1 for self
```

This snippet of code will create a new column `'family_size'` and add it to the dataset `titanic_df`.

## Modification of Existing Features
Another valuable task in feature engineering is to modify existing features. For instance, the `fare` feature in our Titanic dataset may contain values that are significantly larger than the average, making the distribution of `fare` values skewed. This skewness could be unhelpful for our machine-learning algorithms and might induce overfitting.

In such a case, we can consider applying a log transformation to the `fare` column, with the aim of reducing skewness. The code snippet for this is shown below:

```Python
import numpy as np

# Adding a small constant to handle zero fares
titanic_df['log_fare'] = np.log(titanic_df['fare'] + 0.1)
```

Here, we add 0.1 to the `fare` column to adjust for zero values, then apply a logarithmic transformation.

## Handling and Encoding Categorical Values
Machine Learning algorithms generally deal with numbers and not text. Therefore, in handling categorical features, it is important to change text values to numerical ones. The process of doing this is called encoding. For our Titanic dataset, we can perform One-Hot Encoding on the `'sex'` column:

```Python
import pandas as pd

# Get dummy variables for the 'sex' column
sex_dummies = pd.get_dummies(titanic_df['sex'])
# Join the dummy variables to the main dataframe
titanic_df = pd.concat([titanic_df, sex_dummies], axis=1)
```

Here, we are using the `pd.get_dummies()` function to perform One-Hot Encoding on the `sex` column. This results in a new dataframe `sex_dummies` where each category in the `sex` column has its own column in the new dataframe.

## That's a Wrap For Now
Fantastic work today! You have delved into feature engineering with Python and Pandas, and you've been introduced to creating new features from scratch, modifying existing ones, and handling categorical features. Combining all these techniques, the cleaned, processed data can now be appropriately structured and ready to feed into a machine learning model for training. I almost forgot - let's go do some practice!
