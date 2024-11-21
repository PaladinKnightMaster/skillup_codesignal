# import pandas as pd
# import string
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Replace string.punctuation with ',' to remove only the commas
# df['processed_message'] = df['message'].apply(lambda x: x.translate(str.maketrans('', '', string.punctuation)))
# print(df['processed_message'].head())

import pandas as pd
import string
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame
df = pd.DataFrame(sms_spam['train'])

# TODO: Replace string.punctuation with ',' to remove only the commas
df['processed_message'] = df['message'].apply(lambda x: x.translate(str.maketrans('', '', ',')))
print(df['processed_message'].head())