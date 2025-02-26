# # Import the necessary libraries
# from sklearn.linear_model import LinearRegression
# from sklearn.datasets import load_iris
# import numpy as np

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data[:, [0, 2]]  # Features correspond to "sepal length" and "petal length"
# y = iris.target  # Target variable

# # Initialize and fit the Linear Regression Model
# model = LinearRegression()

# # TODO: Fit the model with the feature set X and the target y

# # TODO: Generate some predictions

# # Calculate the Mean Squared Error of the model (more about this soon)
# mse = np.mean((predictions - y) ** 2)
# print('Mean Squared Error: ', mse)


# Import the necessary libraries
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_iris
import numpy as np

# Load the Iris dataset
iris = load_iris()
X = iris.data[:, [0, 2]]  # Features: Sepal Length & Petal Length
y = iris.target  # Target variable (species classification)

# Initialize and fit the Linear Regression Model
model = LinearRegression()

# Fit the model with the feature set X and the target y
model.fit(X, y)

# Generate some predictions
predictions = model.predict(X)

# Calculate the Mean Squared Error of the model
mse = np.mean((predictions - y) ** 2)
print('Mean Squared Error: ', mse)
