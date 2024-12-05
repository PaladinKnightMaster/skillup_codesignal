# Mastering Stemming in NLP with NLTK

## Introduction to Stemming
Hello and welcome! In the world of Natural Language Processing (NLP), dealing with text data often involves various preprocessing steps. One such essential step is "Stemming".

Stemming is a heuristic process of reducing inflected (or sometimes derived) words to their root or basic form — generally a written word form. The principle use of stemming is to reduce related words to the same stem even if this stem itself is not a valid root.

For example, if we load stemming on the words `running`, `runs`, `run`, we should get `run` as the result for all of them.

Why does this matter? It's quite simple when it comes to text processing. Words like `running`, `runs`, `run` all carry similar context, and when processing language, it's beneficial to treat them as the same. This simplification not only speeds up various NLP tasks but also significantly reduces the space of features while preserving most of the informational content.

It's essential to note that stemming is not always the perfect method for some applications as it is based on heuristics and doesn't take into consideration the context of a word. In many cases, this can lead to incorrect stemming of the words, but it's still an effective strategy for many NLP applications.

## Implementing Stemming with Python and NLTK
For implementing stemming, we will be using a very powerful Python library for processing natural language — NLTK (Natural Language Toolkit). It provides several different algorithms to stem words, but for this lesson, we will focus on the most common algorithm - the Porter Stemming Algorithm.

The Porter Stemming Algorithm is a heuristic process for removing the commoner morphological and inflectional endings from words in English. Its primary use is in information retrieval systems. It leverages five different phases of word reductions, applied sequentially that are composed of multiple heuristics.

Let's see how we can implement this in Python:

```Python
from nltk.stem.porter import PorterStemmer
stemmer = PorterStemmer()

word_list = ["running", "runs", "run"]
stemmed_words = [stemmer.stem(word) for word in word_list]
print(stemmed_words)
```

The output of the above code will be:

```Plain text
['run', 'run', 'run']
```

This demonstrates how stemming effectively reduces different forms of the word `run` to its root form.

## Applying Stemming to SMS Spam Collection Dataset
Let's now apply stemming to real data. We will use the SMS Spam Collection dataset, which you have learned to import previously.

Also, this dataset has already been lowercased, tokenized, and had stop words removed as you have learned in the previous lessons:

```Python
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from datasets import load_dataset

nltk.download('punkt')
nltk.download('stopwords')

# Load the dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame
df = pd.DataFrame(sms_spam['train'])

# Convert all messages to lowercase
df['processed_message'] = df['message'].apply(lambda x: x.lower())

# Tokenize the text messages into individual words
df['tokens'] = df['processed_message'].apply(word_tokenize)

# Remove stop words
stop_words = set(stopwords.words('english'))
df['filtered_tokens'] = df['tokens'].apply(lambda x: [word for word in x if word not in stop_words])

# Create a stemmer
stemmer = PorterStemmer()

# Stemming the tokens
df['stemmed_tokens'] = df['filtered_tokens'].apply(lambda x: [stemmer.stem(word) for word in x])

# Print the first 5 rows of 'stemmed_tokens' column
print(df['stemmed_tokens'].head())
```

The output of the above code will be:

```Plain text
0    [go, jurong, point, crazi, avail, onli, bugi, ...
1                         [ok, lar, joke, wif, u, oni]
2    [free, entri, 2, wkli, comp, win, fa, cup, fin...
3        [u, dun, say, earli, hor, u, c, alreadi, say]
4    [nah, think, goe, usf, live, around, though]
Name: stemmed_tokens, dtype: object
```

This sample output showcases the stemming results on the first 5 records in the SMS Spam Collection dataset, demonstrating how each word in the messages is reduced to its stemmed form.

The resulting `stemmed_tokens` column in our DataFrame now contains the stemmed forms of our tweet's tokenized words. However, remember that stemming is a heuristic process and imperfect, but it is still effective for many NLP tasks.

And there you go! You've learned another key preprocessing step in NLP — Stemming.

## Lesson Summary and Practice
Congrats on getting to the end of this lesson! We delved into Stemming—an essential text preprocessing step in Natural Language Processing, which is instrumental in reducing dimensionality and standardizing word variations.

You have learned about the Porter Stemming algorithm and how to implement it using the powerful and convenient Natural Language Toolkit (NLTK). Given the importance of stemming in many NLP tasks, understanding and mastering this concept will undoubtedly come in handy down the line.

Next up, we have some practice exercises where you'll be tasked with performing stemming on different pieces of text. They will help strengthen your grasp of the concept and perfect your coding skills. Happy learning!
