# import json
# import boto3

# # Create a client for Secrets Manager
# client = boto3.client("secretsmanager")

# # Create a secret for Cosmo
# response_create = client.create_secret(
#     Name="SurprisePartyDetails",
#     SecretString='{"venue":"Cosmo´s Place","date":"Soon"}'
# )
# print("Secret Created: ", response_create['Name'])

# # Retrieve the secret
# response_get = client.get_secret_value(SecretId="SurprisePartyDetails")
# print("Secret Retrieved: ", json.loads(response_get['SecretString']))

# # TODO: Update the secret for Cosmo to include the time of the event

# # TODO: Retrieve the updated secret

import json
import boto3
from botocore.exceptions import ClientError

# Create a client for Secrets Manager
client = boto3.client("secretsmanager")

# Create a secret for Cosmo
response_create = client.create_secret(
    Name="SurprisePartyDetails",
    SecretString='{"venue":"Cosmo´s Place","date":"Soon"}'
)
print("Secret Created: ", response_create['Name'])

# Retrieve the secret
response_get = client.get_secret_value(SecretId="SurprisePartyDetails")
print("Secret Retrieved: ", json.loads(response_get['SecretString']))

# TODO: Update the secret for Cosmo to include the time of the event
try:
    # Retrieve the current secret value
    current_secret = client.get_secret_value(SecretId="SurprisePartyDetails")
    secret_dict = json.loads(current_secret['SecretString'])

    # Update the secret with the new time attribute
    secret_dict['time'] = "19:00"

    # Update the secret in Secrets Manager
    response_update = client.update_secret(
        SecretId="SurprisePartyDetails",
        SecretString=json.dumps(secret_dict)
    )
    print("Secret Updated: ", response_update['ARN'])
except ClientError as e:
    print(f"Failed to update secret: {e}")

# TODO: Retrieve the updated secret
try:
    # Retrieve the updated secret value
    response_updated_get = client.get_secret_value(SecretId="SurprisePartyDetails")
    updated_secret = json.loads(response_updated_get['SecretString'])
    print("Updated Secret Retrieved: ", updated_secret)
except ClientError as e:
    print(f"Failed to retrieve updated secret: {e}")
