# from sklearn.metrics import mean_absolute_error
# from sklearn.linear_model import LinearRegression
# from sklearn.model_selection import train_test_split
# from sklearn.datasets import load_iris

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # Split the data into Training and Test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# # Instantiate and train a Linear Regression model
# lr_model = LinearRegression()
# lr_model.fit(X_train, y_train)

# # TODO: Use the trained model to predict the labels of the Test set
# # TODO: Calculate the Mean Absolute Error between predicted and actual labels



from sklearn.metrics import mean_absolute_error
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the data into Training and Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# Instantiate and train a Linear Regression model
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# TODO: Use the trained model to predict the labels of the Test set
# TODO: Calculate the Mean Absolute Error between predicted and actual labels
y_pred = lr_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
print(mae)