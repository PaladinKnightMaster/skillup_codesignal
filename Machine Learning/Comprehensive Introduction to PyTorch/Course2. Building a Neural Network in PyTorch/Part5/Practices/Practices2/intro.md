# Evaluating with Precision Metric

Now that you have learned how to evaluate a PyTorch model using **accuracy** as the evaluation metric, it's time to explore another important metric called Precision. Precision is the ratio of correctly predicted positive observations to the total predicted positives. It answers the question: "Of all the instances the model predicted as positive, how many were actually positive?" This metric is particularly useful when the cost of false positives is high, such as in spam detection or disease diagnosis.

Your task is to modify the given code to calculate and display the **Precision** of the model instead of Accuracy. The `precision_score` function from `sklearn.metrics` is used similarly to how you previously used the `accuracy_score` function.