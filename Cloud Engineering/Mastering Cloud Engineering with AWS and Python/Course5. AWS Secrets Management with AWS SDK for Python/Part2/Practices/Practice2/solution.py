# import boto3

# # Initialize the Secrets Manager client
# client = boto3.client("secretsmanager")

# # TODO: Create the secret for the meeting

import boto3
import json
from botocore.exceptions import ClientError

# Initialize the Secrets Manager client
client = boto3.client("secretsmanager")

# Create the secret for the meeting
secret_name = "StrategyMeeting"
secret_value = {
    "venue": "CodeSignal Office",
    "date": "Tomorrow"
}

try:
    response = client.create_secret(
        Name=secret_name,
        SecretString=json.dumps(secret_value)
    )
    print(f"Secret '{secret_name}' created successfully.")
except ClientError as e:
    if e.response['Error']['Code'] == 'ResourceExistsException':
        print(f"Secret '{secret_name}' already exists.")
    else:
        print(f"Failed to create secret '{secret_name}': {e}")
