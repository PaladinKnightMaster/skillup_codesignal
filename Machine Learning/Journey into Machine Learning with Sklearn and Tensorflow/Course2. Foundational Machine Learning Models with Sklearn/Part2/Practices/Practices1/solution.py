# # Import the necessary libraries
# from sklearn.linear_model import LinearRegression
# from sklearn.datasets import load_iris

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data  # Features
# y = iris.target  # Target variable

# # Initialize and fit the Linear Regression Model
# model = LinearRegression()
# model.fit(X, y)

# # Print the model parameters
# print('Coefficients: \n', model.coef_)
# print('Intercept: \n', model.intercept_)

# Import the necessary libraries
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_iris

# Load the Iris dataset
iris = load_iris()

# Select only "sepal length" (column 0) and "petal length" (column 2)
X = iris.data[:, [0, 2]]  # Features: Sepal Length & Petal Length
y = iris.target  # Target variable (species classification)

# Initialize and fit the Linear Regression Model
model = LinearRegression()
model.fit(X, y)

# Print the model parameters
print('Coefficients: \n', model.coef_)
print('Intercept: \n', model.intercept_)
