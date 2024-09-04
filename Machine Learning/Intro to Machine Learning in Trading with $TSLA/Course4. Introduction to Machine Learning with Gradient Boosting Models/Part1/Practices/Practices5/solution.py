# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt
# import numpy as np
# import datasets

# # Load dataset
# tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # TODO: Convert 'Date' column to datetime format

# # TODO: Add technical indicators:
# # - Price_Diff: Difference in adjusted close price from the previous day (Adj Close - Adj Close.shift(1))
# # - Volatility: Standard deviation of adjusted close price over the last 5 days (Adj Close.rolling(window=5).std())
# # - Momentum: Difference in adjusted close price compared to 5 days ago (Adj Close - Adj Close.shift(5))
# # - Log_Price: Logarithm of the adjusted close price (np.log(Adj Close))

# # TODO: Drop rows with NaN values

# # TODO: Select features (Price_Diff, Volatility, Momentum, Log_Price) and target variable (Adj Close)

# # TODO: Standardize the feature values

# # TODO: Split the dataset into training and test sets

# # TODO: Instantiate the Gradient Boosting Regressor and fit it to the training data

# # TODO: Make predictions and calculate the Mean Squared Error (MSE)

# # TODO: Visualize actual vs predicted values using scatter plots

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt
import numpy as np
import datasets

# Load dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert 'Date' column to datetime format
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Add technical indicators:
# - Price_Diff: Difference in adjusted close price from the previous day
tesla_df['Price_Diff'] = tesla_df['Adj Close'] - tesla_df['Adj Close'].shift(1)

# - Volatility: Standard deviation of adjusted close price over the last 5 days
tesla_df['Volatility'] = tesla_df['Adj Close'].rolling(window=5).std()

# - Momentum: Difference in adjusted close price compared to 5 days ago
tesla_df['Momentum'] = tesla_df['Adj Close'] - tesla_df['Adj Close'].shift(5)

# - Log_Price: Logarithm of the adjusted close price
tesla_df['Log_Price'] = np.log(tesla_df['Adj Close'])

# Drop rows with NaN values
tesla_df.dropna(inplace=True)

# Select features (Price_Diff, Volatility, Momentum, Log_Price) and target variable (Adj Close)
features = tesla_df[['Price_Diff', 'Volatility', 'Momentum', 'Log_Price']].values
target = tesla_df['Adj Close'].values

# Standardize the feature values
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# Instantiate the Gradient Boosting Regressor and fit it to the training data
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)

# Make predictions and calculate the Mean Squared Error (MSE)
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error:", mse)

# Visualize actual vs predicted values using scatter plots
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()
