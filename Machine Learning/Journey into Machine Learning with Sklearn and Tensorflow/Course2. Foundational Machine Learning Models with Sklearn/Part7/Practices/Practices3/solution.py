# # Import necessary libraries
# from sklearn.datasets import load_iris
# from sklearn.model_selection import GridSearchCV
# from sklearn.tree import DecisionTreeClassifier

# # Load the Iris dataset
# iris = load_iris()

# # Define the possible hyperparameters for tuning
# params = {'max_depth': [3, 5, 7, 9, None], 'min_samples_split': [2, 4, 6], 'min_samples_leaf': [1, 5, 10]}

# # Create the model which is a Decision Tree Classifier
# decision_tree = DecisionTreeClassifier()

# # Create the GridSearchCV instance for hyperparameter tuning
# grid_search_cv = GridSearchCV(decision_tree, params, cv=3)

# # Fit the model to our data
# grid_search_cv.fit(iris.data, iris.target)

# # Check the best hyperparameters for our model
# print("The best hyperparameters for our model are: ", grid_search_cv.best_params_)


# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier

# Load the Iris dataset
iris = load_iris()

# Define the possible hyperparameters for tuning
params = {
    'max_depth': [3, 5, 7, 9, None],
    'min_samples_split': [2, 4, 6],
    'min_samples_leaf': [1, 5, 10]
}

# Create the model with a fixed random state for reproducibility
decision_tree = DecisionTreeClassifier(random_state=42)

# Create the GridSearchCV instance with explicit scoring
grid_search_cv = GridSearchCV(decision_tree, params, cv=3, scoring='accuracy')

# Fit the model to our data
grid_search_cv.fit(iris.data, iris.target)

# Check the best hyperparameters for our model
print("The best hyperparameters for our model are:", grid_search_cv.best_params_)
