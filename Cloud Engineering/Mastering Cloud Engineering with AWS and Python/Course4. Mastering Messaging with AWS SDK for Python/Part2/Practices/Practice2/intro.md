# Configuring SQS Queue Attributes

In this task, you will modify an existing Python script. The script creates an Amazon SQS queue with pre-set attributes. Your goal is to understand the original queue configuration and adjust some attributes according to new technical requirements.

Consider the following:

* The processing time for messages usually takes 60 minutes, so messages should become invisible for that duration (`VisibilityTimeout`).
* Messages should remain in the queue for 3 days (`MessageRetentionPeriod`).
* There's a new requirement to have a delivery delay of 30 seconds (`DelaySeconds`).

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, remember that resetting will erase any code changes. If you've made any modifications that you'd like to keep, be sure to copy your code to your clipboard before hitting reset.