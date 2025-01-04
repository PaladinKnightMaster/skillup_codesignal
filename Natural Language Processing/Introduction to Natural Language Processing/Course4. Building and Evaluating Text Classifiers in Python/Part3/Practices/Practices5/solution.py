# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import cross_val_score
# from sklearn.naive_bayes import MultinomialNB

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Initialize a TF-IDF Vectorizer and transform the messages
# vectorizer = TfidfVectorizer()
# X_tfidf = vectorizer.fit_transform(df['message'])

# # TODO: Initialize a Naive Bayes classifier

# # TODO: Apply 5-fold cross-validation on the classifier and store the result in a variable

# # TODO: Print the cross-validated scores for each fold

# # TODO: Calculate and print the average of the cross-validated scores


import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import cross_val_score
from sklearn.naive_bayes import MultinomialNB

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Initialize a TF-IDF Vectorizer and transform the messages
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(df['message'])

# TODO: Initialize a Naive Bayes classifier
clf = MultinomialNB()
# TODO: Apply 5-fold cross-validation on the classifier and store the result in a variable
scores = cross_val_score(clf, X_tfidf, df['label'], cv=5)
# TODO: Print the cross-validated scores for each fold
print("Cross-validated scores:", scores)
# TODO: Calculate and print the average of the cross-validated scores
print("Average cross-validated score:", scores.mean())
