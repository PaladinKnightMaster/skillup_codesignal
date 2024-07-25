# Basic Plotting with Matplotlib

## Lesson Overview
In today's lesson, we'll immerse ourselves in the world of **Basic Plotting with Matplotlib**. You'll learn how to create basic line plots to visualize Tesla's (`$TSLA`) stock data. This lesson is essential as visualizing financial data is crucial for identifying trends and making informed trading decisions. By the end of this lesson, you'll be proficient in plotting data using Matplotlib, customizing plots, and interpreting the results.

## Introduction to Matplotlib
Matplotlib is a powerful plotting library in Python that allows developers to create a wide variety of static, animated, and interactive plots. It's widely used in data visualization because of its simplicity and versatility.

Why Matplotlib?

* **Versatility**: Matplotlib can be used to create plots ranging from simple line charts to complex 3D plots.
* **Customization**: Almost every aspect of a Matplotlib plot can be customized.
* **Integration**: It works well with Pandas, making it easy to visualize DataFrame data.
To get started with Matplotlib, you need to import the `pyplot` module:

```python
import matplotlib.pyplot as plt
```

## Preparing Data for Visualization
Before plotting, we need to prepare our Tesla stock data.

**Loading the Tesla Dataset**: We'll use the `load_dataset` function from the `datasets` library to load Tesla's historic price data:

```python
import pandas as pd
from datasets import load_dataset

# Load TSLA dataset
tesla_data = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])
```
**Converting Dates to Datetime Objects**: To handle the time series data correctly, we need to convert the 'Date' column to datetime format:

```python
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
```
**Setting Date as Index**: Next, we'll set the 'Date' column as the index of our DataFrame and sort it:

```python
tesla_df.set_index('Date', inplace=True)
tesla_df.sort_index(inplace=True)
```
At this point, our DataFrame is ready for plotting.

## Creating Basic Line Plots
Now that our data is prepared - let's create a basic line plot.

Using Matplotlib, we can plot the 'Close' prices against dates:

```python
plt.plot(tesla_df.index, tesla_df['Close'])
```
In the `plt.plot()` function:

* `tesla_df.index`: Represents the x-axis data, which, in this case, is the dates from the DataFrame index.
* `tesla_df['Close']`: Represents the y-axis data, which are the closing prices from the 'Close' column of the DataFrame.
It's also essential to add titles and labels to make our plot more informative:

```python
plt.title('TSLA Closing Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price (USD)')
```
On top of that, adding a legend helps identify what the plotted line represents:

```python
plt.legend(['Close Price'])
```

## Customizing Plots
Customizing plots improves their readability and aesthetic appeal.

We can adjust the figure size to ensure that our plots are well-proportioned. The `figsize` parameter takes a tuple `(width, height)` in inches. For example, `figsize=(10, 5)` creates a figure that is 10 inches wide and 5 inches tall. This helps in setting the size of the plot for better visualization:

```python
plt.figure(figsize=(10, 5))
```
Customizing line colors and styles makes plots visually appealing:

```python
plt.plot(tesla_df.index, tesla_df['Close'], color='blue', linestyle='-', linewidth=2)
```
Grid lines can make it easier to read the plot:

```python
plt.grid(True)
```
To render the plotted graph, we use:

```python
plt.show()
```

## Displaying and Interpreting Plots
Let's complete our plot and see the final result.

Here is the final code:

```python
import matplotlib.pyplot as plt
import pandas as pd
from datasets import load_dataset

# Load TSLA dataset
tesla_data = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert 'Date' column to datetime
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set 'Date' as index and sort it
tesla_df.set_index('Date', inplace=True)
tesla_df.sort_index(inplace=True)

# Plot the 'Close' prices
plt.figure(figsize=(10, 5))
plt.plot(tesla_df.index, tesla_df['Close'], color='blue', linestyle='-', linewidth=2)

# Add titles and labels
plt.title('TSLA Closing Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price (USD)')

# Add legend and grid
plt.legend(['Close Price'])
plt.grid(True)

# Display the plot
plt.show()
```
![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_22.png)

The output of the above code is a line graph displaying Tesla's closing stock prices over time. The clear, blue line plotted against the dates helps in identifying trends, highs and lows in Tesla's stock price.

Now, let's discuss what our plot tells us. By visualizing the closing prices over time, we can identify trends and patterns in Tesla's stock price. This could include periods of rapid growth, declines, or prolonged stability.

## Lesson Summary
In this lesson, you learned how to use Matplotlib to visualize Tesla's (`$TSLA`) stock data. You covered the basics of importing and setting up Matplotlib, preparing data for visualization, creating basic line plots, and customizing plots for better readability. These skills are crucial for conducting financial analyses and making informed trading decisions.

Next, dive into practice exercises to solidify these concepts. Visualizing stock prices efficiently is crucial for identifying trends and making informed trading decisions. Efficient data plotting strengthens your analytical skills, making you a more effective machine learning engineer and financial analyst. Let's get plotting!
