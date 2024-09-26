# Advanced Secrets Management in AWS with Python SDK

## Introduction
As we've learned in our previous lessons, **AWS Secrets Manager** is a powerful service that helps protect access to your applications, services, and IT resources. It allows you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. In this lesson, we're going to explore the advanced features of AWS Secrets Manager with Python's AWS SDK, `Boto3`.

## Generating a Random Password
One way to ensure that passwords are strong and secure is to generate a random password using AWS Secrets Manager. Let's see how we can accomplish this:

```Python
import boto3

# Initialize the Secrets Manager client
client = boto3.client('secretsmanager')

# Generate a simple random password
response_simple = client.get_random_password()
print("Simple Random Password:", response_simple['RandomPassword'])

# Generate a complex random password including special characters and without any ambiguous characters
response_complex = client.get_random_password(
  PasswordLength=20,                  # Specify length
  IncludeSpace=True,                  # Include space character
  RequireEachIncludedType=True,       # Require at least one character from each included type
  ExcludeCharacters="/@\" "           # Exclude specific characters
)
print("Complex Random Password:", response_complex['RandomPassword'])
```

In this piece of code, we first create a client with AWS Secrets Manager using the `boto3.client('secretsmanager')` call. Then, we called the `get_random_password()` function, which generates a random password. The function accepts numerous parameters for customization, such as `PasswordLength`, `ExcludeCharacters`, `ExcludeNumbers`, `ExcludePunctuation`, `ExcludeUppercase`, `ExcludeLowercase`, `IncludeSpace`, `RequireEachIncludedType`.

## Listing All Secrets
AWS Secrets Manager provides a function to list all the secrets that are stored in it. The `list_secrets()` function returns a list of all secret information:

```Python
# List all secrets
response = client.list_secrets()

# Print each secret name
for secret in response['SecretList']:
    print("Secret Name:", secret['Name'])
```

## Tagging and Untagging Secrets
Tagging secrets can help with categorizing and managing secrets. The `tag_resource()` function is used to add tags to a secret. To remove tags, the `untag_resource()` function is used.

```Python
# Add tags to a secret
response = client.tag_resource(
    SecretId='MyTestSecretId',
    Tags=[
        {
            'Key': 'Environment',
            'Value': 'Production'
        },
    ]
)

# Remove tags from a secret
response = client.untag_resource(
    SecretId='MyTestSecretId',
    TagKeys=[
        'Environment',
    ]
)
```

## Working with Secret Versions and Stages
When managing secrets with AWS Secrets Manager, each secret can have multiple versions, and every version can have staging labels associated with it. By default, AWS Secrets Manager maintains two primary staging labels for secrets: `AWSCURRENT` for the current live version of the secret and `AWSPREVIOUS` for the directly preceding version. The `list_secret_version_ids` function, by default, lists versions that have staging labels, typically returning the two latest versions unless additional custom staging labels are manually assigned to other versions.

Let's see how to work with secret versions and stages:

```Python
# List versions of a secret that have staging labels
versions = client.list_secret_version_ids(SecretId='MyTestSecret')
print('Available versions of the Secret:', versions)

previous_secret_value = client.get_secret_value(SecretId='MyTestSecret', VersionStage='AWSPREVIOUS')['SecretString']
print('Previous Secret Value:', previous_secret_value)
```
This script demonstrates how to list versions that have staging labels and retrieve the value for a specific staging label. It's important to manage these versions and stages effectively to maintain the integrity of secret values across different environments and deployments.

## Secret Deletion and Restoration
Managing the lifecycle of secrets often involves deleting them when they're no longer needed. However, AWS Secrets Manager provides a safeguard against accidental deletion through its recovery features:

```Python
# Delete the secret
client.delete_secret(
    SecretId='MyTestSecret',
    ForceDeleteWithoutRecovery=False,  # Allows the secret to be recoverable for a specified period
    RecoveryWindowInDays=7             # Specifies the number of days within which the secret can be recovered
)

# Restore the secret within the recovery window
response_restore = client.restore_secret(
    SecretId='MyTestSecret',
)
print('Restored Secret:', response_restore)
```

In the deletion process, two key parameters are involved:

* `ForceDeleteWithoutRecovery`: When set to `False`, it enables the secret to be recoverable. The default value is `False`, meaning that, by default, secrets are recoverable, protecting against their permanent loss due to accidental deletion.
* `RecoveryWindowInDays`: Specifies the duration (in days) within which a deleted secret can be restored. The default recovery window is 30 days if this parameter is not specified, providing a generous period for recovery after deletion. In the example above, it's explicitly set to 7 days for demonstration purposes.

The ability to recover secrets provides a safety net, ensuring that critical secrets can be restored if they were deleted prematurely or in error. After a secret is deleted, but within the recovery window, the secret can be restored using the `restore_secret()` method, as demonstrated. If not restored within the recovery window, the secret will be permanently deleted and cannot be recovered.

## Summary
In this lesson, we've delved deeper into AWS Secrets Manager, exploring advanced concepts such as password generation, secret versioning, secret restoration, and secret tagging. Understanding these features allows you to utilize Secrets Manager to its full potential, securing your applications more effectively.

Now that we've covered these advanced concepts, it's time to apply what we've learned! The following exercises will give you practical experience with these features. Let's get started!
