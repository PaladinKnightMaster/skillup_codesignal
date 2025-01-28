# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# from sklearn.preprocessing import MinMaxScaler, StandardScaler

# # Load the Titanic Dataset
# titanic_df = sns.load_dataset('titanic')

# # Create a MinMaxScaler object with a feature range of 0 to 100
# age_scaler = MinMaxScaler(feature_range=(0, 100))
# # TODO: Create a StandardScaler object for standardizing 'fare'

# # Fit the age scaler on the age data without NaN values
# age_scaler.fit(titanic_df[['age']].dropna())
# # TODO: Fit the scaler on the 'fare' data without NaN values

# # Holds the indexes for the rows with non-NaN age and fare values
# non_na_age_index = titanic_df['age'].dropna().index
# # TODO: Replace the following line with a calculation of the non-NaN fare index values
# non_na_fare_index = _______

# # Transform the 'age' and 'fare' columns in the original dataframe without NaN values
# titanic_df.loc[non_na_age_index, 'norm_age'] = age_scaler.transform(titanic_df.loc[non_na_age_index, ['age']])
# # TODO: Transform the 'fare' column using the StandardScaler and non-NaN indices

# # Display transformed 'age' and standardized 'fare' values
# # TODO: Update this line to include the newly standardized 'fare' column
# print(titanic_df[['age', 'norm_age', 'fare']])


# Import necessary libraries
import seaborn as sns
import pandas as pd
from sklearn.preprocessing import MinMaxScaler, StandardScaler

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Create a MinMaxScaler object with a feature range of 0 to 100
age_scaler = MinMaxScaler(feature_range=(0, 100))

# Create a StandardScaler object for standardizing 'fare'
fare_scaler = StandardScaler()

# Fit the age scaler on the 'age' data without NaN values
age_scaler.fit(titanic_df[['age']].dropna())

# Fit the fare scaler on the 'fare' data without NaN values
fare_scaler.fit(titanic_df[['fare']].dropna())

# Holds the indexes for the rows with non-NaN 'age' and 'fare' values
non_na_age_index = titanic_df['age'].dropna().index
non_na_fare_index = titanic_df['fare'].dropna().index

# Transform the 'age' and 'fare' columns in the original DataFrame without NaN values
titanic_df.loc[non_na_age_index, 'norm_age'] = age_scaler.transform(titanic_df.loc[non_na_age_index, ['age']])
titanic_df.loc[non_na_fare_index, 'stand_fare'] = fare_scaler.transform(titanic_df.loc[non_na_fare_index, ['fare']])

# Display transformed 'age' and standardized 'fare' values
print(titanic_df[['age', 'norm_age', 'fare', 'stand_fare']])
