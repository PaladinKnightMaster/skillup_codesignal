# # Import necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.metrics import accuracy_score

# # Load Iris dataset
# iris = load_iris()
# X = iris.data  # features
# y = iris.target  # Target variable

# # Split the data into train and test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

# # Initialize the decision tree classifier
# clf = DecisionTreeClassifier()

# # Fit the model with the training data
# clf.fit(X_train, y_train)

# # Make predictions on the test data
# y_pred = clf.predict(X_test)

# # TODO: Calculate and print the accuracy of the model
# # Remember to use the true and predicted labels from the test set


# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load Iris dataset
iris = load_iris()
X = iris.data  # features
y = iris.target  # Target variable

# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

# Initialize the decision tree classifier
clf = DecisionTreeClassifier()

# Fit the model with the training data
clf.fit(X_train, y_train)

# Make predictions on the test data
y_pred = clf.predict(X_test)

# TODO: Calculate and print the accuracy of the model
# Remember to use the true and predicted labels from the test set
accuracy = accuracy_score(y_test, y_pred)
print("\nAccuracy:")
print(accuracy)