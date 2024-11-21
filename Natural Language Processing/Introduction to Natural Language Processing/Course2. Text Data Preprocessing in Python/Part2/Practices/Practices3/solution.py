# import pandas as pd
# import string
# from datasets import load_dataset

# sms_spam = load_datasets('codesignal/sms-spam-collection')

# df = pd.DataFrame(sms_spam['train'])

# # Remove punctuation from messages
# df['processed_message'] = df['message'].apply(lambda x: x.remove(string.punctuation))
# print(df['processed_message'].head())

import pandas as pd
import string
from datasets import load_dataset

sms_spam = load_dataset('codesignal/sms-spam-collection')

df = pd.DataFrame(sms_spam['train'])

# Remove punctuation from messages
df['processed_message'] = df['message'].apply(lambda x: x.translate(str.maketrans('', '', string.punctuation)))
print(df['processed_message'].head())