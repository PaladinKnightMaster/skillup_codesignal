# Managing Secrets and Configurations with AWS SSM Parameter Store

## Introduction to AWS SSM Parameter Store
Welcome back! In our previous lessons, we explored the AWS Secrets Manager using the AWS SDK (**Boto3**) for Python. Today, we will delve into another vital component of AWS's secrets management ecosystem — the **AWS Systems Manager Parameter Store**, or **SSM Parameter Store** for short.

SSM Parameter Store is a service that provides secure, hierarchical storage for configuration data and secrets management. It helps you manage data like passwords, database strings, Amazon Machine Image (AMI) IDs, and license codes as parameter values. You can store values as text strings or encrypted data. By using Parameter Store, you can separate your secret and configuration data from your code. For more detailed information, refer to the official **AWS Systems Manager Parameter Store documentation**.

To communicate with the SSM Parameter Store, we will be using our trusty assistant, the `AWS SDK for Python — Boto3`, brushing up on what we have learned in previous lessons.

## Types of Parameters
SSM Parameter Store supports three parameter types: `String`, `SecureString`, and `StringList`.

* **String**: This type is used to represent plain text data. For example, it can store URLs, usernames, or any other configuration data represented as plain text.

* **SecureString**: This type is used to represent sensitive data such as passwords, API keys, database connection strings, etc. SecureString parameters are encrypted with AWS Key Management Service for increased security.

* **StringList**: This type is used to store a comma-separated list of values. For example, it can store a list of IP addresses or resource ARNs. Note that `StringList` cannot be encrypted.

## Creating Parameters in AWS SSM Parameter Store
Let's start with something basic — creating parameters. Here's how to create plain text ("String") and encrypted ("SecureString") parameters using the Boto3 client:

```Python
ssm = boto3.client('ssm')

# Create a plain text parameter for application's API URL
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.myapp.com',
    Type='String',
)

# Create an encrypted parameter for application's API key
ssm.put_parameter(
    Name='/app_config/api_key',
    Value='my_encrypted_api_key',
    Type='SecureString',
)
```

Here, we initialize the Boto3 SSM client and use the `put_parameter()` function to create two parameters, one plain text and one encrypted.

## Reading and Updating Parameters
Reading parameters is as straightforward as creating them. We use the `get_parameter()` function, specifying the parameter name and whether we want to decrypt encrypted values. Here's how to fetch the API URL we just stored:

```Python
response = ssm.get_parameter(
    Name='/app_config/api_url',
    WithDecryption=False
)
print('API URL:', response['Parameter']['Value'])
```

In this example, the `get_parameter()` function retrieves the specified parameter and its associated information. The function returns a dictionary containing a 'Parameter' key, which itself is a dictionary containing various attributes of the parameter, including its 'Value'.

Updating parameters is also pretty straightforward. Suppose our API URL has changed and needs to be updated. In that case, we use the same `put_parameter()` function but with an additional parameter — `Overwrite=True`:

```Python
# Update the API URL parameter
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.newurl.com',
    Type='String',
    Overwrite=True,
)
```

## Organizing Parameters with Hierarchies
One of the best features of the SSM Parameter Store is its support for hierarchical storage. It allows us to create a hierarchy of parameters for an application's config, retrieve parameters from a specific path, and even assign granular access permissions at different levels of the hierarchy. Let's see this in action:

```Python
# Create a parameter hierarchy for application's database config
ssm.put_parameter(
    Name='/app_config/database/host',
    Value='db.myapp.com',
    Type='String',
)
ssm.put_parameter(
    Name='/app_config/database/user',
    Value='mydbuser',
    Type='String',
)
ssm.put_parameter(
    Name='/app_config/database/password',
    Value='mydbpassword',
    Type='SecureString',
)

# List all parameters in '/app_config/database' hierarchy
response = ssm.get_parameters_by_path(
    Path='/app_config/database',
    WithDecryption=False
)
for param in response['Parameters']:
    print('Name:', param['Name'], 'Value:', '[SECURE]' if param['Type'] == 'SecureString' else param['Value'])
```

The `get_parameters_by_path` method allows us to retrieve all parameters within a specified hierarchy. By specifying the `Path` argument, you tell AWS to return all parameters that start with this path. The `WithDecryption` flag indicates whether `SecureString` values should be decrypted when retrieved. This method is particularly useful for managing and accessing groups of parameters efficiently, enabling you to fetch multiple related configuration values in a single API call.

## Managing Tags for Parameters
Tagging helps organize your AWS resources and makes it easier to allocate costs and optimize resource spending. Tags in AWS are simply labels consisting of a user-defined key and value pair. AWS SSM Parameter Store supports tagging of parameters, and you can programmatically manage tags using Boto3, including both adding and deleting tags:

```Python
# Tag the encrypted API key parameter
ssm.add_tags_to_resource(
    ResourceType='Parameter',
    ResourceId='/app_config/api_key',
    Tags=[{'Key': 'Environment', 'Value': 'Prod'}]
)

# Delete a tag from the API key parameter
ssm.remove_tags_from_resource(
    ResourceType='Parameter',
    ResourceId='/app_config/api_key',
    TagKeys=['Environment']
)
```

In the first part, you add a tag to the encrypted API key parameter. Then, if the need arises to remove a tag from a parameter, perhaps because the environment it relates to has changed or the parameter is being repurposed, the `remove_tags_from_resource` method allows you to specify which tags to delete using the `TagKeys` list.

## Deleting Parameters from Parameter Store
Lastly, we need to know how to clean up after ourselves. The AWS SDK for Python provides neat ways to delete parameters, individually or in batches:

```Python
# Delete the API URL parameter
ssm.delete_parameter(Name='/app_config/api_url')

# Delete parameters in the database hierarchy
ssm.delete_parameters(Names=[
    '/app_config/database/host',
    '/app_config/database/user',
    '/app_config/database/password'
])
```

## Summary and Practice
Congratulations, you've learned a broad range of operations involving the AWS SSM Parameter Store! While this marks the end of this specific lesson, remember that real mastery will come through hands-on practice with CodeSignal’s interactive coding exercises.

In the next hands-on session, you will practice how to create, update, read, tag, and delete parameters in the SSM Parameter Store. Additionally, you'll work with hierarchical parameter storage, providing you with a well-rounded grasp of AWS secrets management.
