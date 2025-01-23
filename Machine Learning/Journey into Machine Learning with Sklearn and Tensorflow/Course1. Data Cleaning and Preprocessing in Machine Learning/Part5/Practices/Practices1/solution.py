# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# from sklearn.preprocessing import MinMaxScaler

# # Load the Titanic Dataset
# titanic_df = sns.load_dataset('titanic')

# # Create a MinMaxScaler object
# scaler = MinMaxScaler()

# # Fit the scaler on the age data without NaN values
# scaler.fit(titanic_df[['age']].dropna())

# # Transform the 'age' column in the original dataframe, which includes NaN values
# titanic_df['norm_age'] = scaler.transform(titanic_df[['age']])

# # Display normalized age values
# print(titanic_df[['age', 'norm_age']])

# Import necessary libraries
import seaborn as sns
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Create a MinMaxScaler object with the desired range [0, 100]
scaler = MinMaxScaler(feature_range=(0, 100))

# Fit the scaler on the 'age' data without NaN values
scaler.fit(titanic_df[['age']].dropna())

# Transform the 'age' column in the original DataFrame, which includes NaN values
titanic_df['norm_age'] = scaler.transform(titanic_df[['age']])

# Display normalized age values
print(titanic_df[['age', 'norm_age']])
