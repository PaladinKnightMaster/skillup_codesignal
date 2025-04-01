# from sklearn.linear_model import LogisticRegression
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # Split the dataset into a training set and a test set
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# # TODO: Create the Logistic Regression model with a specified number of maximum iterations.
# # TODO: Train the model with X_train and y_train.
# y_pred_log_reg = log_reg.predict(X_test)

# # Evaluate the model
# log_reg_accuracy = accuracy_score(y_test, y_pred_log_reg)

# print("Logistic Regression Accuracy:", log_reg_accuracy)


from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset into a training set and a test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# TODO: Create the Logistic Regression model with a specified number of maximum iterations.
# TODO: Train the model with X_train and y_train.
log_reg = LogisticRegression(max_iter=5)
log_reg.fit(X_train, y_train)
y_pred_log_reg = log_reg.predict(X_test)

# Evaluate the model
log_reg_accuracy = accuracy_score(y_test, y_pred_log_reg)

print("Logistic Regression Accuracy:", log_reg_accuracy)