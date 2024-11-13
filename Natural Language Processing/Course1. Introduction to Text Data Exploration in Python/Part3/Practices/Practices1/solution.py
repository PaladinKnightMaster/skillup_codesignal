import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Print the count of missing values for each column in the DataFrame
print(df.isnull().sum(), '\n')

# Print the data types of each column in the DataFrame
print(df.dtypes)