# import matplotlib.pyplot as plt
# import pandas as pd
# from datasets import load_dataset

# # Load TSLA dataset
# tesla_data = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Set 'Date' as index and sort it
# tesla_df.set_index('Date', inplace=True)
# tesla_df.sort_index(inplace=True)

# # Plot the 'Close' prices
# plt.figure(figsize=(10, 5))
# plt.plot(tesla_df['Close'], tesla_df.index, color='blue', linestyle='-', linewidth=2)

# # Add titles and labels
# plt.title('TSLA Closing Price Over Time')
# plt.xlabel('Date')
# plt.ylabel('Price (USD)')

# # Add legend and grid
# plt.legend(['Close Price'])
# plt.grid(True)

# # Display the plot
# plt.show()

import matplotlib.pyplot as plt
import pandas as pd
from datasets import load_dataset

# Load TSLA dataset
tesla_data = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert 'Date' column to datetime
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set 'Date' as index and sort it
tesla_df.set_index('Date', inplace=True)
tesla_df.sort_index(inplace=True)

# Plot the 'Close' prices
plt.figure(figsize=(10, 5))
plt.plot(tesla_df.index, tesla_df['Close'], color='blue', linestyle='-', linewidth=2)

# Add titles and labels
plt.title('TSLA Closing Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price (USD)')

# Add legend and grid
plt.legend(['Close Price'])
plt.grid(True)

# Display the plot
plt.show()