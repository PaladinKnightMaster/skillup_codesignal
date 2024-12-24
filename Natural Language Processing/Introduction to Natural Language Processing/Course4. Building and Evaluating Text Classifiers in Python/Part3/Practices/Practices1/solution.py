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

# Initialize a Naive Bayes classifier
clf = MultinomialNB()

# Apply cross-validation on the classifier
scores = cross_val_score(clf, X_tfidf, df['label'], cv=5)

# Print the scores for each cross-validation fold
print("Cross-validated scores:", scores)

# Calculate and print the mean of the cross-validation scores
print("Average cross-validated score:", scores.mean())