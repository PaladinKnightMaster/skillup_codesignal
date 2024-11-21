# import pandas as pd
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Count the number of unique messages and labels
# print("Unique messages:", df['sms'].nunique(), "\n")

# # Returns the unique labels
# print("Labels:", df['label'].unique(), "\n")

import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Count the number of unique messages and labels
print("Unique messages:", df['message'].nunique(), "\n")

# Returns the unique labels
print("Labels:", df['label'].unique(), "\n")