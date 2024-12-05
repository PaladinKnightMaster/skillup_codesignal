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

# # Convert all messages to lowercase for uniformity
# df['processed_message'] = df['message'].apply(lambda x: x.lower())

# # Tokenize the messages into individual words
# df['tokens'] = df['processed_message'].apply(lambda x: word_tokenize(x))

# # Remove stop words from tokens
# stop_words = set(stopwords.words('english'))
# df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])

# # TODO: Define the stemmer

# # TODO: Apply stemming to the tokens

# # TODO: Print the Dataframe head of the stemmed tokens


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

# Convert all messages to lowercase for uniformity
df['processed_message'] = df['message'].apply(lambda x: x.lower())

# Tokenize the messages into individual words
df['tokens'] = df['processed_message'].apply(lambda x: word_tokenize(x))

# Remove stop words from tokens
stop_words = set(stopwords.words('english'))
df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])

# TODO: Define the stemmer
stemmer = PorterStemmer()

# TODO: Apply stemming to the tokens
df['stemmed_tokens'] = df['filtered_tokens'].apply(lambda x: [stemmer.stem(word) for word in x])

# TODO: Print the Dataframe head of the stemmed tokens
print(df['stemmed_tokens'].head())
