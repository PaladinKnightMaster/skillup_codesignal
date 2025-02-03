# # Importing necessary libraries
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
# from sklearn.linear_model import LogisticRegression
# import seaborn as sns
# import pandas as pd

# # Load and preprocess the Titanic dataset
# titanic_df = sns.load_dataset('titanic')

# # One-hot encode categorical variables using pandas get_dummies
# titanic_preprocessed = pd.get_dummies(titanic_df, columns=['sex', 'embarked', 'class', 'who', 'adult_male', 'deck', 'embark_town', 'alive', 'alone'], drop_first=True)

# # Handle any NaN values by filling them with the mean of the column
# titanic_preprocessed = titanic_preprocessed.fillna(titanic_preprocessed.mean())

# # Split the preprocessed dataset into the training and testing datasets with a 70%-30% split
# train_data, test_data = train_test_split(titanic_preprocessed, test_size=0.3, random_state=42)

# # Separate the target variable ("survived") from the rest of the training data
# x_train = train_data.drop("survived", axis=1)
# y_train = train_data["survived"]

# # Initialize a Logistic Regression model
# logreg = LogisticRegression(max_iter=1000)  # Increased max_iter for convergence

# # Training the Logistic Regression model
# logreg.fit(x_train, y_train)

# # Using the model to make predictions on the testing dataset
# predictions = logreg.predict(x_train)

# # Displaying metrics
# print("Classification Report:")
# print(classification_report(y_test, predictions))  # Will produce incorrect results due to the bug

# print("Confusion Matrix:")
# print(confusion_matrix(y_test, predictions))  # Will produce incorrect results due to the bug

# print("Accuracy Score:")
# print(accuracy_score(y_test, predictions))  # Will produce incorrect results due to the bug

# Importing necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
from sklearn.linear_model import LogisticRegression
import seaborn as sns
import pandas as pd

# Load and preprocess the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# One-hot encode categorical variables using pandas get_dummies
titanic_preprocessed = pd.get_dummies(titanic_df, columns=['sex', 'embarked', 'class', 'who', 'adult_male', 'deck', 'embark_town', 'alive', 'alone'], drop_first=True)

# Handle any NaN values by filling them with the mean of the column
titanic_preprocessed = titanic_preprocessed.fillna(titanic_preprocessed.mean())

# Split the preprocessed dataset into the training and testing datasets with a 70%-30% split
train_data, test_data = train_test_split(titanic_preprocessed, test_size=0.3, random_state=42)

# Separate the target variable ("survived") from the rest of the training and testing data
x_train = train_data.drop("survived", axis=1)
y_train = train_data["survived"]
x_test = test_data.drop("survived", axis=1)
y_test = test_data["survived"]

# Initialize a Logistic Regression model
logreg = LogisticRegression(max_iter=1000)  # Increased max_iter for convergence

# Training the Logistic Regression model
logreg.fit(x_train, y_train)

# Using the model to make predictions on the testing dataset (FIXED)
predictions = logreg.predict(x_test)  # Now correctly using x_test

# Displaying metrics
print("Classification Report:")
print(classification_report(y_test, predictions))

print("Confusion Matrix:")
print(confusion_matrix(y_test, predictions))

print("Accuracy Score:")
print(accuracy_score(y_test, predictions))
