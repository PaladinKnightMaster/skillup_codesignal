# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# from sklearn.preprocessing import StandardScaler

# # Load the Titanic Dataset
# titanic_df = sns.load_dataset('titanic')

# # Create a StandardScaler object
# scaler = StandardScaler()

# # Incorrectly using fit_transform on the 'fare' column with NaN values included
# titanic_df['stand_fare'] = scaler.fit_transform(titanic_df[['fare']])

# # Display standardized fare values
# print(titanic_df[['fare', 'stand_fare']])


# Import necessary libraries
import seaborn as sns
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Create a StandardScaler object
scaler = StandardScaler()

# Handle NaN values in 'fare' column
fare = titanic_df[['fare']].dropna()

# Fit and transform the scaler on 'fare' data without NaN values
titanic_df['stand_fare'] = pd.Series(
    scaler.fit_transform(fare).flatten(),
    index=fare.index
)

# Leave NaN values unchanged in 'stand_fare'
titanic_df['stand_fare'] = titanic_df['stand_fare'].combine_first(titanic_df['fare'])

# Display standardized fare values
print(titanic_df[['fare', 'stand_fare']])
