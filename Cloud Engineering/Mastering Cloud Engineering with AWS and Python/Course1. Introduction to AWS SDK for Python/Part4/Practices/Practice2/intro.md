# Elevating AWS Python Logging to DEBUG Level

Following your progress on the hands-on tasks, you're doing an excellent job! In this exercise, you're introduced to a Python script that leverages the **Boto3** library for AWS S3 operations. The script sets up a resource for S3, creates a bucket, and lists all available buckets. Your task is to elevate the existing logging level from the default `WARNING` to `DEBUG`. Here's a hint: leverage Python's `logging` module to configure the level to `DEBUG`. This alteration will provide more descriptive log outputs for your AWS interactions.

**Important Notes**:

The debug logging output can be viewed under the **ERRORS** tab in your console. This is because the debug level logs are treated as errors in the coding environment. Don't be alarmed, these are not actual errors but helpful debug information for developers.
Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the **reset button** located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.