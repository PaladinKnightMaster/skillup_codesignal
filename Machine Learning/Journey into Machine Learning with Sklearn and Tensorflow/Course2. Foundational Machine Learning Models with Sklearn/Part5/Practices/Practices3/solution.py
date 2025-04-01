# from sklearn.metrics import accuracy_score
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.datasets import load_iris

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # TODO: Split the data into Training and Test sets using the provided test_size and random_state.

# # Instantiate and train a Decision Tree model
# tree_model = DecisionTreeClassifier()
# tree_model.fit(X_train, y_train)

# # TODO: Predict the labels of the Test set and compute accuracy.

# # Print the accuracy
# print('Accuracy: ', accuracy)


from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# TODO: Split the data into Training and Test sets using the provided test_size and random_state.
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# Instantiate and train a Decision Tree model
tree_model = DecisionTreeClassifier()
tree_model.fit(X_train, y_train)

# TODO: Predict the labels of the Test set and compute accuracy.
y_pred = tree_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

# Print the accuracy
print('Accuracy: ', accuracy)