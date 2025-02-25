# # Import the necessary libraries
# from sklearn.linear_model import LinearRegression
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error

# # Load the dataset
# iris = load_iris()
# X = iris.data[:, [0, 3]]  # Selecting only sepal length and petal length features
# y = iris.target

# # Split dataset into training set and test set: 70% training and 30% test
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# # Create a Linear Regression object
# lr = LinearRegression()

# # Train the model using the training sets
# lr.fit(X_train, y_train)

# # Make predictions using the testing set
# y_pred = lr.predict(X_test)

# # Compute mean squared error (you'll learn more about this soon)
# mse = mean_squared_error(y_test, y_pred)

# print("Mean Squared Error: ", mse)



# Import the necessary libraries
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Load the dataset
iris = load_iris()
X = iris.data[:, [0, 2]]  # Selecting only sepal length and petal length features
y = iris.target  # Target: Species classification

# Split dataset into training (70%) and testing set (30%) with a fixed random state for reproducibility
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a Linear Regression model
lr = LinearRegression()

# Train the model using the training set
lr.fit(X_train, y_train)

# Make predictions using the testing set
y_pred = lr.predict(X_test)

# Compute mean squared error
mse = mean_squared_error(y_test, y_pred)

print("Mean Squared Error: ", mse)
