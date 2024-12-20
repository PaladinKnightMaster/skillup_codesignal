# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from datasets import load_dataset

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Use TF-IDF with custom parameters
# vectorizer = TfidfVectorizer(ngram_range=(1, 1), max_features=2000)

# # Fit Vectorizer to 'message' column of the dataset
# X_tfidf = vectorizer.fit_transform(df['message'])

# # Print shape of feature matrix
# print(X_tfidf.shape)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from datasets import load_dataset

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Use TF-IDF with custom parameters
vectorizer = TfidfVectorizer(ngram_range=(1, 3), max_features=500)

# Fit Vectorizer to 'message' column of the dataset
X_tfidf = vectorizer.fit_transform(df['message'])

# Print shape of feature matrix
print(X_tfidf.shape)