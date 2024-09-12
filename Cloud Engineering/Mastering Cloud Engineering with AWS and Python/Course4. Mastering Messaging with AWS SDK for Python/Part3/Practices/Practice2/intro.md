# Modifying Message Attributes in SQS

In this task, you will modify an existing Python script that interacts with Amazon SQS. The current script creates an SQS queue and sends a message with two attributes: `Author` and `WeeksOnJob`. Your task is to add a third attribute, `StartingDate`, representing the job's starting date in a `YYYY-MM-DD` format. After implementing your changes, run the script to add the modified message to the queue.

Important Note: Executing scripts can alter the resources in our AWS simulator. To return to the original state, you may use the reset button located in the top right corner. Nonetheless, remember that resetting will eliminate any code modifications. To maintain your code through a reset, consider copying it to the clipboard.