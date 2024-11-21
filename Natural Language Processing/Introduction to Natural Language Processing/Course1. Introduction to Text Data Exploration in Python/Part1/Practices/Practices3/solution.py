# import pandas as pd
# from datasets import load_dataset

# # Incorrect: Attempting to load the dataset directly into a pandas DataFrame
# sms_spam = pd.DataFrame(load_dataset('codesignal/sms-spam-collection'))

# # TODO: Fix the above line to correctly load the dataset and then convert it to a DataFrame

# # Preview the first entries of the DataFrame
# print(sms_spam.head())

import pandas as pd
from datasets import load_dataset

# Incorrect: Attempting to load the dataset directly into a pandas DataFrame
sms_spam = pd.DataFrame(load_dataset('codesignal/sms-spam-collection'))

# TODO: Fix the above line to correctly load the dataset and then convert it to a DataFrame
sms_spam = pd.DataFrame(sms_spam['train'])

# Preview the first entries of the DataFrame
print(sms_spam.head())