# # Import necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import RandomizedSearchCV
# from sklearn.tree import DecisionTreeClassifier
# from scipy.stats import randint

# # Load the Iris dataset
# iris = load_iris()

# # TODO: Define the hyperparameter distributions for 'max_depth', 'min_samples_split', and 'min_samples_leaf'

# # Create the model which is a Decision Tree Classifier
# decision_tree = DecisionTreeClassifier()

# # Create the RandomizedSearchCV instance for hyperparameter tuning
# random_search_cv = RandomizedSearchCV(decision_tree, params)

# # Fit the model to our data
# random_search_cv.fit(iris.data, iris.target)

# # TODO: Output the best hyperparameters found for our model


# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import RandomizedSearchCV
from sklearn.tree import DecisionTreeClassifier
from scipy.stats import randint

# Load the Iris dataset
iris = load_iris()

# TODO: Define the hyperparameter distributions for 'max_depth', 'min_samples_split', and 'min_samples_leaf'
params = {'max_depth': randint(3, 9), 'min_samples_split': randint(2, 5), 'min_samples_leaf': randint(1, 5)}

# Create the model which is a Decision Tree Classifier
decision_tree = DecisionTreeClassifier()

# Create the RandomizedSearchCV instance for hyperparameter tuning
random_search_cv = RandomizedSearchCV(decision_tree, params)

# Fit the model to our data
random_search_cv.fit(iris.data, iris.target)

# TODO: Output the best hyperparameters found for our model
print("The best hyperparameters for our model are: ", random_search_cv.best_params_)