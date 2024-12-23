# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from datasets import load_dataset

# # Loading dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Initialize a vectorizer that filters out english stop words

# # Fitting vectorizer
# X_tfidf = vectorizer.fit_transform(df['message'])

# # Printing the shape of the TF-IDF matrix
# print(X_tfidf.shape)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from datasets import load_dataset

# Loading dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
df = pd.DataFrame(sms_spam['train'])

# TODO: Initialize a vectorizer that filters out english stop words
vectorizer = TfidfVectorizer(stop_words='english')

# Fitting vectorizer
X_tfidf = vectorizer.fit_transform(df['message'])

# Printing the shape of the TF-IDF matrix
print(X_tfidf.shape)