# Exploring Linear Regression with Python and Sklearn

## Topic Overview
In today's lesson, we are embarking on an exploration of the powerful statistical model known as Linear Regression. While venturing into the realms of machine learning, we will dissect the foundations of linear regression, implement it using the library `sklearn`, and apply it to the Iris dataset. We will then visualize these fascinating results using `matplotlib`. Keep your explorer spirit high, for by the end of this journey, you'll be well versed in understanding, implementing, and interpreting Linear Regression using Python and sklearn.

Linear Regression is a pillar of many machine learning algorithms, and hence, understanding it acts as a stepping stone towards grasping more complex statistical approaches. Get ready to turn the wheels of your mind and dive right in!

## Introduction to Linear Regression
Linear Regression is a prime tool in a statistician's toolbox, intended to decipher the relationship between two or more variables. To break it down into simpler terms, imagine you are an explorer observing a sunrise. You realize that, the higher the sun rises in the sky, the brighter it gets. This scenario is a simple example of linear regression, where the height of the sun (an independent variable) and the brightness (a dependent variable) share a linear relationship.

Though it is a powerful tool, it does not conform to every scenario in real life, posing a limitation. Unlike brightness being a linear aspect of a sunrise, improvements in an athlete's performance do not strictly depend on training hours. Factors like nutrition, rest, and mindset also contribute substantially. Despite its limitations in some scenarios, Linear Regression, given its simplicity and efficiency, is widely used in areas like economics, computer science, and business.

## Linear Regression in Sklearn
Meet `sklearn`, a highly efficient Python library that provides robust tools for machine learning and modeling, including Linear Regression. The `sklearn.linear_model.LinearRegression` class comes with a multitude of methods like `fit()` for training the model on data, `predict()` for making predictions, and many more. Let's apply it to the Iris dataset.

In this example, we will be taking the sepal length as an independent variable (X) and using it to predict the sepal width (the dependent variable, `y`). Here's how we can do it:

```Python
from sklearn.datasets import load_iris
from sklearn.linear_model import LinearRegression

# Loading the Iris dataset
iris_data = load_iris()
X = iris_data.data[:, :1]  # Sepal length
y = iris_data.data[:, 1:2]  # Sepal width

# Creating an instance of Linear Regression model
lr_model = LinearRegression()

# Fitting the model to our data
lr_model.fit(X, y)
```

The `fit()` function trains our model on the data points `X` and `y`. From a bird's-eye view, the function tries to draw a line that represents all the points as accurately as possible. Voila! We have now trained a Linear Regression model.

## Work with Linear Regression's Results
With our model trained, we can explore some of the attributes of the model, like the coefficients and the intercept, which are the building blocks of the equation
y=m∗x+c. Here `m` is the slope (coefficients), `c` is the y-intercept, `x` is the independent variable (sepal length), and `y` is the dependent variable (predicted sepal width).

Let's find out the coefficients and intercept of our model:

```Python
# Printing coefficients and intercept
print('Coefficient (Slope): ', lr_model.coef_)
print('Intercept (Y-intercept): ', lr_model.intercept_)
```

The output of the above code will be:

```
Coefficient (Slope): [[-0.22336106]]
Intercept (Y-intercept): [3.41894684]
```

Furthermore, we can utilize our trained model to predict the sepal width for new sepal length observations:

```Python
# Sample sepal lengths
new_sepal_length_values = [[4.5], [5.5], [6.5]]

# Printing the predicted sepal widths
predicted_sepal_width_values = lr_model.predict(new_sepal_length_values)
print('Predicted Sepal Width values: ', predicted_sepal_width_values)
```

The output of the above code will be:

```
Predicted Sepal Width values: [[2.4171761 ]
                               [2.189183  ]
                               [1.9611899 ]]
```

Now, the machine you've built can predict sepal width given its length. Exciting, isn't it?

## Visualizing Linear Regression Model
Visual aids play an essential role in understanding and interpreting data. Python's `Matplotlib` library is a potent tool for brewing striking visuals, helping us derive meaningful insights from our data. With Matplotlib, we will plot our data and the regression line on a 2D graph, cultivating a richer understanding of our model.

```Python
import matplotlib.pyplot as plt

# Plotting actual data points
plt.scatter(X, y, color='red')

# Plotting the regression line
plt.plot(X, lr_model.predict(X), color='blue')

# Setting labels and title
plt.xlabel('Sepal length')
plt.ylabel('Sepal width')
plt.title('Sepal length vs Sepal width (Linear Regression)')

# Displaying our plot
plt.show()
```

After running the code above, we see a plot with a regression line going through the data points, providing a clearer understanding of the linear relationship between sepal length and sepal width.

![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_60.png)

Notice how the formula for the linear regression line can be used to calculate the predicted sepal width:

```Python
sepal_width = 4.5 #x value
m = lr_model.coef_
b = lr_model.intercept_
predicted_speal_length = m * sepal_width + b #y value
print(predicted_sepal_length) # 2.4171761
```

This formula predicts a sepal length of `2.4171761`, just like the `.predict` method.

## Lesson Summary and Practice
A round of applause for you! Today, you've built your first Linear Regression model. You've touched upon and explored the nuts and bolts of Linear Regression with the support of sklearn. You applied the model to the Iris dataset, and the resulting graphs brought a moment of clarity and understanding to your learning path.

Remember, the real magic happens when concepts meet action. The upcoming exercises are designed to give you hands-on experience with what you've just learned. Put on your data detective hat and get on with your journey to decode Linear Regression puzzles. All the best for your exploration!
