# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import TimeSeriesSplit
# import datasets

# # TODO: Load the dataset 'codesignal/tsla-historic-prices' using `datasets` library and convert to a DataFrame

# # TODO: Engineer new features such as 'Moving_Average_10' and 'Returns'
# # 'Moving_Average_10' is a 10-day SMA
# # 'Returns' is the difference between the closing price and the open price

# # TODO: Define features arrays with 'Moving_Average_10', 'Returns', and 'Volume', and the target array as 'Close'

# # TODO: Scale the features using StandardScaler

# # TODO: Initiate TimeSeriesSplit with 3 splits and print indices and samples for each fold

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import TimeSeriesSplit
from datasets import load_dataset

# Load the dataset
tesla_df = load_dataset('codesignal/tsla-historic-prices', split='train').to_pandas()

# Feature Engineering: creating new features
tesla_df['Moving_Average_10'] = tesla_df['Close'].rolling(window=10).mean()
tesla_df['Returns'] = tesla_df['Close'] - tesla_df['Open']

# Defining features and target
features = tesla_df[['Moving_Average_10', 'Returns', 'Volume']].dropna().values
target = tesla_df['Close'][tesla_df['Moving_Average_10'].notna()].values

# Scale the features using StandardScaler
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Initiate TimeSeriesSplit
tscv = TimeSeriesSplit(n_splits=3)

# Splitting with TimeSeriesSplit
for fold, (train_index, test_index) in enumerate(tscv.split(features_scaled)):
    print(f"Fold {fold + 1}")
    print(f"TRAIN indices (first 5): {train_index[:5]}, TEST indices (first 5): {test_index[:5]}")

    # Split into features and target
    X_train, X_test = features_scaled[train_index], features_scaled[test_index]
    y_train, y_test = target[train_index], target[test_index]

    # Print a small sample of the data
    print(f"X_train sample:\n {X_train[:2]}")
    print(f"y_train sample:\n {y_train[:2]}")
    print(f"X_test sample:\n {X_test[:2]}")
    print(f"y_test sample:\n {y_test[:2]}")
    print("-" * 10)
