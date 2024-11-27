# import pandas as pd
# from datasets import load_dataset
# import nltk
# from nltk.tokenize import word_tokenize
# # Ensure necessary packages are downloaded for tokenization
# nltk.download('punkt')

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection', split='train')

# # Convert to pandas DataFrame for easy handling
# df = pd.DataFrame(sms_spam)

# # TODO: Tokenize the messages into individual words using NLTK's word_tokenize

# # TODO: Print the first 5 entries of the tokens to verify the tokenization process

import pandas as pd
from datasets import load_dataset
import nltk
from nltk.tokenize import word_tokenize
# Ensure necessary packages are downloaded for tokenization
nltk.download('punkt')

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection', split='train')

# Convert to pandas DataFrame for easy handling
df = pd.DataFrame(sms_spam)

# TODO: Tokenize the messages into individual words using NLTK's word_tokenize
df['tokens'] = df['message'].apply(lambda x: word_tokenize(x))

# TODO: Print the first 5 entries of the tokens to verify the tokenization process
print(df['tokens'].head())