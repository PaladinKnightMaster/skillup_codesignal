# import boto3

# # Initialize the boto3 Secrets Manager client
# sm = boto3.client('secretsmanager')

# # Create a new secret
# response = sm.create_secret(Name='CosmosSecret', SecretString='mysecret')

# # TO DO: Tag the secret with Cosmo as the creator

import boto3

# Initialize the boto3 Secrets Manager client
sm = boto3.client('secretsmanager')

# Create a new secret
response = sm.create_secret(Name='CosmosSecret', SecretString='mysecret')
print('Created Secret:', response)

# Tag the secret with Cosmo as the creator
response_tag = sm.tag_resource(
    SecretId='CosmosSecret',
    Tags=[
        {
            'Key': 'Creator',
            'Value': 'Cosmo'
        }
    ]
)

print('Tagged Secret with Creator=Cosmo:', response_tag)
