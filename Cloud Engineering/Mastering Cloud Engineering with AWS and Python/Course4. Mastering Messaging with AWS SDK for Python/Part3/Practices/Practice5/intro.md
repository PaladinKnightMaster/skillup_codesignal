# Reading and Deleting Messages from an SQS FIFO Queue

Great progress! This task is designed to reinforce your understanding of reading and deleting messages from an AWS SQS FIFO (First-In-First-Out) queue. You'll be implementing Python script which reads and deletes messages from the SQS FIFO queue.

Initially, a FIFO queue named 'student_queue.fifo' is created and 2 messages are sent to this queue. Your task is to:

Receive both messages from the queue in a single call using long polling. Print their contents.
Delete both messages from the queue.
The messages should be processed in the order they were added (First-In-First-Out).

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.