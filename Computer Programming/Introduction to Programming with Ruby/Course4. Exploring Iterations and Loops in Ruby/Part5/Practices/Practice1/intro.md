# Calculate Total and Average Days

Great job so far! Now, let's run the code example from the lesson to see how it works in action.

We are calculating the total and average time spent in multiple countries. This involves iterating over the values in a hash, summing up the days spent in each country, and then calculating the average.

In simple terms:

1. We have a hash where the keys are country names and the values are days spent.
2. We iterate through the hash and sum the number of days.
3. We calculate the average by dividing the total days by the number of countries.
4. Finally, we print the total and average days, rounding the average to two decimal places.

Let's run the code to see how this works.

Remember, we are using to_f to convert the number of countries to a float to get a decimal result when dividing the total days by the number of countries. If we don't do this, the result will be an integer.