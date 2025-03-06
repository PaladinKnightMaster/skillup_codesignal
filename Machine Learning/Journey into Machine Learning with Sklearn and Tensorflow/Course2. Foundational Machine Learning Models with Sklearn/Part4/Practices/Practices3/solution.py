# # Import necessary classes from sklearn
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.datasets import load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import confusion_matrix, accuracy_score

# # Load the Iris dataset
# iris = load_iris()
# X, y = iris.data, iris.target

# # Split the data into training and test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

# # Define constant values for model parameters
# max_depth = 3
# min_samples_leaf = 5

# # Initialize the Decision Tree model with gini criterion
# clf = DecisionTreeClassifier(criterion='gini', max_depth=max_depth, min_samples_leaf=min_samples_leaf)

# # Train the model with the data
# clf.fit(X_train, y_train)

# # Make predictions on the test set
# y_pred = clf.predict(X_test)

# # Calculate and print the confusion matrix and accuracy
# cm = confusion_matrix(y_test, y_pred)
# accuracy = accuracy_score(y_test, y_pred)
# print("Confusion Matrix:")
# print(cm)
# print("Accuracy:", accuracy)


# Import necessary classes from sklearn
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report

# Load the Iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split the data into training and test sets (70% training, 30% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# ✅ Tuning Decision Tree Parameters
max_depth = 4               # Increased depth for better splits
min_samples_leaf = 3        # Smaller leaf size for generalization
criterion = 'entropy'       # Changed from 'gini' to 'entropy' for better information gain

# Initialize the Decision Tree model
clf = DecisionTreeClassifier(criterion=criterion, max_depth=max_depth, min_samples_leaf=min_samples_leaf, random_state=42)

# Train the model with the training data
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)

# ✅ Compute Confusion Matrix & Accuracy
cm = confusion_matrix(y_test, y_pred)
accuracy = accuracy_score(y_test, y_pred)

# ✅ Print Results
print("Confusion Matrix:")
print(cm)
print("\nAccuracy:", accuracy)
print("\nClassification Report:")
print(classification_report(y_test, y_pred))
