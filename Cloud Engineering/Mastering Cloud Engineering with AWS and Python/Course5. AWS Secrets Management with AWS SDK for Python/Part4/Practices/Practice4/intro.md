# Managing Parameters with AWS SSM Overwrite Feature

Great job so far! Now, onto the next task. You've been handed a Python script that interacts with AWS Systems Manager (SSM). The script is supposed to create a single parameter for an application’s database configuration and tag it appropriately. Your objective is to complete this script by adding a code to tag this parameter with `{'Key': 'owner', 'Value': 'Cosmo'}`.

Important Note: Running scripts can modify resources in our AWS simulator. To revert to the initial state, use the reset button located in the top right corner. However, remember that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.