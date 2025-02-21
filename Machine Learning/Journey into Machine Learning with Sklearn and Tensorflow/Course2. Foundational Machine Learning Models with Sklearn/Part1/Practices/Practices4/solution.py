# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # Split the data into training and testing sets with an incorrect test size
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.7, random_state=47)

# # Print the size of the training and testing data
# print("Size of training data: ", len(X_train))
# print("Size of testing data: ", len(X_test))



from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Correct the test size to 20% (not 70%) and set a random state for reproducibility
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Print the size of the training and testing data
print("Size of training data: ", len(X_train))  # Expected: 120
print("Size of testing data: ", len(X_test))  # Expected: 30
