# Generating a Data Key with KMS

We're now moving forward! In this task, you'll extend the functionality of a Python script for generating a data key in AWS KMS. The provided script initiates a `boto3` client for KMS, creates an AWS KMS key, and extracts the `key_id` from the KMS key response. Your task is to complete the script by adding functionality to generate a data key using the `generate_data_key` method. Run your updated script and observe the response.

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to your clipboard.