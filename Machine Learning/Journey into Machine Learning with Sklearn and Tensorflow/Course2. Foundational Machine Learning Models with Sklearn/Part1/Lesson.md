# Exploring Sklearn: Introduction to Machine Learning Basics

## Machine Learning and Sklearn: An Introduction
Welcome! This lesson paves your path toward understanding machine learning and the powerful Python library, `sklearn`. Machine learning, an application of artificial intelligence, enables systems to learn and improve without being explicitly programmed. It plays a key role in various sectors, such as autonomous vehicles, voice recognition systems, and recommendation engines.

Suppose you aim to predict housing prices as an illustration. This scenario constitutes a standard supervised learning problem wherein you train your model using past data. With `sklearn`, you can import the data, preprocess it, select an algorithm (like linear regression), train the model with the training data, and make predictions. All these steps can be accomplished without manually implementing algorithms.

## Importing the Iris Dataset
Datasets form the backbone of machine learning. In this course, we'll use the Iris dataset, which consists of measurements — namely, sepal length, sepal width, petal length, and petal width — for 150 flowers representing three species of iris.

`Sklearn` provides an easy-to-use `load_iris` function to import the Iris dataset. Let's see how it works:

```Python
from sklearn.datasets import load_iris

iris = load_iris()
X = iris.data
y = iris.target
```

Here, the `load_iris()` function loads the dataset and assigns it to the `iris` variable. We then separate the dataset into `X` for features and `y` for the target.

Furthermore, you can print the description of the dataset for more detailed insight using the `DESCR` attribute as follows:

```Python
print(iris.DESCR)
```

Output:

```Markdown
.. _iris_dataset:

Iris plants dataset
--------------------

**Data Set Characteristics:**

    :Number of Instances: 150 (50 in each of three classes)
    :Number of Attributes: 4 numeric, predictive attributes and the class
    :Attribute Information:
        - sepal length in cm
        - sepal width in cm
        - petal length in cm
        - petal width in cm
        - class:
                - Iris-Setosa
                - Iris-Versicolour
                - Iris-Virginica

    :Missing Attribute Values: None
    :Class Distribution: 33.3% for each of 3 classes.
    :Creator: R.A. Fisher
    :Donor: Michael Marshall (MARSHALL%PLU@io.arc.nasa.gov)
    :Date: July, 1988

The famous Iris database, first used by Sir R.A. Fisher. The dataset is taken
from Fisher's paper. Note that it's the same as in R, but not as in the UCI
Machine Learning Repository, which has two wrong data points.

The mean sepal length is 5.843, which is close to the mean of all other
attributes. The petal width varies from 0.1cm to 2.5cm, indicating a large
range.

This is perhaps the best-known database to be found in the
pattern recognition literature.  Fisher's paper is a classic in the field and
is referenced frequently to this day.
```

This code prints a detailed description of the dataset and its attributes.

## Exploring Sklearn's Functionality
After the data loading, let's delve into how Python and `sklearn` enable us to explore it. 'Features’ and 'Target' are two critical terms related to the dataset. Here, 'Features' refer to the attributes of the Iris flower: sepal length, sepal width, petal length, and petal width. 'Target', on the other hand, refers to the species of the Iris flower, which we aim to predict based on these features.

The `data` and `target` attributes of the `iris` object hold the feature matrix and the response vector, respectively. The `shape` property gives information about their dimensionality - how many examples we have and how many features each example consists of.

```Python
print("Data shape: ", iris.data.shape)  # Prints (150, 4)
print("Targets shape: ", iris.target.shape)  # Prints (150,)
```

Output:

```Markdown
Data shape:  (150, 4)
Targets shape:  (150,)
```

## Preparing Dataset for Model Training
Before feeding our data to the machine learning model, we must split it into a training set and a test set. The training set teaches our model, while the test set evaluates its performance. `Sklearn` allows for the convenient split of these datasets using the `train_test_split` function from the `model_selection` module.

```Python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Training set size: ", len(X_train))  # Prints 120
print("Test set size: ", len(X_test))  # Prints 30
```

Output:

```Markdown
Training set size:  120
Test set size:  30
```

Here, the `train_test_split` function has divided our data into a training set — 80% of the original data, and a test set — the remaining 20%.

## Quick Look at Sklearn's Model Structure
Each machine learning model in `sklearn` is represented as a Python class. These classes offer an interface that includes methods for building the model (`fit`), making predictions (`predict`), and evaluating the model's performance (`score`).

In the next, more concrete lesson, you'll see how to apply these methods after selecting a specific type of machine learning model. For now, understand that the procedure of using these models would look something as follows:

```Python
# model = SomeModel(args)
# model.fit(X_train, y_train)
# predictions = model.predict(X_test)
# score = model.score(X_test, y_test)
```

Congratulations! With the knowledge acquired from this lesson, you now understand what `sklearn` is, how to import data using it, the process of preparing data for machine learning tasks, and the rudimentary structure of `sklearn` models. The upcoming sessions will build upon this fundamental understanding by introducing you to more specific machine-learning models and optimization tricks. Keep practicing and continue learning as we're taking the first steps into the exciting world of machine learning! Keep up the good work!
