# # Import necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.tree import DecisionTreeClassifier

# # Load Iris dataset
# iris = load_iris()
# X = iris.data  # features
# y = iris.target  # Target variable

# # Split the data into train and test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

# # Initialize the model with the default criterion
# clf = DecisionTreeClassifier()

# # Fit the model to the training data
# clf.fit(X_train, y_train)

# # Make predictions on the test set
# y_pred = clf.predict(X_test)

# # Print the predicted labels
# print("\nPredicted test labels:")
# print(y_pred)


# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

# Load Iris dataset
iris = load_iris()
X = iris.data  # Features
y = iris.target  # Target variable

# Split the data into train and test sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

# Initialize the Decision Tree Classifier with 'entropy' criterion
clf = DecisionTreeClassifier(criterion='entropy')  # Changed from default 'gini' to 'entropy'

# Fit the model to the training data
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)

# Print the predicted labels
print("\nPredicted test labels:")
print(y_pred)
