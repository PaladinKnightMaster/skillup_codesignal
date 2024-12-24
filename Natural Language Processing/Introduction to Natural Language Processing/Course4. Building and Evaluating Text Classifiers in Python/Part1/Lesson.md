# Training a Naive Bayes Classifier for Text Categorization

## Topic Overview and Objective
Hello again! Now that you are familiar with loading and preprocessing the dataset, today we'll learn how to train a **Naive Bayes Classifier** for text classification using Python. We'll be using the SMS Spam collection dataset in this example given below. By the end of this lesson, you will have a clear understanding about the principles of Naive Bayes algorithm and its implementation with the `sklearn` package in Python.

## Train-Test Split Details
You have previously learned how to load our dataset and vectorize its messages, now it's time to split the data in two sets. The train set, where we already know the output that the model learns on, and the test set, where we test our model’s predictions on unseen data. We can leverage the `sklearn` package for that as done in the following code:

```Python
from sklearn.model_selection import train_test_split

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, df['label'], test_size=0.25, random_state=42)
```

The random state in our train-test split function ensures reproducibility. This is crucial so we invariably get the same split each time we run the code. Let's use a test size of `0.25`, which means we will use 75% data for training and 25% for testing our model.

## Introduction to Naive Bayes Model
The Naive Bayes classifier is a simple yet effective and commonly-used, probabilistic classifier. It's founded on applying Bayes' theorem with strong (naive) independence assumptions between the features. Naive Bayes classifiers have been particularly effective for high-dimensional data, and have worked quite well for text classification problems.

In our case, we'll use the `Multinomial Naive Bayes` implementation available in `sklearn`, which is suitable for classification with discrete features (like word counts for text classification).

Let's go ahead and create a Multinomial Naive Bayes model. Then, we can train it (or "fit" it, as we say in Machine Learning) with `fit(X_train, y_train)`. Here `X_train` contains the vectorized training data and `y_train` contains the corresponding labels.

```Python
from sklearn.naive_bayes import MultinomialNB

# Train a Multinomial Naive Bayes classifier
clf = MultinomialNB()
clf.fit(X_train, y_train)
```

## Predicting with a New Message
Once our model is trained, it can classify new, unseen messages. To do this, we preprocess and vectorize a new given message in the same way as our training data. Then, we use our trained classifier to predict the message category.

Here's an example:

```Python
new_message = "Congratulations! Text 'WIN' to claim a prize."
new_message_vectorized = vectorizer.transform([new_message])

prediction = clf.predict(new_message_vectorized)
print("The message is:", prediction)
```

```Plain text
The message is: ['spam']
```

This shows how our trained Naive Bayes model can be used in practice to classify new messages.

## Measuring Accuracy with Test Set
Upon training, our Naive Bayes classifier is now ready to classify new messages and measure its accuracy. To predict categories of unseen data, we employ the `predict` method on the vectorized test data, `X_test`. We then assess the model's performance via the accuracy metric - the proportion of correct predictions against the total predictions. The accuracy is calculated using `accuracy_score()` from sklearn's metrics.

```Python
from sklearn.metrics import accuracy_score

# Make predictions on the test set
y_pred = clf.predict(X_test)

# Calculate the accuracy of the predictions
print("Accuracy:", accuracy_score(y_test, y_pred))
```

This outlines how our model fares in classifying SMS messages, providing insights into its reliability for practical applications. The output shows that the model has an accuracy of approximately 96%. This indicates that the Naive Bayes classifier is highly effective in distinguishing between spam and non-spam messages in our dataset, correctly identifying the category of new, unseen messages with a high degree of reliability.

```Plain text
Accuracy: 0.9655419956927495
```

## Lesson Summary and Practice
Great job! You've just learned to train a Naive Bayes Classifier, made predictions with the model and assessed its performance using accuracy. These are key steps in building text classification models and you've done a fantastic job in grasping the basics.

Now, it's time for real hands-on practice. It's during the solving of real problems that the concepts get embedded in our understanding. So don't hold back on experimenting.

Keep exploring, keep learning! Happy coding!
