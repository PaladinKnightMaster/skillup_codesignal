# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from datasets import load_dataset

# # Loading the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Converting the loaded dataset into a DataFrame
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Initialize the TfidfVectorizer with specific parameters

# # TODO: Apply the vectorizer to the 'message' column

# # TODO: Print the shape of the resulting feature matrix

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from datasets import load_dataset

# Loading the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Converting the loaded dataset into a DataFrame
df = pd.DataFrame(sms_spam['train'])

# TODO: Initialize the TfidfVectorizer with specific parameters
vectorizer = TfidfVectorizer(ngram_range=(1, 2), max_features=1000)

# TODO: Apply the vectorizer to the 'message' column
X_tfidf = vectorizer.fit_transform(df['message'])

# TODO: Print the shape of the resulting feature matrix
print(X_tfidf.shape)