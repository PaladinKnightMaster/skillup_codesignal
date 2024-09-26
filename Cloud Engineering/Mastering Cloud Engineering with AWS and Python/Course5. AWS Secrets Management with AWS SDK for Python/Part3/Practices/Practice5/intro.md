# Retrieving Different Versions of a Secret

Great job managing Cosmo's secrets so far! Now, let's delve into managing secret versions more intricately. Given an initial Python script that creates a secret and then updates it twice, your task is to retrieve and print 2 latest version IDs of the secret. Then, specifically target and print the value of the secret marked with the `AWSPREVIOUS` staging label.

AWS Secrets Manager uses staging labels to help you manage different versions of a secret. The `AWSCURRENT` label always points to the current version of the secret, while `AWSPREVIOUS` points to the version before the current one. This feature is particularly useful for rolling back changes or maintaining an understanding of a secret's history.

Important Note: Running scripts can modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.