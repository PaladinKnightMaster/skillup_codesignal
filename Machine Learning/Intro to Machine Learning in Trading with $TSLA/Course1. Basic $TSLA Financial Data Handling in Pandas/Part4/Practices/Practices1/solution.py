# import matplotlib.pyplot as plt
# import pandas as pd
# from datasets import load_dataset

# # Load TSLA dataset
# tesla_data = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert 'Date' column to datetime
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Set 'Date' as index and sort it
# tesla_df.set_index('Date', inplace=True)
# tesla_df.sort_index(inplace=True)

# # Plot the 'Open' prices with custom color and figure size
# plt.figure(figsize=(12, 6))
# plt.plot(tesla_df.index, tesla_df['Open'], color='green', linestyle='-', linewidth=2)

# # Add titles and labels
# plt.title('TSLA Opening Price Over Time')
# plt.xlabel('Date')
# plt.ylabel('Price (USD)')

# # Add legend and grid
# plt.legend(['Open Price'])
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

# Plot the 'Open' prices with custom color and figure size
plt.figure(figsize=(14, 7))
plt.plot(tesla_df.index, tesla_df['Close'], color='green', linestyle='-', linewidth=2)

# Add titles and labels
plt.title('TSLA Closing Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price (USD)')

# Add legend and grid
plt.legend(['Close Price'])
plt.grid(True)

# Display the plot
plt.show()