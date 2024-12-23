# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from datasets import load_dataset

# # load dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Define a custom list of stop words

# # Initialize the TfidfVectorizer with the custom stop words
# vectorizer = TfidfVectorizer(stop_words="english")

# # Perform Tf-IDF vectorization
# X_tfidf = vectorizer.fit_transform(df['message'])

# # Output the shape of the TF-IDF matrix
# print(X_tfidf.shape)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from datasets import load_dataset

# load dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
df = pd.DataFrame(sms_spam['train'])

# TODO: Define a custom list of stop words
custom_stop_words = ['a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'what', 'which', 'this', 'that', 'these', 'those', 'then',]

# Initialize the TfidfVectorizer with the custom stop words
vectorizer = TfidfVectorizer(stop_words=custom_stop_words)

# Perform Tf-IDF vectorization
X_tfidf = vectorizer.fit_transform(df['message'])

# Output the shape of the TF-IDF matrix
print(X_tfidf.shape)