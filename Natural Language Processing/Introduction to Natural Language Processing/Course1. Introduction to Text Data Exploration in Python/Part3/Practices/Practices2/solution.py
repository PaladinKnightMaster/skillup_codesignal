# import pandas as pd
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Print the count of missing values in each column

import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Print the count of missing values in each column
print(df.isnull().sum())