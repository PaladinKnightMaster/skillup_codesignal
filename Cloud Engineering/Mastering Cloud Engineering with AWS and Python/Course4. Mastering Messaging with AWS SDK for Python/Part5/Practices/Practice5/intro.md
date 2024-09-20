# Heartbeat Monitoring with SQS and SNS

In this task, an SNS topic named `MyHeartbeat` with the ARN `arn:aws:sns:us-east-1:000000000000:MyHeartbeat` has already been set up. The `MyHeartbeat` topic receives an event every 5 seconds from a background job. Your task is to leverage your learnt knowledge on Amazon Simple Queue Service (SQS) and Simple Notification Service (SNS) to complete the following:

1. Create an SQS queue named `MyHeartbeatQueue`.
2. Subscribe the created SQS queue to the `MyHeartbeat` SNS topic using its ARN. This SQS queue will capture and store the heartbeat events.
3. Poll for messages from the newly created SQS queue for 10 seconds and print out all the messages.

This task simulates a real-world scenario where background jobs or services constantly send heartbeat messages to ensure effective monitoring and maintain the health of your system. The goal here is not just to get the task done but also to get a feel of how this would be used in a professional setting.

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.