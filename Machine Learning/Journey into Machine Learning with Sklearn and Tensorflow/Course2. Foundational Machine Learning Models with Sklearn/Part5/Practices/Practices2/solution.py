# from sklearn.metrics import precision_score
# from sklearn.linear_model import LogisticRegression
# from sklearn.model_selection import train_test_split
# from sklearn.datasets import load_iris

# # Load the Iris dataset
# iris = load_iris()
# X = iris.data
# y = iris.target

# # TODO: Split the dataset into Training and Test sets.

# # TODO: Instantiate a Logistic Regression model and train it with the Training set.

# # TODO: Make predictions on the Test set and calculate the precision.


from sklearn.metrics import precision_score
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# TODO: Split the dataset into Training and Test sets.
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# TODO: Instantiate a Logistic Regression model and train it with the Training set.
lr_model = LogisticRegression()
lr_model.fit(X_train, y_train)

# TODO: Make predictions on the Test set and calculate the precision.
y_pred = lr_model.predict(X_test)
precision = precision_score(y_test, y_pred, average='micro')
print(precision)
