# Splitting Dataset into Training and Testing Set

## Lesson Overview
Welcome! In today's lesson, we will learn how to split a dataset into training and testing sets. This is a crucial step in preparing your data for machine learning models to ensure they generalize well to unseen data.

Lesson Goal: By the end of this lesson, you will understand how to split financial datasets, such as Tesla's stock data, into training and testing sets using `Python`.

## Revision of Preprocessing Steps
Before we delve into splitting the dataset, let's briefly review the preprocessing steps we have covered so far. The dataset has been loaded, new features have been engineered, and the features have been scaled.

Here's the code for those steps for a quick revision:

```Python
import pandas as pd
from sklearn.preprocessing import StandardScaler
import datasets

# Loading and preprocessing the dataset (revision)
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Defining features and target
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
# Target is the column that we are trying to predict
target = tesla_df['Close'].values

# Scaling
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
```

## Understanding the Importance of Splitting Datasets
To avoid `overfitting`, where a model learns the training data too well and performs poorly on new, unseen data, it's important to evaluate your machine learning model on data it has never seen before. This is where splitting datasets into training and testing sets comes into play.

**Why Split?**

* **Training Set**: Used to train the machine learning model.
* **Testing Set**: Used to evaluate the model's performance and check its ability to generalize to unseen data.

This ensures that your model's performance is not just tailored to the training data but can be generalized to new inputs.

## Implementing Dataset Split with 'train_test_split'
The `train_test_split` function from `sklearn.model_selection` helps us easily split the data.

**Parameters of** `train_test_split`:

* `test_size`: The proportion of the dataset to include in the test split (e.g., `0.25` means 25% of the data will be used for testing).
* `train_size`: The proportion of the dataset to include in the train split (optional if test_size is provided).
* `random_state`: Controls the shuffling applied to the data before the split. Providing a fixed value ensures reproducibility.

Let's split our scaled features and targets into training and testing sets:

```Python
from sklearn.model_selection import train_test_split

# Splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)
```

The `train_test_split` function will split our dataset into training and testing sets:

* `features_scaled` and `target` are the inputs.
* `test_size=0.25` means 25% of the data goes to the test set.
* `random_state=42` ensures reproducibility. The state can be any other number, too.

## Verifying Shapes and Contents of the Split Data
After splitting the dataset, it's important to verify the shapes and the contents of the resulting sets to ensure the split was done correctly.

**Checking Shapes**:

* Print the shapes of the training and testing sets to confirm the split ratio is as expected.

**Inspecting Sample Rows**:

* Print a few rows of the training and testing sets to visually inspect the data.

Let's check our split data:

```Python
# Verify splits
print(f"Training features shape: {X_train.shape}")
print(f"Testing features shape: {X_test.shape}")

print(f"First 5 rows of training features: \n{X_train[:5]}")
print(f"First 5 training targets: {y_train[:5]}\n")

print(f"First 5 rows of testing features: \n{X_test[:5]}")
print(f"First 5 testing targets: {y_test[:5]}")
```

The output of the above code will be:

```
Training features shape: (2510, 3)
Testing features shape: (837, 3)
First 5 rows of training features:
[[-4.66075964e-01  6.80184955e-02  3.11378946e-01]
 [ 4.01701510e+00  5.04529577e+00 -4.61555718e-02]
 [ 2.04723437e+00  3.09900603e+00  9.43022378e-04]
 [-5.30579018e-01 -2.30986178e-02 -5.67163058e-01]
 [-4.78854883e-01 -5.79376618e-02 -6.94451021e-01]]
First 5 training targets: [ 17.288    355.666656 222.419998  15.000667  13.092   ]

First 5 rows of testing features:
[[-0.36226203  0.2087143   0.69346624]
 [ 1.27319589  1.04049732  0.58204785]
 [-0.53556882 -0.03231093 -0.86874821]
 [-0.49029475  0.07773304 -0.51784526]
 [ 3.0026057  -4.41816938 -0.31923731]]
First 5 testing targets: [ 23.209333 189.606674  14.730667  16.763332 325.733337]
```

This output confirms that our dataset has been successfully split into training and testing sets, showing the shape of each set and giving us a glimpse into the rows of our features and targets post-split. It's an important validation step to ensure our data is ready for machine learning model training and evaluation.

## Lesson Summary
Great job! In this lesson, we:

* Discussed the importance of splitting datasets to avoid overfitting.
* Implemented `train_test_split` to divide the dataset into training and testing sets.
* Verified the shapes and inspected sample rows of the resulting splits.

These steps are crucial for ensuring that your machine learning models can generalize well to new data. Up next, you'll have some practice exercises to solidify your understanding and improve your data preparation skills. Keep going!
