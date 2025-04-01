# from sklearn.tree import DecisionTreeClassifier
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # Split the dataset into a training set and a test set
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# # Decision Tree Classifier: Suitable for classification; Careful of overfitting
# # TODO: Initialize the DecisionTreeClassifier with a parameter that helps prevent overfitting.
# # TODO: Fit the model with X_train and y_train.
# y_pred_dec_tree = dec_tree.predict(X_test)

# # Evaluate the model
# dec_tree_accuracy = accuracy_score(y_test, y_pred_dec_tree)

# print("Decision Tree Accuracy:", dec_tree_accuracy)



from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset into a training set and a test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Decision Tree Classifier: Suitable for classification; Careful of overfitting
# TODO: Initialize the DecisionTreeClassifier with a parameter that helps prevent overfitting.
# TODO: Fit the model with X_train and y_train.
dec_tree = DecisionTreeClassifier(max_depth=1)
dec_tree.fit(X_train, y_train)
y_pred_dec_tree = dec_tree.predict(X_test)

# Evaluate the model
dec_tree_accuracy = accuracy_score(y_test, y_pred_dec_tree)

print("Decision Tree Accuracy:", dec_tree_accuracy)