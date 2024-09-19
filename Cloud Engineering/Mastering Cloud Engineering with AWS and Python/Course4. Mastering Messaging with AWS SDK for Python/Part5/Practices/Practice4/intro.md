# Subscribing Multiple SQS Queues to a Single SNS Topic

In this exercise, you'll explore how Simple Notification Service (SNS) broadcasts messages to multiple Simple Queue Service (SQS) queues. Given a Python script that sets up SNS and SQS, creates an SQS queue, and subscribes it to an SNS topic, your task is to enhance the script by adding a second SQS queue, subscribing it to the same SNS topic, and confirming that the SNS message is delivered to both queues.

This setup will enable you to observe how publishing one message to an SNS topic results in it being deployed to all subscribed SQS queues. Utilizing long polling for message reading will also demonstrate more efficient message retrieval from the queues.

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.