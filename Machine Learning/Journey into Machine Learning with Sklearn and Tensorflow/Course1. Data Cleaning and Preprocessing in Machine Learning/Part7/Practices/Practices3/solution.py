# # Importing necessary libraries
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import classification_report, accuracy_score
# from sklearn.preprocessing import MinMaxScaler
# from sklearn.linear_model import LogisticRegression
# import seaborn as sns
# import pandas as pd

# # Load and preprocess the Titanic dataset
# titanic_df = sns.load_dataset('titanic')

# # Drop non-numeric columns for simplicity
# titanic_df = titanic_df.select_dtypes(include=['float64', 'int64'])

# # Handle any NaN values by filling them with the mean of the column
# titanic_df = titanic_df.fillna(titanic_df.mean())

# # TODO: Use MinMaxScaler to scale the numeric features into a standard range
# # Hint: You will need to create an instance of MinMaxScaler, fit it on the data and transform the data

# # Split the preprocessed dataset into the training and testing datasets with a 70%-30% split
# train_data, test_data = train_test_split(titanic_df, test_size=0.3, random_state=42)

# # Separate the target variable ("survived") from the rest of the training data
# x_train = train_data.drop("survived", axis=1)
# y_train = train_data["survived"]

# # Initialize a Logistic Regression model
# logreg = LogisticRegression(max_iter=1000)

# # Training the Logistic Regression model
# logreg.fit(x_train, y_train)

# # Separate the independent (x_test) and dependent (y_test) variables from the testing dataset
# x_test = test_data.drop("survived", axis=1)
# y_test = test_data["survived"]

# # Using the model to make predictions on the testing dataset
# predictions = logreg.predict(x_test)

# # Displaying metrics
# print("Classification Report:")
# print(classification_report(y_test, predictions))

# print("Accuracy Score:")
# print(accuracy_score(y_test, predictions))


# Importing necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
import seaborn as sns
import pandas as pd

# Load and preprocess the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Drop non-numeric columns for simplicity
titanic_df = titanic_df.select_dtypes(include=['float64', 'int64'])

# Handle any NaN values by filling them with the mean of the column
titanic_df = titanic_df.fillna(titanic_df.mean())

# Use MinMaxScaler to scale the numeric features into a standard range
scaler = MinMaxScaler()
titanic_df_scaled = pd.DataFrame(scaler.fit_transform(titanic_df), columns=titanic_df.columns)

# Split the preprocessed dataset into the training and testing datasets with a 70%-30% split
train_data, test_data = train_test_split(titanic_df_scaled, test_size=0.3, random_state=42)

# Separate the target variable ("survived") from the rest of the training and testing data
x_train = train_data.drop("survived", axis=1)
y_train = train_data["survived"]
x_test = test_data.drop("survived", axis=1)
y_test = test_data["survived"]

# Initialize a Logistic Regression model
logreg = LogisticRegression(max_iter=1000)

# Training the Logistic Regression model
logreg.fit(x_train, y_train)

# Using the model to make predictions on the testing dataset
predictions = logreg.predict(x_test)

# Displaying metrics
print("Classification Report:")
print(classification_report(y_test, predictions))

print("Accuracy Score:")
print(accuracy_score(y_test, predictions))
