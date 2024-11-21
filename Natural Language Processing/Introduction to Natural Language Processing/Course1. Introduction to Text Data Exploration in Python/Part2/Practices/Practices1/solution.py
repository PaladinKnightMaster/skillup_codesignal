import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Show detailed information about the dataset including datatype and non-null counts
print(df.info(), "\n")

# Display a list of all columns in the DataFrame
print(df.columns, "\n")

# Count the number of unique messages
print("Unique messages:", df['message'].nunique(), "\n")

# Returns the unique labels
print("Labels:", df['label'].unique(), "\n")

# Display basic statistics
print(df.describe())