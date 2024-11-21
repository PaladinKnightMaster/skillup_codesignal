# import pandas as pd
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Implement the info method to display detailed information about the dataset

# # TODO: Display a list of all columns in the DataFrame

import pandas as pd
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Implement the info method to display detailed information about the dataset
print(df.info(), "\n")

# TODO: Display a list of all columns in the DataFrame
print(df.columns, "\n")