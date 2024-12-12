# import pandas as pd
# from datasets import load_dataset
# from sklearn.feature_extraction.text import TfidfVectorizer

# # TODO: Load the 'SMS Spam Collection' dataset and convert it to a DataFrame

# # TODO: Initialize a TfidfVectorizer

# # TODO: Convert the 'message' column to TF-IDF vectors

# # TODO: Print the shape of the resulting matrix

import pandas as pd
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer

# TODO: Load the 'SMS Spam Collection' dataset and convert it to a DataFrame
sms_spam = load_dataset('codesignal/sms-spam-collection')
df = pd.DataFrame(sms_spam['train'])

# TODO: Initialize a TfidfVectorizer
vectorizer = TfidfVectorizer()

# TODO: Convert the 'message' column to TF-IDF vectors
X_tfidf = vectorizer.fit_transform(df['message'])

# TODO: Print the shape of the resulting matrix
print(X_tfidf.shape)