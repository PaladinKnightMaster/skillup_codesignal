# Enabling Rotation for AWS KMS Keys

Continuing on your key management journey, this task will assert your understanding of enabling key rotation using AWS KMS with Python Boto3. The starter script creates a KMS key and provides a `key ID` that you can interact with, but it does not enable key rotation. Your task is to expand the interface and add a command line to enable key rotation on the provided key, then verify that rotation has been enabled by describing the key and printing the `KeyRotationEnabled` attribute. Run the script and view the result of your added feature.

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.