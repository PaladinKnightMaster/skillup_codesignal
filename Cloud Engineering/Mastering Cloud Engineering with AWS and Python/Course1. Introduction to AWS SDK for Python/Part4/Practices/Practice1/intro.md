# Running AWS Debug Logging and S3 Operations

Welcome to your next hands-on task! Here, you have a piece of Python code that initializes an **S3 resource**, applies **AWS debug logging**, creates a new bucket, and then lists all the available buckets. You need to run this script to observe how Python interacts with the local AWS environment and how the debugging logs offer insights into those interactions.

**Important Notes**:

* The debug logging output can be viewed under the **ERRORS** tab in your console. This is because the debug level logs are treated as errors in the coding environment. Don't be alarmed, these are not actual errors but helpful debug information for developers.
* Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the **reset button** located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.