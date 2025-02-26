# # Import the necessary libraries
# from sklearn.linear_model import LinearRegression
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data[:, [0, 2]]  # Selecting only sepal length and petal length features
# y = iris.target

# # TODO: Split dataset into training set and testing set with 30% of the data reserved for testing
# # Train the model using only the training sets

# # Create a Linear Regression object
# lr = LinearRegression()

# # Print the model parameters
# print('Coefficients: \n', lr.coef_)
# print('Intercept: \n', lr.intercept_)


# Import the necessary libraries
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load the Iris dataset
iris = load_iris()
X = iris.data[:, [0, 2]]  # Selecting only sepal length and petal length features
y = iris.target  # Target: Species classification

# TODO: Split dataset into training (70%) and testing set (30%) with a fixed random state for reproducibility
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a Linear Regression object
lr = LinearRegression()

# Train the model using only the training sets
lr.fit(X_train, y_train)

# Print the model parameters
print('Coefficients: \n', lr.coef_)
print('Intercept: \n', lr.intercept_)
