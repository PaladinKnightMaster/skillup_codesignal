# Training a Machine Learning Model with the Titanic Dataset

## Topic Overview
Welcome back! In this lesson, we'll delve into the pivotal aspect of training a machine learning model once data cleaning and preprocessing is complete. Imagine teaching a pet to perform a trick. Initially, it is clumsy, but after several lessons, it begins to perform the trick correctly. Our machine learning model is the pet, and the trick is predicting outcomes based on data. Our aim in this lesson is to hone your skills in applying Python and the Scikit-learn library to train a machine-learning model on the Titanic dataset.

## Introduction to Model Training
Model training, as the name suggests, is the process of training our machine learning model on a subset of the available data (the training dataset) so it can start recognizing patterns and making predictions.

Just like a student studies a portion of the syllabus (the training dataset) and then gets tested on a smaller, unseen portion (the testing dataset), our model has a similar experience. The model learns from the training dataset, and then we assess its performance using the testing dataset.

Preventing overfitting (a model learning too well from the training data and performing poorly on the unseen data) is important, much like ensuring that a student understands the concepts being taught and can apply them instead of simply memorizing the course material. The next sections will show how we can use the `train_test_split` function from Scikit-learn to split our dataset.

## Setting Up Training and Testing Datasets
The preparation of the training and testing datasets involves splitting our data into two sections. The bigger section (usually 70%-80%) becomes our training data for the model to learn from, while the smaller section serves as our testing data to validate the model's performance.

Consider it as having a big apple pie (the full dataset). You want to eat the majority of it (the training set), but you save a slice for later (the testing set).

Here's an example of how to split our full dataset using Python and Scikit-learn:

```Python
# Importing necessary libraries
from sklearn.model_selection import train_test_split
import seaborn as sns

# Loading the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Splitting the full dataset into the training and testing datasets
train_data, test_data = train_test_split(titanic_df, test_size=0.2, random_state=42)

# Printing out the shapes of the datasets
print(f"Train data shape: {train_data.shape}") # Expected Output: (712, 15)
print(f"Test data shape: {test_data.shape}") # Expected Output: (179, 15)
```

Output:

```Markdown
Train data shape: (712, 15)
Test data shape: (179, 15)
```

This code divides our dataset into an 80%-20% split for the training and testing datasets respectively.

## Training the Logistic Regression Model
Now, let's introduce Logistic Regression, a popular model used for predicting outcomes that are binary. For the Titanic dataset, we're predicting whether a passenger survived (1) or did not survive (0).

You can think of Logistic Regression as a flip coin where the outcomes (survived or not) are represented by the two sides of the coin.

Using the `LogisticRegression` class from Scikit-learn, we can train our model on the training dataset via the `.fit()` function:

```Python
from sklearn.linear_model import LogisticRegression

logreg = LogisticRegression() # Initialize a Logistic Regression model

# We separate the target variable ("survived") from the rest of the training data
x_train = train_data.drop("survived", axis=1)
y_train = train_data["survived"]

# Training the Logistic Regression model
logreg.fit(x_train, y_train)
```

There is no visible output for the fit function in `scikit-learn` unless we have verbose logging turned on or an error occurs, but this step trains our model on the prepared data.

## Model Evaluation Techniques
Once we've trained our model, we need to assess its performance. Specifically, we are asking, "How well is our trained Logistic Regression model able to predict whether a passenger from the Titanic dataset survived or not?". Just as a teacher evaluates a student's performance through an exam, we use similar techniques to assess our model's performance on unseen data.

There are quite a few evaluation techniques available to us in the `scikit-learn` library, such as the `classification_report`, `confusion_matrix`, and `accuracy_score`. These techniques allow us to understand our model's performance from different perspectives.

Think of it like grading a student's performance in a course; you consider their assignments, class participation, midterm examinations, and final examinations. Each provides a unique insight into the student's overall understanding and performance in the course. Similarly, each evaluation method grants us insights into various aspects of our trained machine-learning model.

Here's an example of how these evaluation techniques can be used to grade our model:

```Python
# Importing necessary libraries
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# Separating the independent (x_test) and dependent (y_test) variables from the testing dataset
x_test = test_data.drop("survived", axis=1)
y_test = test_data["survived"]

# Using the model to make predictions on the testing dataset
predictions = logreg.predict(x_test)

# Displaying metrics
print("Classification Report:")
print(classification_report(y_test, predictions))

print("Confusion Matrix:")
print(confusion_matrix(y_test, predictions))

print("Accuracy Score:")
print(accuracy_score(y_test, predictions))
```

The output from the above code is as follows:

```Markdown
Classification Report:
              precision    recall  f1-score   support
           0       0.81      0.87      0.83       105
           1       0.79      0.70      0.74        74
    accuracy                           0.80       179
   macro avg       0.80      0.78      0.79       179
weighted avg       0.80      0.80      0.80       179

Confusion Matrix:
[[91 14]
 [22 52]]

Accuracy Score:
0.7988826815642458
```

The Classification Report gives precision, recall, and f1-score, which are key metrics to gauge the model's ability to identify each class accurately. Precision signifies the model's exactness, recall denotes the model's completeness, and the f1-score embodies a balance between them.

The Confusion Matrix presents a summary of correct and incorrect predictions broken down by each category. The matrix form allows us to visualize the performance of an algorithm. The accuracy score displays the percentage of instances that the model identified correctly. On a scale from 0 to 1, our accuracy score here is approximately `0.8` - indicating an 80% accuracy rate.

Consequently, our model was able to accurately predict whether passengers survived the Titanic disaster 80% of the time, thereby demonstrating its effectiveness. This evaluation phase is crucial to understanding the model's strengths and weaknesses and areas where the model can be improved in order to boost its performance.

## Lesson Summary and Practice
Throughout this lesson, you've gained knowledge on model training concepts, creating training and testing datasets, initializing and training a Logistic Regression model, and finally, evaluating your trained model. You've learned the theory alongside relevant coding examples, which enables you to both understand and implement these concepts effectively.

Wow, you are almost done with the course, before we wrap up though, we have some practice exercises to reinforce your understanding of these concepts. Just like playing a musical instrument, the more you practice, the better you get! Let's continue solving these intriguing machine-learning puzzles together!
