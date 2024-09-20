# Feature Importance in Gradient Boosting Models

## Topic Overview
Hello and welcome! Today's lesson focuses on **Feature Importance in Gradient Boosting Models**. We will explore how to determine which features in our dataset are most influential in predicting Tesla (`$TSLA`) stock prices. By understanding the importance of features, we can refine our models and make more informed trading decisions.

## Revision of Previous Steps
Before diving into feature importance, let's quickly revise the previous steps to ensure we have a solid foundation.

**Data Preparation and Feature Engineering**:

```Python
import pandas as pd
import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load TSLA dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Feature Engineering: adding technical indicators as features
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Adj Close'].values

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# Standardizing features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

**Model Training**:

```Python
from sklearn.ensemble import GradientBoostingRegressor

# Instantiate and fit the model
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)
```

## Understanding Feature Importance
**What is Feature Importance?**

Feature importance refers to techniques that assign scores to input features based on their importance in predicting the target variable. In the context of a Gradient Boosting model, feature importance indicates how valuable each feature is in constructing the boosted decision trees.

**Why is Feature Importance Useful?**

Understanding feature importance helps:

* Identify and select the most influential features, potentially simplifying the model.
* Gain insights into the factors driving your predictions.
* Improve model interpretability and trustworthiness.

## Computing Feature Importance in Gradient Boosting
Once the Gradient Boosting model is trained, we can easily access the feature importances. Let's walk through the steps:

```Python
# Compute feature importance
feature_importance = model.feature_importances_

# Create a DataFrame for better visualization of feature names alongside their importance
feature_names = ['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']
feature_importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': feature_importance})

# Sort features by importance
feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# Print feature importances with names
print("Feature importance:\n", feature_importance_df)
# Output:
# Feature importance:
#   Feature    Importance
# 3   Close  9.447889e-01
# 1    High  3.668675e-02
# 0    Open  9.142875e-03
# 2     Low  8.464037e-03
# 6  SMA_10  4.800413e-04
# 7   EMA_5  2.992652e-04
# 8  EMA_10  1.326235e-04
# 5   SMA_5  5.195267e-06
# 4  Volume  3.363300e-07
```
Here's what each step is doing:

* **model.feature_importances_**: Extracts the feature importance scores from the trained Gradient Boosting model.
* **feature_names = [...]**: Defines a list of feature names for better readability.
* **feature_importance_df = pd.DataFrame(...)**: Creates a DataFrame that links feature names with their respective importance scores.
* **feature_importance_df.sort_values(...)**: Sorts the DataFrame by feature importance in descending order for better interpretation.

## Visualizing Feature Importance
Visualizing the importance of features helps interpret the results more effectively. We'll use Matplotlib to create a bar chart:

```Python
import matplotlib.pyplot as plt

feature_importance_df = feature_importance_df.iloc[::-1]

# Plotting feature importance
plt.figure(figsize=(10,6))
plt.barh(feature_importance_df['Feature'], feature_importance_df['Importance'])
plt.title('Feature Importances')
plt.xlabel('Importance')
plt.ylabel('Feature')
plt.show()
```

The plot of the above code is a bar chart visually indicating the significance of each feature, making it easier to distinguish the most influential features. This visualization is crucial for understanding how different features contribute to the model's predictions.

## Interpreting the Results
By examining the feature importance values and plot, you can determine which features have the most impact on the model's predictions. For instance, if `Adj Close` heavily relies on `SMA_10` and `Close`, we know they are critical factors in the stock's movement.

**Insights and Next Steps**:

**Focus on Key Features**: Emphasize the most important features in further analysis and model tuning.
**Feature Selection**: Consider removing less important features to simplify the model.
**Model Interpretation**: Use feature importance insights to explain model predictions to stakeholders.

## Lesson Summary
In this lesson, you learned about the concept of feature importance in Gradient Boosting models and its practical application to predict Tesla (`$TSLA`) stock prices. You computed feature importances, visualized them using a bar chart, and interpreted the results to gain actionable insights.

Understanding which features influence your model's predictions is crucial for refining your models and making informed trading decisions. Up next, practice these concepts to solidify your understanding and enhance your skillset in machine learning for financial trading.

Great job!