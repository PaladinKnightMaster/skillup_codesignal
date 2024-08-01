# Configuring Boto3 for Automatic Retries and Custom Endpoints

Did you know you can configure a Boto3 client to automatically retry failed requests? This feature is incredibly helpful when dealing with network issues or service limits. The provided code creates an Amazon S3 client configured with a custom endpoint and a retry strategy. It is set to try up to 3 times if a request fails. Click `Run` to see how it's setup!

**Important Note**: Running scripts can alter the filesystem's state or modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.