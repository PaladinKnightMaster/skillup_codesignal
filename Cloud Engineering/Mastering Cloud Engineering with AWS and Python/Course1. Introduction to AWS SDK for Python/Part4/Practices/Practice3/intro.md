# Adding Debug Level Logging to AWS Operations

As you progress with **Boto3**, understanding and implementing logging is crucial for diagnosing and troubleshooting AWS service interactions. This exercise focuses on configuring logging for a **Boto3 S3** client operation. Your task is to set up logging to capture and display detailed DEBUG information specifically for S3 interactions.

Hint: Leverage Python's `logging` module for configuration and employ `boto3.set_stream_logger()` to fine-tune logging for the S3 service at the DEBUG level.

**Important Notes**:

* The debug logging output can be viewed under the **ERRORS** tab in your console. This is because the debug level logs are treated as errors in the coding environment. Don't be alarmed, these are not actual errors but helpful debug information for developers.
* Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the **reset button** located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.