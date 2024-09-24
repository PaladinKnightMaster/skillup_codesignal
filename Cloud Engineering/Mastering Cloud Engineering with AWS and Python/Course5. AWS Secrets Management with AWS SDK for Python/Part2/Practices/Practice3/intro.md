# Rotating AWS Secrets with Boto3

Cosmo is preparing for a surprise party for the CodeSignal Learn team and is using **AWS Secrets Manager** to securely handle the event details. We need to help him keep this information safe, using **Python Boto3**, AWS's SDK for Python. Your task is to update the secret Cosmo created by adding the time for the event, then retrieve the updated secret. Your updated secret should look like this:

```JSON
{"venue":"Cosmo´s Place","date":"Soon", "time":"19:00"}
```
Important Note: Running scripts can modify resources in our AWS simulator. To revert to the initial state, you may use the reset button located in the top right corner. However, remember that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.