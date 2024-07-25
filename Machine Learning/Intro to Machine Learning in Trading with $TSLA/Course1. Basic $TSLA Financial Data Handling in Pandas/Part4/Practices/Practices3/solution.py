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

# # Plotting the 'Low' prices
# plt.figure(figsize=(10, 5))
# # TODO: Plot the 'Low' prices with appropriate color, linestyle, and linewidth

# # Add titles and labels
# plt.title('TSLA Low Price Over Time')
# plt.xlabel('Date')
# plt.ylabel('Price (USD)')

# # TODO: Add legend and grid to the plot

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

# Plotting the 'Low' prices
plt.figure(figsize=(10, 5))
# TODO: Plot the 'Low' prices with appropriate color, linestyle, and linewidth
plt.plot(tesla_df.index, tesla_df['Low'], color='blue', linestyle='-', linewidth=2)

# Add titles and labels
plt.title('TSLA Low Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price (USD)')

# TODO: Add legend and grid to the plot
plt.legend(['Low Price'])
plt.grid(True)

# Display the plot
plt.show()