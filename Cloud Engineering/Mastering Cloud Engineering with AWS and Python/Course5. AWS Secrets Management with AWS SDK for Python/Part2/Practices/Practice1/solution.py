import boto3

# Create a client for Secrets Manager
client = boto3.client("secretsmanager")

# Create a secret
response_create = client.create_secret(
    Name="TestSecret",
    SecretString='{"username":"test","password":"password"}'
)
print("Secret Created: ", response_create['Name'])

# Retrieve a secret
response_get = client.get_secret_value(SecretId="TestSecret")
print("Secret Retrieved: ", response_get['SecretString'])

# Rotate a secret by updating it which would generate a new version
response_rotate = client.update_secret(
    SecretId="TestSecret",
    SecretString='{"username":"test","password":"newpassword"}'
)

# Retrieve the updated/rotated secret
response_get_updated = client.get_secret_value(SecretId="TestSecret")
print("Updated Secret Retrieved: ", response_get_updated['SecretString'])

# Get the version ids of the secret
response_version = client.describe_secret(SecretId="TestSecret")
if 'VersionIdsToStages' in response_version:
    print("Version IDs: ", response_version['VersionIdsToStages'].keys())