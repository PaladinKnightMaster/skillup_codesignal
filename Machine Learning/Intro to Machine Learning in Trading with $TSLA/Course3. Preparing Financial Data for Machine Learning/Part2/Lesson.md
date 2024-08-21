# Scaling Features with StandardScaler

## Topic Overview
In today's lesson, you'll learn how to standardize financial data using the StandardScaler from the `sklearn` library. Scaling features ensure that all data contribute equally to machine learning models, improving their performance and robustness.

**Lesson Goal**: By the end of this lesson, you will be able to effectively scale financial features and understand the importance of this step in preparing data for **machine learning**.

## Revision: Loading and Preprocessing the Dataset
Let's quickly recall how to load and preprocess the Tesla stock dataset:

```Python
import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature Engineering: creating new features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']
```
We've successfully loaded the Tesla dataset and created new features: `High-Low` and `Price-Open`.

## Introduction to Feature Scaling
Feature scaling is crucial for machine learning for several reasons:

* **Equal Contribution**: Ensures all features contribute equally to the model.
* **Improved Convergence**: Helps in faster convergence during model training by making gradients less sensitive to feature magnitude.
* **Prevent Dominance**: Prevents features with larger scales from dominating those with smaller scales.
Feature scaling is particularly useful in scenarios like:

* **Predicting House Prices**: Square footage in thousands vs. the number of bedrooms in single digits.
* **Stock Market Analysis**: Stock price in hundreds vs. trading volume in millions.
* **Health Data**: Age in the 0-100 range vs. blood pressure in the hundreds.
* **Retail Sales Prediction**: Number of items sold vs. store rating in single digits.
These examples highlight the importance of scaling to ensure uniform treatment of features, thereby enhancing model performance.

## Defining Standardization

Standardization involves transforming your data so that the mean of each feature is 0 and the standard deviation is 1. This process ensures all features are on the same scale, improving the performance and robustness of machine learning models. The formula for standardization is:

\[
z = \frac{(x - \mu)}{\sigma}
\]

where:

- \(z\) is the standardized value,
- \(x\) is the original value,
- \(\mu\) is the mean of the feature, calculated as the average of all values of that feature,
- \(\sigma\) is the standard deviation of the feature, which measures the amount of variation or dispersion of the values.

By applying this formula, each feature will have a mean of 0 and a standard deviation of 1, enabling more stable and faster convergence during the training of machine learning models.

## Implementing StandardScaler on Financial Data
Let's proceed to scale our features using `StandardScaler` from `sklearn`. The `StandardScaler` standardizes features by removing the mean and scaling to unit variance.

First, we define our features:

```Python
from sklearn.preprocessing import StandardScaler

# Defining features
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
```
Now, let's initialize the scaler and apply it to our features:

```Python
# Scaling
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
```
Here, `fit_transform` computes the mean and standard deviation to scale the data and then returns the transformed version.

## Inspecting Scaled Features
It's essential to inspect and validate the scaled features to ensure they have been correctly normalized. Let's display the first few rows of the scaled features:

```Python
# Displaying the first few scaled features
print("Scaled features (first 5 rows):\n", features_scaled[:5])
```
The output of the above code will be:

```
Scaled features (first 5 rows):
 [[-0.48165383  0.08560547  2.29693712]
 [-0.48579183 -0.02912844  2.00292929]
 [-0.50368231 -0.04721815  0.33325453]
 [-0.51901702 -0.0599476  -0.23997882]
 [-0.52169457 -0.06145506  0.08156432]]
```
This output demonstrates that our features have been successfully scaled to have a standardized scale, specifically with mean values hovering around 0 and standard deviation about 1. This scaling ensures equality in feature contribution to the machine learning model.

## Validating Scaled Features
After scaling your features, it's important to check the mean and standard deviation to ensure they are correctly standardized. You can do this using the following code:

```Python
# Checking mean values and standard deviations of scaled features
scaled_means = features_scaled.mean(axis=0)
scaled_stds = features_scaled.std(axis=0)

print("\nMean values of scaled features:", scaled_means)
print("Standard deviations of scaled features:", scaled_stds)
```
The output will show that the means are close to 0 and the standard deviations are close to 1:

```
Mean values of scaled features: [ 3.39667875e-17  5.57267607e-18 -6.79335750e-17]
Standard deviations of scaled features: [1. 1. 1.]
```
This validation confirms that your features have been successfully scaled.

## Lesson Summary
In this lesson, we revisited loading and preprocessing the Tesla stock dataset, discussed the importance of scaling features, and implemented `StandardScaler` to normalize our financial data features. By inspecting the scaled features, we ensured they were correctly normalized.

Experiment with scaling other features in the dataset to understand their impact further. This practice will reinforce your understanding and skill in data preprocessing, which is vital for building effective and reliable machine-learning models. Happy coding!
