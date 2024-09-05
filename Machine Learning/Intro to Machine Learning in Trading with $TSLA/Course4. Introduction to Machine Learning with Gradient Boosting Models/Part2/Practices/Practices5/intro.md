# Evaluating Gradient Boosting Model with Cross-Validation

You're almost at the end, Space Voyager! It's time to put everything together. Write a complete implementation to evaluate a Gradient Boosting model with cross-validation on Tesla stock data. Follow the `TODO` comments to guide your steps.

Perform feature engineering to add the following columns:

* A shifted `Adj Close` column as the target
* Basic statistics like the mean and standard deviation of the `adjusted close` over the past 5 and 10 days

Drop `NaN` values created during feature engineering.