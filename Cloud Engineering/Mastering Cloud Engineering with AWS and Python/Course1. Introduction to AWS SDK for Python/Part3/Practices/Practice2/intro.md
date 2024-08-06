# Handling Boto3 Client Exceptions

Welcome back! In this task, we will take your understanding of `boto3` and AWS a notch higher. You are given a Python script that attempts to retrieve the list of objects in a non-existent AWS S3 bucket — a situation that inherently throws an exception.

Your task is to enhance this script by incorporating an exception handling mechanism to gracefully handle this `ClientError` exception that arises due to the service's response.

In the `ClientError` exception, you should discern between various status codes:

* `'AccessDenied'`: In this scenario, print this message: `'You do not have permissions to access the requested resource.'`
* `'NoSuchBucket'`: Here, print this message: `'The requested resource does not exist.'`
For other status codes, just print this generic message:`'Unexpected error occurred with error code: {error_code}'`. You can check the status code with `e.response['Error']['Code']`.

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top-right corner. While resetting erases any code changes, copying your code to the clipboard preserves it through a reset.