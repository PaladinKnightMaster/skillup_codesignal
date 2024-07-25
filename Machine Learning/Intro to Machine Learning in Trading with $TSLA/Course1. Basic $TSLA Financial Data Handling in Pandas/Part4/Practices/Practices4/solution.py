# import matplotlib.pyplot as plt
# import pandas as pd
# from datasets import load_dataset

# # Load TSLA dataset
# tesla_data = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # TODO: Convert 'Date' column to datetime

# # TODO: Set 'Date' as index and sort it

# # Plot the 'Volume' traded over time
# plt.figure(figsize=(10, 5))
# # TODO: Plot the 'Volume' column over time.

# # Add titles and labels
# plt.title('TSLA Trading Volume Over Time')
# plt.xlabel('Date')
# plt.ylabel('Volume')

# # Add legend and grid
# plt.legend(['Trading Volume'])
# plt.grid(True)

# # Display the plot
# plt.show()

import matplotlib.pyplot as plt
import pandas as pd
from datasets import load_dataset

# Load TSLA dataset
tesla_data = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Convert 'Date' column to datetime
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# TODO: Set 'Date' as index and sort it
tesla_df.set_index('Date', inplace=True)

# Plot the 'Volume' traded over time
plt.figure(figsize=(10, 5))
# TODO: Plot the 'Volume' column over time.
plt.plot(tesla_df.index, tesla_df['Volume'], color='blue', linestyle='-', linewidth=2)

# Add titles and labels
plt.title('TSLA Trading Volume Over Time')
plt.xlabel('Date')
plt.ylabel('Volume')

# Add legend and grid
plt.legend(['Trading Volume'])
plt.grid(True)

# Display the plot
plt.show()