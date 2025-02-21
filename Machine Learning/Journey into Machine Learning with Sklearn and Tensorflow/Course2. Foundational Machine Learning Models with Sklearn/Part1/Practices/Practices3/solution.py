# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # TODO: Use train_test_split to split the data into training and testing sets
# # Make sure to set test_size to represent 20% of the data and a random_state for reproducibility
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=__, random_state=__)

# # Print the size of the training and testing data
# print("Size of training data: ", len(X_train))
# print("Size of testing data: ", len(X_test))



from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# TODO: Use train_test_split to split the data into training and testing sets
# Make sure to set test_size to represent 20% of the data and a random_state for reproducibility
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Print the size of the training and testing data
print("Size of training data: ", len(X_train))
print("Size of testing data: ", len(X_test))