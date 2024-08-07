# Working with AWS Sessions and Amazon S3

Moving on to AWS services, in this task, you will demonstrate the creation of custom and default AWS sessions using **Boto3**, an important aspect of working with AWS in Python. **Amazon S3** is the service with which you are going to interact in this task. Your job is to complete the given script by creating a default S3 `resource` and `client`, which will connect to AWS services using the default session. The default session contains credentials and settings from environmental variables, AWS credentials and config files, or IAM roles for Amazon EC2 instances.

**Important Note**: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.