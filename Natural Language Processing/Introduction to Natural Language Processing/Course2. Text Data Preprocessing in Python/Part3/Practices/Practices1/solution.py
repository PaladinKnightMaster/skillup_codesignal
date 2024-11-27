import pandas as pd
from datasets import load_dataset
import nltk
from nltk.tokenize import word_tokenize
# Ensure necessary packages are downloaded for tokenization
nltk.download('punkt')
# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for easy handling
df = pd.DataFrame(sms_spam['train'])

# Convert all messages to lowercase for uniformity
df['processed_message'] = df['message'].apply(lambda x: x.lower())

# Tokenize the messages into individual words
df['tokens'] = df['processed_message'].apply(lambda x: word_tokenize(x))
print(df['tokens'].head())