# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# from sklearn.preprocessing import StandardScaler

# # TODO: Load the Titanic Dataset

# # TODO: Create a StandardScaler object

# # TODO: Fit the scaler on the 'fare' data while handling NaN values properly

# # TODO: Transform the 'fare' column creating a new column 'stand_fare' in the original dataframe without NaN values

# # TODO: Display standardized 'fare' values (the new 'stand_fare' column)




# Import necessary libraries
import seaborn as sns
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Create a StandardScaler object
scaler = StandardScaler()

# Fit the scaler on the 'fare' data while handling NaN values properly
fare_without_nan = titanic_df[['fare']].dropna()
scaler.fit(fare_without_nan)

# Transform the 'fare' column, creating a new column 'stand_fare' in the original dataframe without NaN values
titanic_df['stand_fare'] = pd.Series(
    scaler.transform(fare_without_nan).flatten(),
    index=fare_without_nan.index
)

# Display standardized 'fare' values (the new 'stand_fare' column)
print(titanic_df[['fare', 'stand_fare']])
