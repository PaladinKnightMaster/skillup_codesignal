# import json
# import boto3

# # Initialize the Secrets Manager client
# client = boto3.client("secretsmanager")

# # Create the secret for the party
# response_create = client.create_secret(
#     Name="PartyDetails",
#     SecretString='{"venue":"CodeSignal","date":"Now", "time":"19:00"}'
# )
# print("Secret Created: ", response_create['Name'])

# # TODO: Delete the secret

import json
import boto3
from botocore.exceptions import ClientError

# Initialize the Secrets Manager client
client = boto3.client("secretsmanager")

# Create the secret for the party
try:
    response_create = client.create_secret(
        Name="PartyDetails",
        SecretString='{"venue":"CodeSignal","date":"Now", "time":"19:00"}'
    )
    print("Secret Created: ", response_create['Name'])
except ClientError as e:
    if e.response['Error']['Code'] == 'ResourceExistsException':
        print("Secret 'PartyDetails' already exists.")
    else:
        print("Error creating secret: ", e)

# Delete the secret
try:
    response_delete = client.delete_secret(
        SecretId="PartyDetails",
        ForceDeleteWithoutRecovery=True  # This forces immediate deletion without recovery
    )
    print("Secret Deleted: ", response_delete['ARN'])
except ClientError as e:
    if e.response['Error']['Code'] == 'ResourceNotFoundException':
        print("Secret 'PartyDetails' does not exist.")
    else:
        print("Error deleting secret: ", e)
