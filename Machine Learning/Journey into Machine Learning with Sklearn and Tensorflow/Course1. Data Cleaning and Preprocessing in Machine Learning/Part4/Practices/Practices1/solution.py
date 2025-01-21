# import pandas as pd
# from sklearn.preprocessing import MinMaxScaler

# # Define example DataFrame
# example_data = pd.DataFrame({
#     'age': [23, 45, 56, 78, 21],
#     'income': [5000, 7000, 11000, 8000, 7600],
#     'embarked': ['S', 'C', 'Q', 'S', 'S']
# })

# # Use MinMaxScaler to transform 'age' and 'income'
# # Change this code to scale 'age' feature to range between 0 and 10
# example_data[['age', 'income']] = MinMaxScaler().fit_transform(example_data[['age', 'income']])

# print('After MinMaxScaler Transformation:\n', example_data)

import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Define example DataFrame
example_data = pd.DataFrame({
    'age': [23, 45, 56, 78, 21],
    'income': [5000, 7000, 11000, 8000, 7600],
    'embarked': ['S', 'C', 'Q', 'S', 'S']
})

# Use MinMaxScaler to transform 'age' feature to range between 0 and 10
scaler = MinMaxScaler(feature_range=(0, 10))
example_data[['age']] = scaler.fit_transform(example_data[['age']]) * 10

# Retain default scaling for 'income'
example_data['income'] = MinMaxScaler().fit_transform(example_data[['income']])

print('After MinMaxScaler Transformation:\n', example_data)
