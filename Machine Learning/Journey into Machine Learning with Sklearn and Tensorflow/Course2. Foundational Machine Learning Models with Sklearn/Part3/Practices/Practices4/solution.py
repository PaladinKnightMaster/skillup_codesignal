# # Import the necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression

# # Load the Iris dataset
# iris = load_iris()

# # Split the data into a larger training set and a smaller test set
# X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.1, random_state=42)

# # Initialize a Logistic Regression model
# lr_model = LogisticRegression(solver='liblinear', multi_class='ovr')

# # TODO: Train the model with the training data and print the training score



# Import the necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load the Iris dataset
iris = load_iris()

# Split the data into a larger training set and a smaller test set
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.1, random_state=42)

# Initialize a Logistic Regression model
lr_model = LogisticRegression(solver='liblinear', multi_class='ovr')

# TODO: Train the model with the training data and print the training score
lr_model.fit(X_train, y_train)
print("Training score: ", lr_model.score(X_train, y_train))
print("Testing score: ", lr_model.score(X_test, y_test))