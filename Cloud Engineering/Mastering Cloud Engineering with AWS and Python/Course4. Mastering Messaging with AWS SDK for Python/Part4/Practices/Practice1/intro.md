# Running SNS Topic Creation Scripts

In this task, you will write a Python script that involves AWS Simple Notification Service (SNS). A pre-written script, which, when executed, creates an SNS topic named `'MyTopic'` and assigns a display name attribute to it, will be provided. Additionally, after creating the SNS topic, the script will list all existing SNS topics to ensure that your new topic has been created successfully. There is no need for code modification in this task; your role is simply to execute the script and observe the topic creation process in AWS SNS. Pay close attention to how the `boto3` resource for AWS SNS is initialized, how a new topic is created, how a display name attribute is assigned to this topic, and finally, how the script lists all the SNS topics. Be aware that there is a pre-existing topic named `'MyHeartbeat'` in our environment. However, this topic might take a bit of time to become available. Depending on when you click the "Run" button, you may or may not see two topics in the script output.

**Important Note**: Executing scripts can modify the resources in our AWS simulator. To return to the initial state, you can use the reset button located in the top right corner. However, be aware that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.