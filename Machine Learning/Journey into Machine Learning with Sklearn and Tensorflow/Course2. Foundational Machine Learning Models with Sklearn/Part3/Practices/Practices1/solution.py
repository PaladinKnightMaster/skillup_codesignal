# # Import the necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression

# # Load the Iris dataset
# iris = load_iris()

# # Split the data into a training and test set
# X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)

# # Initialize a Logistic Regression model
# lr_model = LogisticRegression(solver='liblinear', multi_class='ovr')

# # Fit the model with the training data
# lr_model.fit(X_train, y_train)

# # Print training score
# print("Training score: ", lr_model.score(X_train, y_train))


# Import the necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load the Iris dataset
iris = load_iris()

# Split the data into a training and test set
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3, random_state=42)

# Initialize a Logistic Regression model
lr_model = LogisticRegression(solver='liblinear', multi_class='ovr')

# Fit the model with the training data
lr_model.fit(X_train, y_train)

# Print training score
print("Training score: ", lr_model.score(X_train, y_train))