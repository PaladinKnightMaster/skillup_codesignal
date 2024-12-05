# import pandas as pd
# from datasets import load_dataset
# import nltk
# from nltk.stem.porter import PorterStemmer
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords

# nltk.download('punkt')
# nltk.download('punkt_tab')
# nltk.download('stopwords')

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Convert all messages in the dataset to lowercase

# # TODO: Tokenize the lowercase messages into individual words

# # TODO: Remove stop words from the tokenized words

# # TODO: Initialize a PorterStemmer and apply stemming to the words not considered as stop words

# # TODO: Print the first five entries of the column containing the stemmed tokens

import pandas as pd
from datasets import load_dataset
import nltk
from nltk.stem.porter import PorterStemmer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Convert all messages in the dataset to lowercase
df['processed_message'] = df['message'].apply(lambda x: x.lower())

# TODO: Tokenize the lowercase messages into individual words
df['tokens'] = df['processed_message'].apply(lambda x: word_tokenize(x))

# TODO: Remove stop words from the tokenized words
stop_words = set(stopwords.words('english'))
df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])

# TODO: Initialize a PorterStemmer and apply stemming to the words not considered as stop words
stemmer = PorterStemmer()
df['stemmed_tokens'] = df['filtered_tokens'].apply(lambda x: [stemmer.stem(word) for word in x])

# TODO: Print the first five entries of the column containing the stemmed tokens
print(df['stemmed_tokens'].head())
