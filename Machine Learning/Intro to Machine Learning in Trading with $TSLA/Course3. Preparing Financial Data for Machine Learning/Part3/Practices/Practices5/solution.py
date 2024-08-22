# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# import datasets

# # TODO: Load the dataset 'codesignal/tsla-historic-prices' and convert it to a DataFrame

# # TODO: Create new features 'SMA20' (20-day Simple Moving Average) and 'EMA20' (20-day Exponential Moving Average)

# # TODO: Drop NaN values that were created by moving average

# # TODO: Define features and target
# # `features` include SMA20, EMA20, and Volume, `target` includes Close prices

# # TODO: Scale features using StandardScaler

# # TODO: Split the dataset into training and testing sets using train_test_split

# # TODO: Verify splits by printing shapes and sample rows of training and testing sets

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import datasets

# TODO: Load the dataset 'codesignal/tsla-historic-prices' and convert it to a DataFrame
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# TODO: Create new features 'SMA20' (20-day Simple Moving Average) and 'EMA20' (20-day Exponential Moving Average)
tesla_df['SMA20'] = tesla_df['Close'].rolling(window=20).mean()  # Simple Moving Average
tesla_df['EMA20'] = tesla_df['Close'].ewm(span=20, adjust=False).mean()  # Exponential Moving Average

# TODO: Drop NaN values that were created by moving average
tesla_df.dropna(inplace=True)

# TODO: Define features and target
# `features` include SMA20, EMA20, and Volume, `target` includes Close prices
features = tesla_df[['SMA20', 'EMA20', 'Volume']].values
target = tesla_df['Close'].values

# TODO: Scale features using StandardScaler
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# TODO: Split the dataset into training and testing sets using train_test_split
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# TODO: Verify splits by printing shapes and sample rows of training and testing sets
print(f"Training features shape: {X_train.shape}")
print(f"Testing features shape: {X_test.shape}")

print(f"First 5 rows of training features:\n{X_train[:5]}")
print(f"First 5 training targets: {y_train[:5]}\n")

print(f"First 5 rows of testing features:\n{X_test[:5]}")
print(f"First 5 testing targets: {y_test[:5]}")
