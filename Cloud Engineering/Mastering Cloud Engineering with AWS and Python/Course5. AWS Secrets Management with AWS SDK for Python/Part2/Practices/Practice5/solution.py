# TODO: Initialize a boto3 client for Secrets Manager

# TODO: Create a secret named TestSecret with the username "test" and password "password"

# TODO: Retrieve the secret you've just created using its SecretId

# TODO: Rotate the secret by updating it which should generate a new version

# TODO: Retrieve the updated/rotated secret once again to validate the update

# TODO: Describe the secret

# TODO: Retrieve the previous version of the secret by its version stage AWSPREVIOUS


import boto3

# TODO: Initialize a boto3 client for Secrets Manager
client = boto3.client("secretsmanager")
# TODO: Create a secret named TestSecret with the username "test" and password "password"
response = client.create_secret(
    Name="TestSecret",
    SecretString='{"username":"test","password":"password"}',
)
# TODO: Retrieve the secret you've just created using its SecretId
response_get = client.get_secret_value(SecretId="TestSecret")
print("Secret Retrieved: ", response_get['SecretString'])
# TODO: Rotate the secret by updating it which should generate a new version
response_rotate = client.update_secret(
    SecretId="TestSecret",
    SecretString='{"username":"test","password":"newpassword"}',
)
# TODO: Retrieve the updated/rotated secret once again to validate the update
response_get_updated = client.get_secret_value(SecretId="TestSecret")
print("Updated Secret Retrieved: ", response_get_updated['SecretString'])
# TODO: Describe the secret
response_describe = client.describe_secret(SecretId="TestSecret")
print("Version IDs: ", response_describe['VersionIdsToStages'].keys())
# TODO: Retrieve the previous version of the secret by its version stage AWSPREVIOUS
response_previous = client.get_secret_value(SecretId="TestSecret", VersionStage="AWSPREVIOUS")
print("Previous Secret Version Retrieved: ", response_previous['SecretString'])