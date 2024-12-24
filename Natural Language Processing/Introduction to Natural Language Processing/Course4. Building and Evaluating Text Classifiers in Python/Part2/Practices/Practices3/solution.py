# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression
# from sklearn.metrics import accuracy_score

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')
# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # Initialize a TF-IDF Vectorizer and transform the messages
# vectorizer = TfidfVectorizer()
# X_tfidf = vectorizer.fit_transform(df['message'])

# # Split data into training and test sets
# X_train, X_test, y_train, y_test = train_test_split(X_tfidf, df['label'], test_size=0.25, random_state=42)

# # TODO: Train the Logistic Regression classifier with the training data

# # TODO: Predict the labels of testing data

# # TODO: Print the accuracy of the classifier on the testing set

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')
# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Initialize a TF-IDF Vectorizer and transform the messages
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(df['message'])

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, df['label'], test_size=0.25, random_state=42)

# TODO: Train the Logistic Regression classifier with the training data
log_reg = LogisticRegression()
log_reg.fit(X_train, y_train)

# TODO: Predict the labels of testing data
y_pred = log_reg.predict(X_test)

# TODO: Print the accuracy of the classifier on the testing set
print("Accuracy:", accuracy_score(y_test, y_pred))