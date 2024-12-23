# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer

# # Loading the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Converting the dataset to a pandas DataFrame for ease of handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Initialize TfidfVectorizer with stop words set to remove English stop words

# # TODO: Fit the vectorizer to the 'message' column and transform it into a TF-IDF matrix

# # TODO: Print the shape of the TF-IDF matrix to see the number of messages and terms

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer

# Loading the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Converting the dataset to a pandas DataFrame for ease of handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Initialize TfidfVectorizer with stop words set to remove English stop words
vectorizer = TfidfVectorizer(stop_words='english')

# TODO: Fit the vectorizer to the 'message' column and transform it into a TF-IDF matrix
X_tfidf = vectorizer.fit_transform(df['message'])

# TODO: Print the shape of the TF-IDF matrix to see the number of messages and terms
print(X_tfidf.shape)