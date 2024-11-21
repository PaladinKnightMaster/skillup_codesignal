# import pandas as pd
# import string
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Remove punctuation from messages in the 'message' column and store the result in a new column 'processed_message'

# # TODO: Print the first five entries of the new 'processed_message' column

import pandas as pd
import string
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Remove punctuation from messages in the 'message' column and store the result in a new column 'processed_message'
df['processed_message'] = df['message'].apply(lambda x: x.translate(str.maketrans('', '', string.punctuation)))
# TODO: Print the first five entries of the new 'processed_message' column
print(df['processed_message'].head())