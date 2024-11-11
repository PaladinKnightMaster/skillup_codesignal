# TODO: Import the pandas library
import pandas as pd
# TODO: Import the load_dataset function from the datasets library
from datasets import load_dataset
# TODO: Load the SMS Spam Collection dataset using the load_dataset function
sms_spam = load_dataset('codesignal/sms-spam-collection')
# TODO: Convert the loaded dataset into a pandas DataFrame
sms_spam_df = pd.DataFrame(sms_spam['train'])
# TODO: Use the head() method on the DataFrame to preview the first few entries
print(sms_spam_df.head())