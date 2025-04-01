# Evaluating Machine Learning Models: Metrics and Practices

## Topic Overview
Welcome! In this lesson, we're going to delve into an essential part of the data analysis and Machine Learning process — Model Evaluation — and specifically focus on understanding various evaluation metrics. In the language of Machine Learning, `models` are mathematical formulas, or algorithms, that process your input data to calculate the result for the task they're designed to perform. To ensure a model's predictions are accurate and reliable, we evaluate it against a set of standards or criteria, known as evaluation metrics.

Our primary goal in this lesson is to understand these metrics and learn how to apply them using Python and Sklearn on the Iris dataset. Given the numerous machine learning models available, knowing how to calculate and interpret these evaluation metrics will be crucial in selecting the most suitable model for any task. So, let's dive in!

## Model Evaluation: An Introduction
In the fascinating world of Machine Learning, we often encounter a question -- "How well is our model performing?". The response to this question is provided through the process of model evaluation. Model evaluation allows us to quantify our model's performance, essentially telling us how 'good' or 'bad' it is.

A standard method for model evaluation is splitting our data into Training and Test Sets. By training our model on the Training Set and then testing it on the Test Set, we ensure that our evaluation is unbiased and indicative of how the model will perform on new, unseen data.

The concept of Cross-Validation further refines this process. In Cross-Validation, we divide our dataset into 'K' parts, or folds. We then train our model 'K' times, each time using a different fold as our Test Set. This yields 'K' performance scores, which we average to get a final score.

Let's take a look at how this plays out in code:

```Python
from sklearn.model_selection import train_test_split

# Split the data into Training and Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# Print the size of our training and test sets
print("Number of instances in Training set: ", len(X_train))
print("Number of instances in Test set: ", len(X_test))
```

The output will be:

```
Number of instances in Training set:  105
Number of instances in Test set:  45
```

In this example, we split our original dataset, represented by `X` and `y`, into Training and Test Sets. We'll use 70% of the data (the Training Set) to train our model, and the remaining 30% (the Test Set) to test our model's performance.

## Performance Metrics for Regression Models
When dealing with regression problems (where the output is a numeric or continuous value), we use metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and Root Mean Squared Error (RMSE). MAE provides the average difference between our predictions and the actual values, while MSE and RMSE yield the average squared difference, with RMSE taking the square root of that difference.

Let's apply these metrics to a simple Linear Regression model:

```Python
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.linear_model import LinearRegression
from math import sqrt

# Instantiate and train a Linear Regression model
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# Predict test set labels and calculate errors
y_pred = lr_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = sqrt(mse)

print('Mean Absolute Error: ', mae)
print('Mean Squared Error: ', mse)
print('Root Mean Squared Error: ', rmse)
```

The output will be:

```
Mean Absolute Error:  1.23632
Mean Squared Error:  2.37823
Root Mean Squared Error:  1.54128
```

In this Python snippet, we create a Linear Regression model using `LinearRegression()`, train it using our training data with `fit()`, make predictions on the test data with `predict()`, and calculate MAE, MSE, and RMSE using the corresponding Scikit-Learn functions.

## Performance Metrics for Classification Models
In classification tasks, where the model's output is a category or class, we use metrics such as Accuracy, Precision, Recall, and the F1 Score.

Let's learn what each of these metrics is:

- **Accuracy**: Measures the proportion of true results (both true positives and true negatives) among the total number of cases examined. It is a straightforward metric for overall success but can be misleading in cases of class imbalance.

- **Recall**: Also known as sensitivity, this metric measures the proportion of actual positives that are correctly identified. It is particularly important when the consequences of false negatives are significant.

- **F1 Score**: A harmonic mean of Precision and Recall, providing a balanced measure between the two. It is most useful when we need a single metric to reflect both false positives and false negatives. An ideal F1 Score is 1, indicating perfect precision and recall, while 0 is the worst.

These metrics collectively offer a nuanced view of a model's performance, particularly in situations where certain types of errors are more consequential than others.

Additionally, we employ the Confusion Matrix — a table that summarizes the performance of classification models.

Let's examine this by training and evaluating a Logistic Regression model.

```Python
from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score
from sklearn.linear_model import LogisticRegression

# Instantiate and train a Logistic Regression model
log_model = LogisticRegression(max_iter=200)
log_model.fit(X_train, y_train)

# Predict test set labels and calculate scores
y_pred = log_model.predict(X_test)
accuracy = log_model.score(X_test, y_test)
precision = precision_score(y_test, y_pred, average='micro')
recall = recall_score(y_test, y_pred, average='micro')
f1 = f1_score(y_test, y_pred, average='micro')

print("Accuracy: ", accuracy)
print("Precision: ", precision)
print("Recall: ", recall)
print("F1 Score: ", f1)
```

The output will be:

```
Accuracy:  0.97777
Precision:  0.97777
Recall:  0.97777
F1 Score:  0.97777
```

In this block of code, we created a Logistic Regression model with `LogisticRegression()`, fitted it to the training data, predicted the labels of the testing set, and calculated Accuracy, Precision, Recall, and the F1 Score for the model on the test data.

## Decision Tree Model Performance
Lastly, when evaluating the performance of a decision tree model, we often use Accuracy and the Gini Index. Accuracy measures the fraction of correct predictions, while the Gini Index quantifies the impurity of an input set.

Let's explore this with an example:

```Python
from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier

# Instantiate and train a Decision Tree model
tree_model = DecisionTreeClassifier()
tree_model.fit(X_train, y_train)

# Predict test set labels and calculate accuracy
y_pred = tree_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy: ", accuracy)
```

The output will be:

```
Accuracy: 0.95555
```

Here, we created a Decision Tree classifier and calculated its accuracy. Give yourself a round of applause if your model has high accuracy!

## Lesson Summary and Practice
Bravo! You've actively learned about and implemented various model evaluation metrics, such as Mean Absolute Error, Mean Squared Error, Root Mean Squared Error for regression models, and Accuracy, Precision, Recall, F1 Score for classification models. Applying these metrics using Python and Sklearn should bring you closer to selecting the most suitable model for your datasets.

Now, it's time to apply what you've learned. Delve into practice exercises that will help you consolidate these core concepts and polish your newfound skills. Always remember that understanding and learning are key to success in your machine learning journey. Onwards and upwards!