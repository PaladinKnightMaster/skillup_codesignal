# Importing necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score  # Changed from precision_score to accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Drop columns with strings and 'pclass', which is categorical but read as a numeric type
titanic_df = titanic_df.select_dtypes(exclude=['object', 'category'])

# Handle any NaN values by filling them with the mean of the column (ignoring 'pclass', which is categorical)
numeric_columns = titanic_df.columns.drop('pclass')
titanic_df[numeric_columns] = titanic_df[numeric_columns].fillna(titanic_df[numeric_columns].mean())

# Convert 'pclass' to integer type if it's not already
titanic_df['pclass'] = titanic_df['pclass'].astype(int)

# TODO: Split the dataset into training and testing sets with a 70%-30% split

# TODO: Identify and separate the target variable 'survived' from the training and testing data

# TODO: Initialize StandardScaler and scale the features

# TODO: Initialize the Logistic Regression model and train it on the scaled training data

# TODO: Use the trained model to make predictions on the scaled testing data

# TODO: Calculate and print the accuracy score



# Importing necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score  # Changed from precision_score to accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Drop columns with strings and 'pclass', which is categorical but read as a numeric type
titanic_df = titanic_df.select_dtypes(exclude=['object', 'category'])

# Handle any NaN values by filling them with the mean of the column (ignoring 'pclass', which is categorical)
numeric_columns = titanic_df.columns.drop('pclass')
titanic_df[numeric_columns] = titanic_df[numeric_columns].fillna(titanic_df[numeric_columns].mean())

# Convert 'pclass' to integer type if it's not already
titanic_df['pclass'] = titanic_df['pclass'].astype(int)

# Split the dataset into training and testing sets with a 70%-30% split
train_data, test_data = train_test_split(titanic_df, test_size=0.3, random_state=42)

# Identify and separate the target variable 'survived' from the training and testing data
x_train = train_data.drop("survived", axis=1)
y_train = train_data["survived"]
x_test = test_data.drop("survived", axis=1)
y_test = test_data["survived"]

# Initialize StandardScaler and scale the features
scaler = StandardScaler()
x_train_scaled = scaler.fit_transform(x_train)
x_test_scaled = scaler.transform(x_test)

# Initialize the Logistic Regression model and train it on the scaled training data
logreg = LogisticRegression(max_iter=1000)
logreg.fit(x_train_scaled, y_train)

# Use the trained model to make predictions on the scaled testing data
predictions = logreg.predict(x_test_scaled)

# Calculate and print the accuracy score
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy Score: {accuracy:.4f}")
