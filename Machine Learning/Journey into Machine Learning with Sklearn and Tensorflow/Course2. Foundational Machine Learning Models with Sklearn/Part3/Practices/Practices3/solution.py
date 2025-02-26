# # Import the required libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression

# # Load the Iris dataset
# iris = load_iris()

# # Split the data into training and test sets
# X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)

# # Initialize a Logistic Regression model
# lr_model = LogisticRegression(solver='some-solver', multi_class='ovr')

# # Fit the model with the training data
# lr_model.fit(X_train, y_train)

# # Generate predictions using the test data
# predictions = lr_model.predict(X_test)

# # Print the predictions
# print("Predictions: ", predictions)


# Import the required libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load the Iris dataset
iris = load_iris()

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)

# Initialize a Logistic Regression model
lr_model = LogisticRegression(solver='liblinear', multi_class='ovr')

# Fit the model with the training data
lr_model.fit(X_train, y_train)

# Generate predictions using the test data
predictions = lr_model.predict(X_test)

# Print the predictions
print("Predictions: ", predictions)