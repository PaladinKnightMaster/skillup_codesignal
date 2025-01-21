# # Import necessary modules
# import pandas as pd
# from sklearn.preprocessing import MinMaxScaler, OneHotEncoder

# # Define DataFrame
# df = pd.DataFrame({
#     'age': [23, 45, 56, 78, 21],
#     'income': [5000, 7000, 11000, 8000, 7600],
#     'sex': ['male', 'female', 'male', 'female', 'male'],
#     'embarked': ['S', 'C', 'Q', 'S', 'S']
# })

# # TODO: Apply MinMaxScaler on the 'age' feature (scale it within a range of 0 to 10)

# # TODO: Apply MinMaxScaler on 'income' feature

# # TODO: Apply get_dummies on the 'sex' and 'embarked' features

# # TODO: Combine the original DataFrame with the encoded DataFrame

# print("After Transformation:\n", df_encoded)

# Import necessary modules
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Define DataFrame
df = pd.DataFrame({
    'age': [23, 45, 56, 78, 21],
    'income': [5000, 7000, 11000, 8000, 7600],
    'sex': ['male', 'female', 'male', 'female', 'male'],
    'embarked': ['S', 'C', 'Q', 'S', 'S']
})

# Apply MinMaxScaler on the 'age' feature (scale it within a range of 0 to 10)
scaler_age = MinMaxScaler(feature_range=(0, 10))
df['age'] = scaler_age.fit_transform(df[['age']])

# Apply MinMaxScaler on 'income' feature (default range 0 to 1)
scaler_income = MinMaxScaler()
df['income'] = scaler_income.fit_transform(df[['income']])

# Apply get_dummies on the 'sex' and 'embarked' features
encoded_features = pd.get_dummies(df[['sex', 'embarked']], columns=['sex', 'embarked'], drop_first=True)

# Combine the original DataFrame with the encoded DataFrame
df_encoded = pd.concat([df.drop(columns=['sex', 'embarked']), encoded_features], axis=1)

print("After Transformation:\n", df_encoded)
