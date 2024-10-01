# import boto3
# import time

# # Initialize the boto3 Secrets Manager client
# sm = boto3.client('secretsmanager')

# # Create a new secret
# response = sm.create_secret(Name='CosmosSecret', SecretString='mysecret')

# # Delete the secret
# sm.delete_secret(SecretId='CosmosSecret', RecoveryWindowInDays=7)

# # TO DO: Restore the deleted secret

import boto3
import time

# Initialize the boto3 Secrets Manager client
sm = boto3.client('secretsmanager')

# Create a new secret
response = sm.create_secret(Name='CosmosSecret', SecretString='mysecret')

# Delete the secret
sm.delete_secret(SecretId='CosmosSecret', RecoveryWindowInDays=7)

# TO DO: Restore the deleted secret
response_restore = sm.restore_secret(SecretId='CosmosSecret')
print('Restored Secret:', response_restore)