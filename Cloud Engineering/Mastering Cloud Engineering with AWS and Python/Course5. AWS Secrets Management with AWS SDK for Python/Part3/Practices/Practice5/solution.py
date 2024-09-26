# import boto3

# # Initialize the boto3 Secrets Manager client
# sm = boto3.client('secretsmanager')

# # Create a new secret
# response = sm.create_secret(Name='CosmosSecret', SecretString='secret1')

# # Update the secret twice
# sm.update_secret(SecretId='CosmosSecret', SecretString='secret2')
# sm.update_secret(SecretId='CosmosSecret', SecretString='secret3')

# # TO DO: List and print 2 latest version IDs of the secret
# # TO DO: Retrieve and print the value of the version of the secret labeled as AWSPREVIOUS

import boto3

# Initialize the boto3 Secrets Manager client
sm = boto3.client('secretsmanager')

# Create a new secret
response = sm.create_secret(Name='CosmosSecret', SecretString='secret1')

# Update the secret twice
sm.update_secret(SecretId='CosmosSecret', SecretString='secret2')
sm.update_secret(SecretId='CosmosSecret', SecretString='secret3')

# List and print the two latest version IDs of the secret
secret_metadata = sm.describe_secret(SecretId='CosmosSecret')
version_ids = list(secret_metadata['VersionIdsToStages'].keys())

# Print the two latest version IDs
print("Two latest version IDs:", version_ids[:2])

# Retrieve and print the value of the version of the secret labeled as AWSPREVIOUS
if 'AWSPREVIOUS' in secret_metadata['VersionIdsToStages'].values():
    previous_version_id = next(key for key, value in secret_metadata['VersionIdsToStages'].items() if 'AWSPREVIOUS' in value)
    previous_secret_value = sm.get_secret_value(SecretId='CosmosSecret', VersionId=previous_version_id)
    print("Value of the secret with AWSPREVIOUS label:", previous_secret_value['SecretString'])
else:
    print("No version with AWSPREVIOUS label found.")
