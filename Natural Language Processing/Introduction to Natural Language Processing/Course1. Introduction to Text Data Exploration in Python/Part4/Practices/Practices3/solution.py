# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt
# import seaborn as sns

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Visualize the count of different labels to see the imbalance in the dataset
# plt.figure(figsize=(8, 4))
# sns.______(x='label', data=df)
# plt.title('Frequency of Spam vs Ham Messages') # Title added here
# plt.show()

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt
import seaborn as sns

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Visualize the count of different labels to see the imbalance in the dataset
plt.figure(figsize=(8, 4))
sns.countplot(x='label', data=df)
plt.title('Frequency of Spam vs Ham Messages') # Title added here
plt.show()