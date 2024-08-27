# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import TimeSeriesSplit
# from datasets import load_dataset

# # Load Tesla stock data
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Feature Engineering
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Define features and target
# features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # TODO: Create a TimeSeriesSplit instance and fill in the gaps in the next lines
# tscv = ____
# for fold, (train_index, test_index) in enumerate(____):
#     print(f"Fold {fold + 1}")
#     print(f"TRAIN indices (first & last 5): {train_index[:5]}, {train_index[-5:]}")
#     print(f"TEST indices (first 5): {test_index[:5]}")

#     # Splitting the features and target
#     X_train, X_test = features[train_index], features[test_index]
#     y_train, y_test = target[train_index], target[test_index]

#     # TODO: Create a scaler for each fold
#     # to prevent data leakage and fit the training data
#     scaler = ____
#     X_train_scaled = ____

#     # TODO: Use the fitted scaler to transform the test data
#     X_test_scaled = ____

#     # Print a small sample of the data
#     print(f"X_train sample:\n {X_train_scaled[:2]}")
#     print(f"y_train sample:\n {y_train[:2]}")
#     print(f"X_test sample:\n {X_test_scaled[:2]}")
#     print(f"y_test sample:\n {y_test[:2]}")
#     print("-" * 10)

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import TimeSeriesSplit
from datasets import load_dataset

# Load Tesla stock data
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Feature Engineering
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Define features and target
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# TODO: Create a TimeSeriesSplit instance and fill in the gaps in the next lines
tscv = TimeSeriesSplit(n_splits=3)
for fold, (train_index, test_index) in enumerate(tscv.split(features)):
    print(f"Fold {fold + 1}")
    print(f"TRAIN indices (first & last 5): {train_index[:5]}, {train_index[-5:]}")
    print(f"TEST indices (first 5): {test_index[:5]}")

    # Splitting the features and target
    X_train, X_test = features[train_index], features[test_index]
    y_train, y_test = target[train_index], target[test_index]

    # TODO: Create a scaler for each fold
    # to prevent data leakage and fit the training data
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)

    # TODO: Use the fitted scaler to transform the test data
    X_test_scaled = scaler.transform(X_test)

    # Print a small sample of the data
    print(f"X_train sample:\n {X_train_scaled[:2]}")
    print(f"y_train sample:\n {y_train[:2]}")
    print(f"X_test sample:\n {X_test_scaled[:2]}")
    print(f"y_test sample:\n {y_test[:2]}")
    print("-" * 10)