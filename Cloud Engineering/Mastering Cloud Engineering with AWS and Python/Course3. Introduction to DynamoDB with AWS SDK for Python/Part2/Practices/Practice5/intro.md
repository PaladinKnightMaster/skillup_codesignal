# Managing DynamoDB Tables with Python

In your final task, you will synthesize what you have learned so far and write a script that creates two DynamoDB tables — `Users` and `Customers`. For the `Users` table, you should use a provisioned capacity mode with a read and write capacity of **5**. For the `Customers` table, apply the **on-demand** capacity mode. Each table should have only one attribute serving as a primary key: `username` in `Users`, and `customer_id` in `Customers`. After successfully creating the tables, implement a command to display all of your existing DynamoDB tables.

In this task, you will use `wait_until_exists()` for the `Users` table to automatically wait for the table to become active. For the `Customers` table, configure a custom waiter object to poll every 2 seconds and make a maximum of 10 attempts to check the status of the table.

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.