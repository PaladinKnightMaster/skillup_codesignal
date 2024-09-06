# Creating SQS queues with custom attributes

In this task, you will demonstrate your knowledge of AWS Simple Queue Service by writing a Python script to create a standard queue named `AttrConfigStandardQueue`.

The queue should have the following settings:

* The visibility timeout of the queue should be set to **20 minutes**
* The time that the receiver has to wait until receiving the message should be set to **10 seconds**

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.