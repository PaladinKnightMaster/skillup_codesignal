# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import TimeSeriesSplit
# from datasets import load_dataset

# # Load the Tesla stock dataset
# tesla_dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_dataset['train'])

# # Feature Engineering: Creating new features
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Defining features and target
# features = tesla_df[['High-Low','Price-Open','Volume']].values
# target = tesla_df['Close'].values

# # Scaling
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Correctly Splitting Time Series Data
# tscv = TimeSeriesSplit(n_splits=3)

# # Splitting with TimeSeriesSplit and printing results
# for fold, (train_index, test_index) in enumerate(features_scaled):
#     print(f"Fold {fold + 1}")
#     print(f"TRAIN indices (first 5): {train_index[:5]}, TEST indices (first 5): {test_index[:5]}")

#     # Splitting the features and target
#     X_train, X_test = features_scaled[train_index], features_scaled[test_index]
#     y_train, y_test = target[train_index], target[test_index]

#     # Print a small sample of the data
#     print(f"X_train sample:\n {X_train[:2]}")
#     print(f"y_train sample:\n {y_train[:2]}")
#     print(f"X_test sample:\n {X_test[:2]}")
#     print(f"y_test sample:\n {y_test[:2]}")
#     print("-" * 10)

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import TimeSeriesSplit
from datasets import load_dataset

# Load the Tesla stock dataset
tesla_dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_dataset['train'])

# Feature Engineering: Creating new features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Defining features and target
features = tesla_df[['High-Low','Price-Open','Volume']].values
target = tesla_df['Close'].values

# Scaling
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Correctly Splitting Time Series Data
tscv = TimeSeriesSplit(n_splits=3)

# Splitting with TimeSeriesSplit and printing results
for fold, (train_index, test_index) in enumerate(tscv.split(features_scaled)):
    print(f"Fold {fold + 1}")
    print(f"TRAIN indices (first 5): {train_index[:5]}, TEST indices (first 5): {test_index[:5]}")

    # Splitting the features and target
    X_train, X_test = features_scaled[train_index], features_scaled[test_index]
    y_train, y_test = target[train_index], target[test_index]

    # Print a small sample of the data
    print(f"X_train sample:\n {X_train[:2]}")
    print(f"y_train sample:\n {y_train[:2]}")
    print(f"X_test sample:\n {X_test[:2]}")
    print(f"y_test sample:\n {y_test[:2]}")
    print("-" * 10)