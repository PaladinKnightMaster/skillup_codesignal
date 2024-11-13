# TODO: Import pandas and load_dataset from datasets

# TODO: Load the SMS Spam Collection dataset using codesignal/sms-spam-collection as the path

# TODO: Convert the loaded dataset to a pandas DataFrame selecting the train set

# TODO: Print the count of missing values across the dataset

# TODO: Print the data types of each column in the dataset

# TODO: Import pandas and load_dataset from datasets
import pandas as pd
from datasets import load_dataset
# TODO: Load the SMS Spam Collection dataset using codesignal/sms-spam-collection as the path
sms_spam = load_dataset('codesignal/sms-spam-collection')
# TODO: Convert the loaded dataset to a pandas DataFrame selecting the train set
df = pd.DataFrame(sms_spam['train'])
# TODO: Print the count of missing values across the dataset
print(df.isnull().sum())
# TODO: Print the data types of each column in the dataset
print(df.dtypes)
