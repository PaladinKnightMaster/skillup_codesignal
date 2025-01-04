# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import GridSearchCV
# from sklearn.naive_bayes import MultinomialNB

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Initialize a TF-IDF Vectorizer and transform the messages
# vectorizer = TfidfVectorizer()
# X_tfidf = vectorizer.fit_transform(df['message'])

# # TODO: Set up the parameter grid for 'alpha' values in Grid Search

# # TODO: Initialize Grid Search with Naive Bayes classifier and fit it to the data

# # TODO: Print out the best 'alpha' parameter found by Grid Search

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import GridSearchCV
from sklearn.naive_bayes import MultinomialNB

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Initialize a TF-IDF Vectorizer and transform the messages
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(df['message'])

# TODO: Set up the parameter grid for 'alpha' values in Grid Search
param_grid = {'alpha': [0.05, 0.1, 0.5, 1.0, 2.0]}
# TODO: Initialize Grid Search with Naive Bayes classifier and fit it to the data
search = GridSearchCV(MultinomialNB(), param_grid, cv=5)
search.fit(X_tfidf, df['label'])
# TODO: Print out the best 'alpha' parameter found by Grid Search
print("Best parameters:", search.best_params_)