# Creating SNS Topic and SQS Queue

In this task, you'll interactively learn how to use Amazon's Simple Notification Service (SNS) and Simple Queue Service (SQS) to build a messaging system. Your task involves running a provided Python script that accomplishes the following:

* Establishes connections to SNS and SQS using the Boto3 resource interface.
* Creates a SNS topic and an SQS queue.
* Subscribes the queue to the topic.
* Sends a message to the topic.
* Retrieves and prints messages from the queue.

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.