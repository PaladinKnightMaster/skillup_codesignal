# import pandas as pd
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Fix the code to properly convert messages to lowercase
# df['processed_message'] = df['message'].apply(lambda x: x.upper())
# print(df['processed_message'].head())

import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Fix the code to properly convert messages to lowercase
df['processed_message'] = df['message'].apply(lambda x: x.lower())
print(df['processed_message'].head())