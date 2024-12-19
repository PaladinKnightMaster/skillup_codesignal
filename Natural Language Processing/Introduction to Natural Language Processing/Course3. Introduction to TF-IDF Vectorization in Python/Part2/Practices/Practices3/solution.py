# import numpy as np
# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for easier handling
# df = pd.DataFrame(sms_spam['train'])

# # Initialize the TF-IDF Vectorizer
# vectorizer = TfidfVectorizer()

# # Transform the messages into a matrix of TF-IDF features
# X_tfidf = vectorizer.fit_transform(df['message']).toarray()

# # Get the feature names
# feature_names = vectorizer.get_feature_names_out()

# # Find the indices of the top 10 features based on global maximum TF-IDF scores
# top_features_idx = np.argsort(X_tfidf.max(axis=0))[10:]

# # Extract the top 10 features
# top_features = feature_names[top_features_idx]

# # Print the top 10 TF-IDF features
# print("Top 10 TF-IDF features:")
# print(top_features)

import numpy as np
import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for easier handling
df = pd.DataFrame(sms_spam['train'])

# Initialize the TF-IDF Vectorizer
vectorizer = TfidfVectorizer()

# Transform the messages into a matrix of TF-IDF features
X_tfidf = vectorizer.fit_transform(df['message']).toarray()

# Get the feature names
feature_names = vectorizer.get_feature_names_out()

# Find the indices of the top 10 features based on global maximum TF-IDF scores
top_features_idx = np.argsort(X_tfidf.max(axis=0))[-10:]

# Extract the top 10 features
top_features = feature_names[top_features_idx]

# Print the top 10 TF-IDF features
print("Top 10 TF-IDF features:")
print(top_features)