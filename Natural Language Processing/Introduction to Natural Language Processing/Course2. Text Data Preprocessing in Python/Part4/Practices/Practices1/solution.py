import pandas as pd
from datasets import load_dataset
import nltk
nltk.download('punkt')
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# Tokenize the messages
df['tokens'] = df['message'].apply(lambda x: word_tokenize(x))

# Define stop words
stop_words = stopwords.words('english')

# Print some stop words
print("Some stop words:", stop_words[:3])

# Remove stop words from tokens
df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])

# Print filtered tokens
print(df['filtered_tokens'].head())