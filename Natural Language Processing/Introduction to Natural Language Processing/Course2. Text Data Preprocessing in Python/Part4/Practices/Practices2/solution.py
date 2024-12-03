# import pandas as pd
# import nltk
# nltk.download('punkt')
# nltk.download('stopwords')
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords

# # Generated dataset with English and Spanish words
# data = {
#     'message': [
#         'Hola cómo estás?',
#         'I am fine and you?',
#         'Estoy bien gracias por preguntar',
#         'Good morning have a nice day',
#         'Buenos días que tengas un buen día'
#     ]
# }

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(data)

# # Tokenize the messages into individual words
# df['tokens'] = df['message'].apply(lambda x: word_tokenize(x.lower()))

# # Define stop words
# stop_words = stopwords.words('english') # TODO: Change to use 'spanish' stop words

# # Print some stop words
# print("Some stop words:", stop_words[:3])

# # Remove stop words from tokens
# df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])
# print(df[['message', 'filtered_tokens']].head())

import pandas as pd
import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Generated dataset with English and Spanish words
data = {
    'message': [
        'Hola cómo estás?',
        'I am fine and you?',
        'Estoy bien gracias por preguntar',
        'Good morning have a nice day',
        'Buenos días que tengas un buen día'
    ]
}

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(data)

# Tokenize the messages into individual words
df['tokens'] = df['message'].apply(lambda x: word_tokenize(x.lower()))

# Define stop words
stop_words = stopwords.words('spanish') # TODO: Change to use 'spanish' stop words

# Print some stop words
print("Some stop words:", stop_words[:3])

# Remove stop words from tokens
df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])
print(df[['message', 'filtered_tokens']].head())