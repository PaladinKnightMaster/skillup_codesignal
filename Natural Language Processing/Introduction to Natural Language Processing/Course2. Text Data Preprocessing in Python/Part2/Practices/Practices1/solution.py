import pandas as pd
import string
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Remove punctuation from messages
df['processed_message'] = df['message'].apply(lambda x: x.translate(str.maketrans('', '', string.punctuation)))
print(df['processed_message'].head())