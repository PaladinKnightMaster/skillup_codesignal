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

# Define parameter grid and perform grid search
param_grid = {'alpha': [ 0.1, 0.5, 1.0]}
search = GridSearchCV(MultinomialNB(), param_grid, cv=5)
search.fit(X_tfidf, df['label'])

print("Best parameters:", search.best_params_)