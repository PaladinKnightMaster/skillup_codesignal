# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score

# # TODO: Import the Multinomial Naive Bayes classifier
# from sklearn.naive_bayes import __________

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Initialize a TF-IDF Vectorizer and transform the messages
# vectorizer = TfidfVectorizer()
# X_tfidf = vectorizer.fit_transform(df['message'])

# # Split data into training and test sets
# X_train, X_test, y_train, y_test = train_test_split(X_tfidf, df['label'], test_size=0.25, random_state=42)

# # TODO: Initialize a Multinomial Naive Bayes classifier
# clf = ______________

# # Train the classifier
# clf.fit(X_train, y_train)

# # Make predictions
# y_pred = clf.predict(X_test)

# # Calculate accuracy
# print("Accuracy:", accuracy_score(y_test, y_pred))

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# TODO: Import the Multinomial Naive Bayes classifier
from sklearn.naive_bayes import MultinomialNB

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Initialize a TF-IDF Vectorizer and transform the messages
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(df['message'])

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, df['label'], test_size=0.25, random_state=42)

# TODO: Initialize a Multinomial Naive Bayes classifier
clf = MultinomialNB()

# Train the classifier
clf.fit(X_train, y_train)

# Make predictions
y_pred = clf.predict(X_test)

# Calculate accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))