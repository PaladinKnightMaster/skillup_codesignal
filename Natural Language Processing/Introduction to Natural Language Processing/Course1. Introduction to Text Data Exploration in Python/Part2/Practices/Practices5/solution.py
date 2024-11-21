# import pandas as pd
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Use the appropriate function to display the DataFrame's detailed information

# # TODO: Print all columns present in the DataFrame

# # TODO: Count and print the number of unique messages in the dataset

# # TODO: Identify and print the unique labels found in the dataset

# # TODO: Display basic descriptive statistics of the DataFrame

import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Use the appropriate function to display the DataFrame's detailed information
print(df.info(), "\n")
# TODO: Print all columns present in the DataFrame
print(df.columns, "\n")
# TODO: Count and print the number of unique messages in the dataset
print("Unique messages:", df['message'].nunique(), "\n")
# TODO: Identify and print the unique labels found in the dataset
print("Labels:", df['label'].unique(), "\n")
# TODO: Display basic descriptive statistics of the DataFrame
print(df.describe())