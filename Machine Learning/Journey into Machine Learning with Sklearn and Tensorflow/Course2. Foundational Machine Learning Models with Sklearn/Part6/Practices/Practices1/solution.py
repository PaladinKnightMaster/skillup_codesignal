# # Import necessary libraries
# from sklearn.linear_model import LinearRegression
# from sklearn.datasets import load_iris
# import numpy as np

# # Load Iris dataset
# iris = load_iris()

# # Consider only one feature from iris.data for simplicity
# X = iris.data[:, np.newaxis, 2]
# y = iris.target

# # Define and fit the model
# model = LinearRegression()
# model.fit(X, y)

# # Print the coefficient of Linear Regression Model
# print("Linear Regression Model Coefficient:", model.coef_[0])



# Import necessary libraries
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_iris
import numpy as np

# Load Iris dataset
iris = load_iris()

# Consider only one feature from iris.data for simplicity
X = iris.data[:, np.newaxis, 3]
y = iris.target

# Define and fit the model
model = LinearRegression()
model.fit(X, y)

# Print the coefficient of Linear Regression Model
print("Linear Regression Model Coefficient:", model.coef_[0])