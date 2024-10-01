# Describing a Customer Master Key Metadata

You're making fantastic progress! In this task, you'll enhance an existing Python script by incorporating a feature that fetches metadata of an **AWS KMS Key**. The provided script creates a KMS key, generates a data key, and stores the `key_id`. Now, you are required to add functionality to describe the created KMS key using the `describe_key` operation and print its KeyState. Carefully observe how the data flows and the output to strengthen your grasp on AWS KMS operations.

Hint: The `KeyState` is nested inside `KeyMetadata` in the response from the `describe_key` operation.

Important Note: Running scripts can modify resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top-right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.