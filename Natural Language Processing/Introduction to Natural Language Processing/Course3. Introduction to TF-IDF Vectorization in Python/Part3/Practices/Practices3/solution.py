# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # There's something wrong with how the parameters are set here. Can you spot and fix it?
# vectorizer = TfidfVectorizer(ngram_range=(2, 1), max_features=1000)
# X_tfidf = vectorizer.fit_transform(df['message'])

# print(X_tfidf.shape)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# There's something wrong with how the parameters are set here. Can you spot and fix it?
vectorizer = TfidfVectorizer(ngram_range=(1, 2), max_features=1000)
X_tfidf = vectorizer.fit_transform(df['message'])

print(X_tfidf.shape)