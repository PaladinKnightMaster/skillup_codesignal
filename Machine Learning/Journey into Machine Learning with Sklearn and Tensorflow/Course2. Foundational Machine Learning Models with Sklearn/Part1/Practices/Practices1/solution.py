from sklearn.datasets import load_iris

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Print the length of features and target
print("Length of features: ", len(X))
print("Length of target: ", len(y))
# Print the shape of features and target
print("Shape of features: ", X.shape)
print("Shape of target: ", y.shape)