# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Attempt to remove stop words in the TF-IDF vectorization
# vectorizer = TfidfVectorizer()
# X_tfidf = vectorizer.fit_transform(df['message'])

# print(X_tfidf.shape)

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Attempt to remove stop words in the TF-IDF vectorization
vectorizer = TfidfVectorizer(stop_words='english')
X_tfidf = vectorizer.fit_transform(df['message'])

print(X_tfidf.shape)