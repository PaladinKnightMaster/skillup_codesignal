# # Import necessary modules
# import pandas as pd
# from sklearn.preprocessing import OneHotEncoder

# # Define DataFrame
# df = pd.DataFrame({
#     'age': [23, 45, 56, 78, 21],
#     'income': [5000, 7000, 11000, 8000, 7600],
#     'sex': ['male', 'female', 'male', 'female', 'male'],
#     'embarked': ['S', 'C', 'Q', 'S', 'S']
#     })

# # TODO: Apply get_dummies on the 'sex' and 'embarked' features to get `encoded_features`
# encoded_features = ___

# # TODO: Combine the original DataFrame with the `encoded_features` DataFrame along axis=1

# print("After One-Hot Encoding with get_dummies:\n", df_encoded)

# Import necessary modules
import pandas as pd

# Define DataFrame
df = pd.DataFrame({
    'age': [23, 45, 56, 78, 21],
    'income': [5000, 7000, 11000, 8000, 7600],
    'sex': ['male', 'female', 'male', 'female', 'male'],
    'embarked': ['S', 'C', 'Q', 'S', 'S']
})

# Apply get_dummies on the 'sex' and 'embarked' features
encoded_features = pd.get_dummies(df[['sex', 'embarked']], columns=['sex', 'embarked'], drop_first=True)

# Combine the original DataFrame with the `encoded_features` DataFrame along axis=1
df_encoded = pd.concat([df, encoded_features], axis=1).drop(columns=['sex', 'embarked'])

print("After One-Hot Encoding with get_dummies:\n", df_encoded)
